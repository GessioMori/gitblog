import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'
import { PublicationsContainer, SearchInfoContainer } from './styles'

export function Publications() {
  const { postsCount, searchInput, handleSearchInput } =
    useContext(PostsContext)

  function handleClearSearch() {
    handleSearchInput('')
  }

  return (
    <PublicationsContainer>
      {searchInput ? (
        <SearchInfoContainer>
          <span>Buscando por: &nbsp;</span>
          <span>{searchInput} &nbsp;</span>
          <FontAwesomeIcon icon={faXmark} onClick={handleClearSearch} />
        </SearchInfoContainer>
      ) : (
        <span>Todas publicações</span>
      )}
      <span>{`${postsCount} ${
        postsCount === 1 ? 'publicação' : 'publicações'
      }`}</span>
    </PublicationsContainer>
  )
}
