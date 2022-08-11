import styled from 'styled-components'

export const ProfileLinkContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`

export const ProfileLinkIcon = styled.span`
  color: ${(props) => props.theme['base-label']};
`
