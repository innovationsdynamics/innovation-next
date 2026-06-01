const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const frontendRoot = path.resolve(root, '..', 'frontend');
const appRoot = path.join(root, 'src', 'app');
const siteUrl = 'https://innovationdynamicsgroup.com';

const parseMetaContent = (text, attrName, attrValue) => {
  const regex = new RegExp(`<meta\\s+${attrName}="${attrValue}"[\\s\\S]*?content="([\\s\\S]*?)"`, 'i');
  const match = text.match(regex);
  return match ? match[1].trim() : '';
};

const parseTag = (text, tagName) => {
  const regex = new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`, 'i');
  const match = text.match(regex);
  return match ? match[1].trim() : '';
};

const walk = (dir) => {
  let out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(walk(full));
    else if (entry.isFile() && entry.name === 'index.html') out.push(full);
  }
  return out;
};

const frontendFiles = walk(frontendRoot).sort();
const pageFiles = fs.readdirSync(appRoot, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .filter((name) => fs.existsSync(path.join(appRoot, name, 'page.jsx')))
  .sort();

const targetFiles = new Map();
for (const filePath of frontendFiles) {
  const rel = path.relative(frontendRoot, path.dirname(filePath)).replace(/\\/g, '/');
  const route = rel === '' || rel === '.' ? '' : rel;
  const pageFile = route === '' ? path.join(appRoot, 'page.jsx') : path.join(appRoot, route, 'page.jsx');
  if (!fs.existsSync(pageFile)) continue;
  const txt = fs.readFileSync(filePath, 'utf8');
  const title = parseTag(txt, 'title');
  const description = parseMetaContent(txt, 'name', 'description');
  const keywords = parseMetaContent(txt, 'name', 'keywords');
  const ogTitle = parseMetaContent(txt, 'property', 'og:title') || title;
  const ogDescription = parseMetaContent(txt, 'property', 'og:description') || description;
  const ogUrl = parseMetaContent(txt, 'property', 'og:url') || `${siteUrl}/${route ? route + '/' : ''}`;
  const ogImage = parseMetaContent(txt, 'property', 'og:image') || `${siteUrl}/idg-logo.png`;
  const ogImageAlt = parseMetaContent(txt, 'property', 'og:image:alt') || title;
  const twitterImage = parseMetaContent(txt, 'name', 'twitter:image') || ogImage;
  const robots = parseMetaContent(txt, 'name', 'robots') || 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  const canonical = parseMetaContent(txt, 'rel', 'canonical') || ogUrl;

  const metadata = {
    title,
    description,
    keywords,
    robots,
    authors: [{ name: 'Innovation Dynamics Group LLC' }],
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: ogUrl,
      siteName: 'Innovation Dynamics Group',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [twitterImage],
    },
  };

  targetFiles.set(pageFile, metadata);
}

const formatMetadata = (metadata) => {
  const lines = ['export const metadata = {'];
  if ('title' in metadata) {
    lines.push(`  title: ${JSON.stringify(metadata.title)},`);
  }
  for (const key of ['description', 'keywords', 'robots']) {
    if (key in metadata && metadata[key] !== undefined) {
      lines.push(`  ${key}: ${JSON.stringify(metadata[key])},`);
    }
  }
  lines.push('  authors: [{ name: "Innovation Dynamics Group LLC" }],');
  lines.push(`  alternates: { canonical: ${JSON.stringify(metadata.alternates.canonical)} },`);
  lines.push('  openGraph: {');
  lines.push(`    title: ${JSON.stringify(metadata.openGraph.title)},`);
  lines.push(`    description: ${JSON.stringify(metadata.openGraph.description)},`);
  lines.push(`    url: ${JSON.stringify(metadata.openGraph.url)},`);
  lines.push('    siteName: "Innovation Dynamics Group",');
  lines.push('    type: "website",');
  lines.push('    locale: "en_US",');
  lines.push('    images: [');
  lines.push('      {');
  lines.push(`        url: ${JSON.stringify(metadata.openGraph.images[0].url)},`);
  lines.push('        width: 1200,');
  lines.push('        height: 630,');
  lines.push(`        alt: ${JSON.stringify(metadata.openGraph.images[0].alt)},`);
  lines.push('      },');
  lines.push('    ],');
  lines.push('  },');
  lines.push('  twitter: {');
  lines.push('    card: "summary_large_image",');
  lines.push(`    title: ${JSON.stringify(metadata.twitter.title)},`);
  lines.push(`    description: ${JSON.stringify(metadata.twitter.description)},`);
  lines.push('    images: [');
  lines.push(`      ${JSON.stringify(metadata.twitter.images[0])},`);
  lines.push('    ],');
  lines.push('  },');
  lines.push('};');
  return lines.join('\n');
};

const replaceMetadataBlock = (content, newMeta) => {
  const regex = /export const metadata = \{[\s\S]*?\};/;
  if (regex.test(content)) {
    return content.replace(regex, newMeta);
  }
  const insertPoint = content.search(/export default function Page\(/);
  if (insertPoint === -1) {
    throw new Error('No export default function Page block found to insert metadata');
  }
  return content.slice(0, insertPoint) + newMeta + '\n\n' + content.slice(insertPoint);
};

let patched = 0;
for (const [filePath, metadata] of targetFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  const newMetadata = formatMetadata(metadata);
  const updated = replaceMetadataBlock(content, newMetadata);
  fs.writeFileSync(filePath, updated, 'utf8');
  patched += 1;
  console.log(`Patched ${path.relative(root, filePath)}`);
}
console.log(`Patched ${patched} page metadata files.`);
