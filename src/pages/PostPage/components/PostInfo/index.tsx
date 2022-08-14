import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostInfoContainer } from './styles'

library.add(fab, faGithub, faComment, faCalendar)

interface PostInfoProps {
  content: string
  icon: 'github' | 'comment' | 'calendar'
}

export function PostInfo({ content, icon }: PostInfoProps) {
  return (
    <PostInfoContainer>
      <FontAwesomeIcon icon={icon === 'github' ? ['fab', 'github'] : icon} />
      <span>{content}</span>
    </PostInfoContainer>
  )
}
