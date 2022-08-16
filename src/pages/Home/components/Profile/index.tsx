import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { ProfileLink } from './../ProfileLink'
import {
  ProfileContainer,
  ProfileInfoContainer,
  ProfileLinksContainer,
  ProfileTitle,
} from './styles'

interface IProfileInfo {
  login: string
  html_url: string
  name: string
  company: string | null
  bio: string
  avatar_url: string
  followers: number
}

export function Profile() {
  const [profileInfo, setProfileInfo] = useState<IProfileInfo | null>(null)

  async function loadProfile() {
    const response = await fetch('https://api.github.com/users/gessiomori')
    const data = await response.json()
    setProfileInfo(data)
  }

  useEffect(() => {
    loadProfile()
  }, [])

  return (
    profileInfo && (
      <ProfileContainer>
        <img
          src={profileInfo.avatar_url}
          alt="Profile picture"
          style={{ height: '9.25rem' }}
        />

        <ProfileInfoContainer>
          <ProfileTitle>
            <span>{profileInfo.name}</span>
            <a href={profileInfo.html_url} target="_blank" rel="noreferrer">
              <span>VER NO GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </ProfileTitle>
          <p>{profileInfo.bio}</p>
          <ProfileLinksContainer>
            <ProfileLink icon="github" content={profileInfo.login} />
            {profileInfo.company && (
              <ProfileLink icon="building" content={profileInfo.company} />
            )}
            <ProfileLink
              icon="user-group"
              content={`${profileInfo.followers} ${
                profileInfo.followers === 1 ? 'seguidor' : 'seguidores'
              }`}
            />
          </ProfileLinksContainer>
        </ProfileInfoContainer>
      </ProfileContainer>
    )
  )
}
