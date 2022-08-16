import styled from 'styled-components'

export const PublicationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:last-child {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`
export const SearchInfoContainer = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  display: flex;
  align-items: center;

  span:nth-child(2) {
    font-weight: normal;
  }

  svg:hover {
    color: ${(props) => props.theme['base-label']};
    cursor: pointer;
  }
`
