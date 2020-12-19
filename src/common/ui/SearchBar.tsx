import React, {useState} from 'react'
import styled from '@emotion/styled'

export default function SearchBar() {
    const [input, updateInput] = useState('')

    return (
        <StyledInput
        key="searchBox"
        value={input}
        placeholder="Search"
        onChange={(e) => updateInput(e.target.value)}
        />
    )
}

const StyledInput = styled.input`
    width: 20rem;
    background: #F2F1F9;
    border: none;
    padding: 0.5rem;
`