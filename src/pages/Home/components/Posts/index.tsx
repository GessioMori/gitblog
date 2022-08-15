import { useContext } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'
import { Post } from '../Post'
import { PostsContainer } from './styles'

export function Posts() {
  const { posts } = useContext(PostsContext)
  return (
    <PostsContainer>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            content={post.body}
            title={post.title}
            created_at={post.created_at}
          />
        )
      })}
    </PostsContainer>
  )
}
