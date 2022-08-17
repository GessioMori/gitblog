import { Route, Routes } from 'react-router-dom'
import { PostsProvider } from './contexts/PostsContext'
import { DefaultLayout } from './layouts'
import { Home } from './pages/Home'
import { PostPage } from './pages/PostPage'

export function Router() {
  return (
    <PostsProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postNumber" element={<PostPage />} />
        </Route>
      </Routes>
    </PostsProvider>
  )
}
