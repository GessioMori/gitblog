import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`