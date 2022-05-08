import styled, { css } from 'styled-components'

export const Root = styled.div`
    margin-bottom: 15px;
`

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
    border: ${p => p.error ? '3px solid red' : '3px solid #b6b4b4'};
    padding: 0 8px;
    margin-top: 5px;
    font-size: 16px;

    &:focus {
        outline: none;
        border: ${p => p.error ? '3px solid red' : '3px solid black'};
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

export const Error = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 5px;
`

export const Form = styled.form`
    
`