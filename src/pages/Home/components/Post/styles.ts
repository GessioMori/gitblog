import styled from 'styled-components'

export const PostPreviewContainer = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  border: 2px solid transparent;

  :hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    cursor: pointer;
  }
`

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 1rem;

  span:first-child {
    font-weight: bold;
    font-size: 1.25rem;
  }

  span:last-child {
    white-space: nowrap;
    margin-top: 0.375rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostContentPreview = styled.main`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
