import { SearchBarContainer, SearchBarInput } from './styles'

export function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchBarInput type={'text'} placeholder={'Buscar conteúdo'} />
    </SearchBarContainer>
  )
}
