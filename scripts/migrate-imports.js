const fs = require('fs');
const path = require('path');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== 'api') {
      walk(full, files);
    } else if (/\.(jsx?|tsx?)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const root = path.join(__dirname, '..', 'src');
const files = walk(root);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const replacements = [
    [/import\.meta\.env\.VITE_API_URL(\?\.replace\('\/api', ''\)\s*\|\|\s*''|\?\.replace\('\/api', ''\)|\.replace\('\/api', ''\)|)/g, "'/api'"],
    [/import\.meta\.env\.VITE_API_URL/g, "'/api'"],
    [/import\.meta\.env\.VITE_CLOVER_PUBLIC_KEY/g, 'process.env.NEXT_PUBLIC_CLOVER_PUBLIC_KEY'],
    [/\$\{'\/api'\}/g, '/api'],
    [/"'\/api' \|\| 'http:\/\/localhost:\d+\/api'"/g, "'/api'"],
    [/'\/api' \|\| 'http:\/\/localhost:\d+\/api'/g, "'/api'"],
    [/from 'react-router-dom'/g, "from 'next/navigation'"],
    [/from "react-router-dom"/g, 'from "next/navigation"'],
  ];

  for (const [pattern, replacement] of replacements) {
    const next = content.replace(pattern, replacement);
    if (next !== content) {
      content = next;
      changed = true;
    }
  }

  if (content.includes('useNavigate') || content.includes('useLocation') || content.includes('NavLink') || content.includes('Outlet') || content.includes('Navigate')) {
    if (!content.startsWith("'use client'") && !content.startsWith('"use client"')) {
      content = "'use client';\n\n" + content;
      changed = true;
    }
  }

  if (file.includes('redux\\store.js') || file.includes('redux/store.js')) {
    content = content.replace(
      /const cartItemsFromStorage = localStorage\.getItem\('cartItems'\)[\s\S]*?const initialState = \{/,
      `const getStorage = (key, fallback) => {
    if (typeof window === 'undefined') return fallback;
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : fallback;
    } catch {
        return fallback;
    }
};

const cartItemsFromStorage = getStorage('cartItems', []);
const userInfoFromStorage = getStorage('userInfo', null);
const shippingAddressFromStorage = getStorage('shippingAddress', {});

const initialState = {`
    );
    changed = true;
  }

  if (content.includes('window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__')) {
    content = content.replace(
      'const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;',
      "const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;"
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated:', path.relative(root, file));
  }
}

console.log('Done');
