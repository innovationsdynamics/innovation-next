const fs = require('fs');
const path = require('path');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules') walk(full, files);
    else if (/\.jsx?$/.test(entry.name)) files.push(full);
  }
  return files;
}

for (const file of walk(path.join(__dirname, '..', 'src'))) {
  let c = fs.readFileSync(file, 'utf8');
  const o = c;
  if (!c.includes('useNavigate') && !c.includes('useLocation')) continue;

  c = c.replace(/\buseNavigate\b/g, 'useRouter');
  c = c.replace(/const navigate = useRouter\(\)/g, 'const router = useRouter()');
  c = c.replace(/\bnavigate\(/g, 'router.push(');

  if (c.includes('useLocation')) {
    c = c.replace(/\buseLocation\b/g, 'USE_LOCATION_PLACEHOLDER');
    c = c.replace(/import \{([^}]+)\} from 'next\/navigation'/g, (m, imp) => {
      const parts = imp.split(',').map((s) => s.trim()).filter(Boolean);
      const filtered = parts.filter((p) => p !== 'USE_LOCATION_PLACEHOLDER');
      if (!filtered.includes('usePathname')) filtered.push('usePathname');
      if (!filtered.includes('useSearchParams')) filtered.push('useSearchParams');
      return `import { ${filtered.join(', ')} } from 'next/navigation'`;
    });
    c = c.replace(/const location = USE_LOCATION_PLACEHOLDER\(\)/g,
      'const pathname = usePathname();\n    const searchParams = useSearchParams()');
    c = c.replace(/location\.pathname/g, 'pathname');
    c = c.replace(/location\.search/g, "(searchParams.toString() ? `?${searchParams.toString()}` : '')");
    c = c.replace(/location\.state\?\.from\?\.pathname \|\| '\/'/g, "(typeof window !== 'undefined' && sessionStorage.getItem('loginRedirect')) || '/'");
    c = c.replace(/location\.state/g, 'null');
    c = c.replace(/USE_LOCATION_PLACEHOLDER/g, 'useLocation');
  }

  if (c !== o) {
    fs.writeFileSync(file, c);
    console.log('fixed', file);
  }
}
