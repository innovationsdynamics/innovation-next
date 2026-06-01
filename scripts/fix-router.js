const fs = require('fs');
const path = require('path');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !['node_modules', 'api', 'lib'].includes(entry.name)) {
      walk(full, files);
    } else if (/\.(jsx?)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const files = walk(path.join(__dirname, '..', 'src'));

for (const file of files) {
  let c = fs.readFileSync(file, 'utf8');
  const orig = c;

  if (c.includes('useNavigate')) {
    c = c.replace(
      /import \{([^}]*)\} from 'next\/navigation';/,
      (match, imports) => {
        let list = imports.split(',').map((s) => s.trim()).filter(Boolean);
        list = list.filter((i) => i !== 'useNavigate');
        if (!list.includes('useRouter')) list.push('useRouter');
        return `import { ${list.join(', ')} } from 'next/navigation';`;
      }
    );
    c = c.replace(/const navigate = useNavigate\(\);/g, 'const router = useRouter();');
    c = c.replace(/\bnavigate\(/g, 'router.push(');
  }

  if (c.includes('useLocation')) {
    c = c.replace(
      /import \{([^}]*)\} from 'next\/navigation';/,
      (match, imports) => {
        let list = imports.split(',').map((s) => s.trim()).filter(Boolean);
        list = list.filter((i) => i !== 'useLocation');
        if (!list.includes('usePathname')) list.push('usePathname');
        if (!list.includes('useSearchParams')) list.push('useSearchParams');
        return `import { ${list.join(', ')} } from 'next/navigation';`;
      }
    );
    c = c.replace(/const location = useLocation\(\);/g, 'const pathname = usePathname();\n    const searchParams = useSearchParams();');
    c = c.replace(/location\.pathname/g, 'pathname');
    c = c.replace(/location\.search/g, "(`?${searchParams.toString()}` ? `?${searchParams.toString()}` : '')");
    c = c.replace(/location\.state\?\.from\?\.pathname/g, "(typeof window !== 'undefined' ? sessionStorage.getItem('loginRedirect') : null) || '/'");
    c = c.replace(/location\.state/g, 'null');
  }

  if (c.includes('NavLink')) {
    c = c.replace(/import \{([^}]*)\} from 'next\/navigation';/, (m, imports) => {
      const list = imports.split(',').map((s) => s.trim()).filter((i) => i && i !== 'NavLink');
      return `import Link from 'next/link';\nimport { ${list.join(', ')} } from 'next/navigation';`;
    });
    c = c.replace(/<NavLink[\s\S]*?to=\{([^}]+)\}[\s\S]*?className=\{\(\{ isActive \}\) =>([\s\S]*?)\}[\s\S]*?>([\s\S]*?)<\/NavLink>/g,
      (match, to, classFn, inner) => {
        return `<Link href={${to}} onClick={() => setIsOpen(false)} className={pathname === ${to} || pathname === ${to} + '/' ? ${classFn.trim().replace('isActive', 'true')} : ${classFn.trim().replace('isActive', 'false')}}>${inner}</Link>`;
      }
    );
  }

  if (file.includes('AdminSidebar')) {
    if (!c.includes('usePathname')) {
      c = c.replace("from 'next/navigation';", "usePathname } from 'next/navigation';").replace(
        "import { NavLink, useNavigate }",
        "import Link, { useRouter, usePathname }"
      );
    }
  }

  fs.writeFileSync(file, c);
  if (c !== orig) console.log('Fixed:', path.relative(path.join(__dirname, '..'), file));
}

console.log('Router fix complete');
