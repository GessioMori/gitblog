import { useState } from 'react'
import { Posts } from '../Posts'
import { Publications } from '../Publications'
import { SearchBar } from '../SearchBar'
import { postsMock } from './../../../../assets/temp/posts'
import { MainContainer } from './styles'

export interface Post {
  id: number
  title: string
  content: string
}

export function Main() {
  const [posts] = useState<Post[]>(postsMock)

  return (
    <MainContainer>
      <Publications />
      <SearchBar />
      <Posts posts={posts} />
    </MainContainer>
  )
}
