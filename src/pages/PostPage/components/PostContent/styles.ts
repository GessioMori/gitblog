import reactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const PostContentContainer = styled(reactMarkdown)`
  max-width: 54rem;
  margin: 2rem auto;

  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  gap: 1.5rem;

  text-align: justify;
  line-height: 160%;

  h1,
  h2,
  h3,
  a {
    color: ${(props) => props.theme.blue};
    font-weight: normal;
    text-decoration: underline;
  }

  img {
    max-width: 100%;
  }

  pre {
    width: 100%;
    border-radius: 2px;
    font-size: 1rem;
    background-color: ${(props) => props.theme['base-post']};
    padding: 1rem;
    overflow-x: scroll;
  }
`
