import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  width: 95%;
  padding: 1.5rem;
  margin: -7.5rem auto;
  max-width: 54rem;

  display: flex;
  align-items: center;

  column-gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 2rem;
  }

  img {
    border-radius: 8px;
  }
`

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  flex: 1;
`
export const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }

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

export const ProfileLinksContainer = styled.div`
  display: flex;
  column-gap: 2rem;
  row-gap: 1rem;
  flex-wrap: wrap;
`
