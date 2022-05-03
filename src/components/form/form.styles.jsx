import styled, { css } from 'styled-components'

export const Label = styled.label`
    font-size: 18px;
    color: #5e5c5c;
    font-weight: 500;
`

const inputAndTextareaStyle = css`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 3px solid #b6b4b4;
    padding: 0 8px;
    margin: 5px 0 12px 0;
    font-size: 16px;

    &:focus {
        outline: none;
        border: 3px solid black;
    }
`

export const Input = styled.input`
    ${inputAndTextareaStyle}
`

export const Textarea = styled.textarea`
    ${inputAndTextareaStyle}
    height: 100px;
    padding: 5px 8px;
`

export const Form = styled.form`
    
`