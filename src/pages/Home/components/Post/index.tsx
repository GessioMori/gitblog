import * as dayjs from 'dayjs'
import { PostContentPreview, PostHeader, PostPreviewContainer } from './styles'

interface PostProps {
  id?: number
  content: string
  title: string
  created_at: string
}

export function Post({ content, title, created_at }: PostProps) {
  return (
    <PostPreviewContainer>
      <PostHeader>
        <span>{title}</span>
        <span>{dayjs(created_at).format('DD/MM/YYYY')}</span>
      </PostHeader>
      <PostContentPreview>
        <p>{content}</p>
      </PostContentPreview>
    </PostPreviewContainer>
  )
}
