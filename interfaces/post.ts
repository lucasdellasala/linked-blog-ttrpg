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
}

export default PostType
