import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../../../contexts/PostsContext'
import { PageSelector } from '../PageSelector'
import { PaginatorContainer } from './styles'

export function Paginator() {
  const totalPages = useContextSelector(
    PostsContext,
    (context) => context.totalPages,
  )

  const pagesArr = Array.from(
    { length: totalPages > 33 ? 34 : totalPages },
    (_, i) => i + 1,
  )

  return (
    <PaginatorContainer>
      {totalPages > 1 &&
        pagesArr.map((pageNum) => (
          <PageSelector key={pageNum} pageNum={pageNum} />
        ))}
    </PaginatorContainer>
  )
}
