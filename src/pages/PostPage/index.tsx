import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostContent } from './components/PostContent'
import { PostHeader } from './components/PostHeader'

interface PostProps {
  title: string
  body: string
  comments: number
  created_at: string
  user: {
    login: string
  }
}

export function PostPage() {
  const { postNumber } = useParams()
  const [post, setPost] = useState<PostProps | null>(null)

  useEffect(() => {
    async function loadPost() {
      const response = await api.get(
        `/repos/${import.meta.env.VITE_GITHUB_USER}/${
          import.meta.env.VITE_GITHUB_REPO
        }/issues/${postNumber}`,
      )
      setPost(response.data)
    }
    if (postNumber) {
      loadPost()
    }
  }, [postNumber])

  return (
    <>
      <PostHeader
        title={post?.title}
        createdAt={post?.created_at}
        userLogin={post?.user.login}
        url={`https://github.com/${import.meta.env.VITE_GITHUB_USER}/${
          import.meta.env.VITE_GITHUB_REPO
        }/issues/${postNumber}`}
        numOfComments={post?.comments}
      />
      <PostContent content={post?.body} />
    </>
  )
}
