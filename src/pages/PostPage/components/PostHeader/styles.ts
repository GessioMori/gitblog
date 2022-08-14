import styled from 'styled-components'

export const PostHeaderContainer = styled.header`
  margin: -7.5rem auto 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  width: 95%;
  padding: 1.5rem;
  max-width: 54rem;

  display: flex;
  align-items: stretch;

  flex-direction: column;

  column-gap: 2rem;
  row-gap: 1.5rem;

  @media screen and (max-width: 768px) {
    row-gap: 2rem;
  }
`

export const PostHeaderLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
    border: 1px solid transparent;
    padding: 0.1rem;

    :hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
  a span {
    font-size: 0.75rem;
    font-weight: normal;
  }
`

export const PostHeaderTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`

export const PostHeaderIconsContainer = styled.div`
  display: flex;
  column-gap: 1.5rem;
`
