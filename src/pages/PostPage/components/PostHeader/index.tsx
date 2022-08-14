import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { PostInfo } from '../PostInfo'
import {
  PostHeaderContainer,
  PostHeaderIconsContainer,
  PostHeaderLinksContainer,
  PostHeaderTitle,
} from './styles'

interface PostHeaderProps {
  title?: string
  user?: string
  date?: string
  numOfComments?: number
}

export function PostHeader({
  date,
  numOfComments,
  title,
  user,
}: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <PostHeaderLinksContainer>
        <Link to={'/'}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </Link>

        <a href="https://github.com/GessioMori">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </PostHeaderLinksContainer>
      <PostHeaderTitle>
        Distinctio unde id quae aut perferendis libero
      </PostHeaderTitle>
      <PostHeaderIconsContainer>
        <PostInfo content="GessioMori" icon="github" />
        <PostInfo content="Há 1 dia" icon="calendar" />
        <PostInfo content="5 comentários" icon="comment" />
      </PostHeaderIconsContainer>
    </PostHeaderContainer>
  )
}
