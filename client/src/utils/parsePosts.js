import { marked } from 'marked';

// ── Frontmatter parser ────────────────────────────────────────────────────────
//
// Each markdown post file can start with a frontmatter block:
//
//   ---
//   title: My Post Title
//   date: 2025-06-01
//   description: A short one-sentence summary.
//   ---
//
//   Markdown content starts here...
//
// This function splits that header out and returns both the metadata (`data`)
// and the remaining markdown body (`content`).
function parseFrontmatter(rawContent) {
  // Match the --- delimiters and capture what's between them
  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

  if (!match) {
    // No frontmatter — treat the whole file as content with no metadata
    return { data: {}, content: rawContent };
  }

  // Parse each "key: value" line into a plain object
  const data = {};
  match[1].split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();
    data[key] = value;
  });

  return { data, content: match[2] };
}

// ── Load all posts at build time ──────────────────────────────────────────────
//
// import.meta.glob is a Vite-only API that resolves at build time (not runtime).
// It scans the matching files and returns a map of { filepath: fileContents }.
//
// { query: '?raw', import: 'default' } tells Vite to give us each file as a
// plain string rather than executing it as a JavaScript module.
//
// { eager: true } means "import them all immediately" instead of lazily on demand.
//
const rawFiles = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

// Process every file once when this module first loads
const ALL_POSTS = Object.entries(rawFiles)
  .map(([filepath, rawContent]) => {
    // Turn "../content/posts/my-post.md" into the slug "my-post"
    const slug = filepath.split('/').pop().replace(/\.md$/, '');
    const { data, content } = parseFrontmatter(rawContent);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      description: data.description || '',
      // marked.parse() converts markdown text → HTML string
      html: marked.parse(content),
    };
  })
  // Sort newest-first
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getAllPosts() {
  return ALL_POSTS;
}

export function getPostBySlug(slug) {
  return ALL_POSTS.find(post => post.slug === slug) || null;
}
