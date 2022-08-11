import { Post } from '../Post'
import { PostsContainer } from './styles'

interface PostsProps {
  posts: {
    id?: number
    title: string
    content: string
  }[]
}

export function Posts({ posts }: PostsProps) {
  return (
    <PostsContainer>
      {posts.map((post) => {
        return <Post key={post.id} content={post.content} title={post.title} />
      })}
    </PostsContainer>
  )
}
