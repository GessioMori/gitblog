import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
    if (postNumber) {
      fetch(
        `https://api.github.com/repos/gessiomori/gitblog/issues/${postNumber}`,
      )
        .then((response) => response.json())
        .then((data) => setPost(data))
    }
  }, [postNumber])

  return (
    <>
      <PostHeader
        title={post?.title}
        createdAt={post?.created_at}
        userLogin={post?.user.login}
        url={`https://github.com/GessioMori/gitblog/issues/${postNumber}`}
        numOfComments={post?.comments}
      />
      <PostContent
        content={post?.body ? post?.body : 'Conteúdo não encontrado'}
      />
    </>
  )
}
