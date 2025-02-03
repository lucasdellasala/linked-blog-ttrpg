import type Author from './author'
import Status from './status'

type PostType = {
  slug: string
  excerpt: string
  title: string
  content: string
  date?: string
  status?: Status
  author?: Author
  ogImage?: {
    url: string
  }
  image?: {
    url: string
    alt: string
    type: string
  }
}

export default PostType
