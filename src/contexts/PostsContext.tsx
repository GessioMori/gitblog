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
  currentPage: number
  totalPages: number
  handlePageChange: (page: number) => void
}

export const PostsContext = createContext({} as IPostsContext)

interface PostsProviderProps {
  children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<IPost[]>([])
  const [searchInput, setSearchInput] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)

  function handleSearchInput(searchInput: string) {
    setSearchInput(searchInput)
  }
  function handlePageChange(page: number) {
    setCurrentPage(page)
  }

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get(
        `/search/issues?q=${searchInput}%20repo:${
          import.meta.env.VITE_GITHUB_USER
        }/${import.meta.env.VITE_GITHUB_REPO}&page=${currentPage}`,
      )
      setPosts(response.data.items)
      setTotalPages(Math.ceil(response.data.total_count / 30))
    }

    loadPosts()
  }, [searchInput, currentPage])

  return (
    <PostsContext.Provider
      value={{
        posts,
        handleSearchInput,
        postsCount: posts.length,
        searchInput,
        currentPage,
        totalPages,
        handlePageChange,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
