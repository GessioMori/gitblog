import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../../../contexts/PostsContext'
import { PublicationsContainer, SearchInfoContainer } from './styles'

export function Publications() {
  const { searchInput, handleSearchInput, totalCount } = useContextSelector(
    PostsContext,
    (context) => {
      return {
        searchInput: context.searchInput,
        handleSearchInput: context.handleSearchInput,
        totalCount: context.totalCount,
      }
    },
  )

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
      <span>{`${totalCount} ${
        totalCount === 1 ? 'publicação' : 'publicações'
      }`}</span>
    </PublicationsContainer>
  )
}
