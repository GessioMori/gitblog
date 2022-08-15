import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import nord from 'react-syntax-highlighter/dist/cjs/styles/hljs/nord'
import { PostContentContainer } from './styles'

interface PostContentProps {
  content: string
}

const markdown = `Here is some JavaScript code:

~~~js
let num = 9;
const obj = {
  gas: 'set'
}
console.log('It works!')
~~~
`

export function PostContent({ content }: PostContentProps) {
  return (
    <PostContentContainer
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter language={match[1]} {...props} style={nord}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
    >
      {markdown}
    </PostContentContainer>
  )
}
