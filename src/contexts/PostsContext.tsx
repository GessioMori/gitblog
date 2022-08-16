import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface IPost {
  url: string
  id: number
  number: number
  title: string
  body: string
  created_at: string
  comments: number
  user_login: string
}

interface IPostsContext {
  posts: IPost[]
  postsCount: number
  handleSearchInput: (searchInput: string) => void
  searchInput: string
}

export const PostsContext = createContext({} as IPostsContext)

interface PostsProviderProps {
  children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<IPost[]>([])
  const [searchInput, setSearchInput] = useState<string>('')

  function handleSearchInput(searchInput: string) {
    setSearchInput(searchInput)
  }
  useEffect(() => {
    async function loadPosts() {
      const response = await api.get(
        `/search/issues?q=${searchInput}%20repo:${
          import.meta.env.VITE_GITHUB_USER
        }/${import.meta.env.VITE_GITHUB_REPO}`,
      )

      setPosts(response.data.items)
    }
    loadPosts()
  }, [searchInput])

  return (
    <PostsContext.Provider
      value={{
        posts,
        handleSearchInput,
        postsCount: posts.length,
        searchInput,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
