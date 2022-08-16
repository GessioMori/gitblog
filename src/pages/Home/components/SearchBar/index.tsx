import React, { useRef, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../../../contexts/PostsContext'
import { SearchBarContainer, SearchBarInput } from './styles'

export function SearchBar() {
  const handleSearchInput = useContextSelector(
    PostsContext,
    (context) => context.handleSearchInput,
  )
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    inputRef.current && inputRef.current.blur()
    if (input) {
      handleSearchInput(input)
      setInput('')
    }
  }

  return (
    <SearchBarContainer>
      <form onSubmit={(e) => handleSubmit(e)}>
        <SearchBarInput
          type={'text'}
          placeholder={'Buscar conteúdo'}
          name={'searchInput'}
          onChange={(event) => setInput(event.target.value)}
          value={input}
          ref={inputRef}
        />
      </form>
    </SearchBarContainer>
  )
}
