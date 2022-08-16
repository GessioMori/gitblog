import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`
