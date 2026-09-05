const stories = [
  {
    category: 'COLLEGE & STUDENT LIFE',
    title: 'The First Lesson of College Is Not Always in the Classroom',
    excerpt: 'College is where routines, people and unexpected experiences begin shaping the way we think.',
    date: 'September 5, 2026',
  },
  {
    category: 'BUSINESS & FINANCE',
    title: 'Why Financial Awareness Matters for Students',
    excerpt: 'Understanding money early can help students make smarter decisions long before their first full-time job.',
    date: 'September 5, 2026',
  },
  {
    category: 'COLLEGE & STUDENT LIFE',
    title: 'Building a Daily Habit of Learning',
    excerpt: 'Small, consistent learning habits can turn an ordinary college day into something meaningful.',
    date: 'September 4, 2026',
  },
]

export default function Home() {
  const featured = stories[0]

  return (
    <main>
      <header className="masthead">
        <div className="topline"><span>EST. 2026</span><span>DAILY DIGITAL JOURNAL</span></div>
        <h1>THE VIKAS JOURNAL</h1>
        <p className="tagline">CAMPUS • CAPITAL • IDEAS</p>
        <nav><a href="#college">College & Student Life</a><a href="#finance">Business & Finance</a><a href="#latest">Latest</a></nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">TODAY'S FEATURE • {featured.date}</p>
          <h2>{featured.title}</h2>
          <p>{featured.excerpt}</p>
          <button>READ FEATURE →</button>
        </div>
        <div className="hero-art"><span>VJ</span></div>
      </section>

      <div className="rule" />
      <section id="latest" className="section-heading"><h2>THE LATEST</h2><span>EDITIONS & STORIES</span></section>

      <section className="grid" id="college">
        {stories.slice(1).map((story) => (
          <article className="card" key={story.title} id={story.category.includes('FINANCE') ? 'finance' : undefined}>
            <div className="card-image"><span>{story.category === 'BUSINESS & FINANCE' ? '₹' : 'CAMPUS'}</span></div>
            <p className="eyebrow">{story.category}</p>
            <h3>{story.title}</h3>
            <p>{story.excerpt}</p>
            <small>{story.date} · 3 MIN READ</small>
          </article>
        ))}
      </section>

      <section className="newsletter">
        <p className="eyebrow">THE JOURNAL</p>
        <h2>Stories from campus. Ideas about money. Thoughts worth reading.</h2>
        <p>The Vikas Journal is a personal digital newspaper exploring student life, business and finance.</p>
      </section>

      <footer><strong>THE VIKAS JOURNAL</strong><span>© 2026 Vikas. All rights reserved.</span></footer>
    </main>
  )
}
