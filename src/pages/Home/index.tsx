import { PostsProvider } from '../../contexts/PostsContext'
import { Main } from './components/Main'
import { Profile } from './components/Profile'

export function Home() {
  return (
    <>
      <Profile />
      <PostsProvider>
        <Main />
      </PostsProvider>
    </>
  )
}
