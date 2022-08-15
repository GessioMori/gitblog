import React, { useRef, useState } from 'react'
import { SearchBarContainer, SearchBarInput } from './styles'

export function SearchBar() {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    inputRef.current && inputRef.current.blur()
    if (input) {
      console.log(e)
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
