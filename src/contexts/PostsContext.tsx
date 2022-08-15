import { createContext, ReactNode, useEffect, useState } from 'react'

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
      const response = await fetch(
        `https://api.github.com/search/issues?q=${searchInput}%20repo:gessiomori/gitblog`,
      )
      console.log(searchInput)
      const data = await response.json()
      setPosts(data.items)
    }
    loadPosts()
  }, [searchInput])

  return (
    <PostsContext.Provider
      value={{ posts, handleSearchInput, postsCount: posts.length }}
    >
      {children}
    </PostsContext.Provider>
  )
}
