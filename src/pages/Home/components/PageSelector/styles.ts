import styled from 'styled-components'

interface PageSelectorContainerProps {
  isSelected: boolean
}

export const PageSelectorContainer = styled.div<PageSelectorContainerProps>`
  min-width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: ${(props) =>
    props.isSelected
      ? props.theme['base-background']
      : props.theme['base-text']};
  background-color: ${(props) =>
    props.isSelected ? props.theme['base-span'] : props.theme['base-post']};
  border-radius: 4px;
  cursor: pointer;
`
