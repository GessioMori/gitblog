import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostContent } from './components/PostContent'
import { PostHeader } from './components/PostHeader'

export function PostPage() {
  const { postId } = useParams()
  console.log(postId)

  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(
      'https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1',
    )
      .then((response) => response.json())
      .then((data) => setContent(data.body))
  }, [])

  return (
    <>
      <PostHeader />
      <PostContent content={content} />
    </>
  )
}
