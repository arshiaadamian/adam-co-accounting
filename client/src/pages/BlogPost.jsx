import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../utils/parsePosts';

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h1>
        <p className="text-gray-500 mb-6">
          The post you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link to="/blog" className="text-blue-600 hover:underline text-sm">
        ← Back to Blog
      </Link>

      <article className="mt-6">
        <p className="text-sm text-gray-400 mb-2">{formatDate(post.date)}</p>
        <h1 className="text-3xl font-bold text-blue-900 mb-8">{post.title}</h1>

        {/*
          prose-* classes come from @tailwindcss/typography.
          They apply sensible typographic styles (headings, paragraphs, lists, etc.)
          to the raw HTML that marked.parse() generates from markdown.
        */}
        <div
          className="prose prose-blue max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
  );
}
