import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../../../contexts/PostsContext'
import { PageSelectorContainer } from './styles'

interface PageSelectorProps {
  pageNum: number
}

export function PageSelector({ pageNum }: PageSelectorProps) {
  const { currentPage, handlePageChange } = useContextSelector(
    PostsContext,
    (context) => {
      return {
        currentPage: context.currentPage,
        handlePageChange: context.handlePageChange,
      }
    },
  )

  return (
    <PageSelectorContainer
      onClick={() => handlePageChange(pageNum)}
      isSelected={pageNum === currentPage}
    >
      {pageNum}
    </PageSelectorContainer>
  )
}
