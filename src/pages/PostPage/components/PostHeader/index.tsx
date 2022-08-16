import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { DateFormater } from '../../../../utils/dateFormater'
import { PostInfo } from '../PostInfo'
import {
  PostHeaderContainer,
  PostHeaderIconsContainer,
  PostHeaderLinksContainer,
  PostHeaderTitle,
} from './styles'

interface PostHeaderProps {
  title?: string
  userLogin?: string
  date?: string
  numOfComments?: number
  createdAt?: string
  url?: string
}

export function PostHeader({
  numOfComments,
  title,
  userLogin,
  url,
  createdAt,
}: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <PostHeaderLinksContainer>
        <Link to={'/'}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </Link>
        <a href={url} target="_blank" rel="noreferrer">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </PostHeaderLinksContainer>
      <PostHeaderTitle>{title}</PostHeaderTitle>
      <PostHeaderIconsContainer>
        <PostInfo content={userLogin || 'userLogin'} icon="github" />
        {createdAt && (
          <PostInfo content={DateFormater(createdAt)} icon="calendar" />
        )}
        <PostInfo
          content={
            numOfComments === 1
              ? `1 comentário`
              : `${numOfComments} comentários`
          }
          icon="comment"
        />
      </PostHeaderIconsContainer>
    </PostHeaderContainer>
  )
}
