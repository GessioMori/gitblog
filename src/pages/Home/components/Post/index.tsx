import { DateFormater } from '../../../../utils/dateFormater'
import { PostContentPreview, PostHeader, PostPreviewContainer } from './styles'

interface PostProps {
  content: string
  title: string
  created_at: string
  number: number
}

export function Post({ content, title, created_at, number }: PostProps) {
  return (
    <PostPreviewContainer to={`/post/${number}`}>
      <PostHeader>
        <span>{title}</span>
        <span>{DateFormater(created_at)}</span>
      </PostHeader>
      <PostContentPreview>
        <p>{content}</p>
      </PostContentPreview>
    </PostPreviewContainer>
  )
}
