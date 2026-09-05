import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '../../../lib/posts'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="article-page">
      <header className="article-header">
        <a href="/" className="back-link">← THE VIKAS JOURNAL</a>
        <p className="eyebrow">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="article-meta">{post.date} · {post.readTime || '3 MIN READ'}</p>
      </header>
      <article className="article-body">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
      <footer><strong>THE VIKAS JOURNAL</strong><span>Campus • Capital • Ideas</span></footer>
    </main>
  )
}
