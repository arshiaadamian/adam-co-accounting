import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/parsePosts';

// Format a YYYY-MM-DD date string as "June 1, 2025"
function formatDate(dateString) {
  if (!dateString) return '';
  // Append T00:00:00 to force local-timezone parsing (otherwise JS may use UTC
  // and the displayed date can be one day behind in some timezones)
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Resources &amp; Blog</h1>
      <p className="text-gray-600 mb-10">
        Practical advice on taxes, bookkeeping, and financial planning for small business owners.
      </p>

      {posts.length === 0 ? (
        <p className="text-gray-500">
          No posts yet. Add <code>.md</code> files to{' '}
          <code>client/src/content/posts/</code> to get started.
        </p>
      ) : (
        <ul className="space-y-6">
          {posts.map(post => (
            <li
              key={post.slug}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
            >
              <p className="text-sm text-gray-400 mb-1">{formatDate(post.date)}</p>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                <Link to={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">{post.description}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-blue-600 font-medium hover:underline text-sm"
              >
                Read more →
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
