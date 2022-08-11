import { PostContentPreview, PostHeader, PostPreviewContainer } from './styles'

interface PostProps {
  id?: number
  content: string
  title: string
}

export function Post({ content, title }: PostProps) {
  return (
    <PostPreviewContainer>
      <PostHeader>
        <span>{title}</span>
        <span>Há 1 dia</span>
      </PostHeader>
      <PostContentPreview>
        <p>{content}</p>
      </PostContentPreview>
    </PostPreviewContainer>
  )
}
