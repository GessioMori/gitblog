import { useParams } from 'react-router-dom'
import { PostHeader } from './components/PostHeader'

export function PostPage() {
  const { postId } = useParams()
  console.log(postId)
  return <PostHeader />
}
