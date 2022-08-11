import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileLink } from './../ProfileLink'
import {
  ProfileContainer,
  ProfileInfoContainer,
  ProfileLinksContainer,
  ProfileTitle,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img
        src="https://avatars.githubusercontent.com/u/58918025?v=4"
        alt="Profile picture"
        style={{ height: '9.25rem' }}
      />

      <ProfileInfoContainer>
        <ProfileTitle>
          <span>Gessio Mori Neto</span>
          <a href="https://github.com/GessioMori">
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ea
          quo, cum incidunt saepe, facilis libero neque alias sed in asperiores
          quaerat reprehenderit temporibus! Amet saepe quo possimus quisquam
          neque!
        </p>
        <ProfileLinksContainer>
          <ProfileLink icon="github" content="GessioMori" />
          <ProfileLink icon="building" content="DevOps" />
          <ProfileLink icon="user-group" content="1234 seguidores" />
        </ProfileLinksContainer>
      </ProfileInfoContainer>
    </ProfileContainer>
  )
}
