import { Paginator } from '../Paginator'
import { Posts } from '../Posts'
import { Publications } from '../Publications'
import { SearchBar } from '../SearchBar'
import { MainContainer } from './styles'

export interface Post {
  id: number
  title: string
  content: string
}

export function Main() {
  return (
    <MainContainer>
      <Publications />
      <SearchBar />
      <Posts />
      <Paginator />
    </MainContainer>
  )
}
