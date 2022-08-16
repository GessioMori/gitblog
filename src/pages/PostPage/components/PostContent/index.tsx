import { PostContentContainer } from './styles'

interface PostContentProps {
  content: string | undefined
}

export function PostContent({ content }: PostContentProps) {
  return <PostContentContainer>{content || ''}</PostContentContainer>
}
