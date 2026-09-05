import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'posts')

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { data: {}, content: source }

  const data = {}
  match[1].split('\n').forEach((line) => {
    const index = line.indexOf(':')
    if (index === -1) return
    const key = line.slice(0, index).trim()
    const value = line.slice(index + 1).trim().replace(/^['"]|['"]$/g, '')
    data[key] = value
  })

  return { data, content: match[2].trim() }
}

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return []

  return fs.readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const source = fs.readFileSync(path.join(postsDirectory, file), 'utf8')
      const { data, content } = parseFrontmatter(source)
      return { slug, ...data, content }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const source = fs.readFileSync(filePath, 'utf8')
  const { data, content } = parseFrontmatter(source)
  return { slug, ...data, content }
}
