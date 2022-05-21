import styled, { css } from 'styled-components'

export const Root = styled.div`
    margin-bottom: 15px;
`

export const Label = styled.label`
    font-size: 18px;
    color: #cac7c7;
    font-weight: 500;
`

const inputAndTextareaStyle = css`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: ${p => p.error ? '1px solid red' : '1px solid #b6b4b4'};
    padding: 0 8px;
    margin-top: 5px;
    font-size: 16px;
    background-color: transparent;
    color: white;

    &:focus {
        outline: none;
        border: ${p => p.error ? '1px solid red' : '1px solid skyblue'};
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

export const RadioButtonSelected = css`
    translate: 15px;
`

export const RadioButton = styled.div`
    border-radius: 10px;
    padding: 8px;
    background-color: transparent;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    box-shadow: 0px 2px 4px skyblue;
    transition: 200ms linear all;
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    /* ${p => p.selected && RadioButtonSelected} */

`

export const RadioButtonRadio = css`
    border-radius: 50%;
    height: 35px;
    width: 35px;
    border: 4px solid rgb(184, 182, 182);
    margin-right: 30px;
    box-sizing: border-box;
`

export const RadioButtonNotSelected = styled.div`
    ${RadioButtonRadio};
`

export const RadioButtonText = styled.div`
    font-size: 18px;
    color: white;
    font-weight: 500;
`

export const RadioButtonImage = styled.img`
    ${RadioButtonRadio};
    border: 4px solid transparent;
`