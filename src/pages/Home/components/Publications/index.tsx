import { useContext } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'
import { PublicationsContainer } from './styles'

export function Publications() {
  const { postsCount } = useContext(PostsContext)

  return (
    <PublicationsContainer>
      <span>Publicações</span>
      <span>{`${postsCount} ${
        postsCount === 1 ? 'publicação' : 'publicações'
      }`}</span>
    </PublicationsContainer>
  )
}
