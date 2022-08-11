import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileLinkContainer, ProfileLinkIcon } from './styles'

library.add(fab, faGithub, faBuilding, faUserGroup)

interface ProfileLinkProps {
  content: string
  icon: 'github' | 'building' | 'user-group'
}

export function ProfileLink({ content, icon }: ProfileLinkProps) {
  return (
    <ProfileLinkContainer>
      <ProfileLinkIcon>
        <FontAwesomeIcon icon={icon === 'github' ? ['fab', 'github'] : icon} />
      </ProfileLinkIcon>
      <span>{content}</span>
    </ProfileLinkContainer>
  )
}
