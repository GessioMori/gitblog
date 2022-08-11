import styled from 'styled-components'

export const PublicationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:first-child {
    font-size: 1.125rem;
    font-weight: bold;
  }

  span:last-child {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`
