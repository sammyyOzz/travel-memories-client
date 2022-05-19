import styled, { css } from 'styled-components'

export const Root = styled.div`
    box-shadow: 0 7px 10px #abacad;
    border-radius: 30px;
    background-color: white;
    min-height: 500px;
    position: relative;
`

export const TitleContainer = styled.div`
    position: absolute;
    top: 0;
    height: 70px;
    width: 100%;
    border-bottom: 1px solid gray;
    box-sizing: border-box;
    padding: 20px;
    
`

export const Body = styled.div`
    position: absolute;
    top: 70px;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 40px;
    overflow-y: scroll;
    height: calc(100% - 140px);
`

export const InputContainer = styled.div`
    position: absolute;
    bottom: 0;
    height: 70px;
    width: 100%;
    border-top: 1px solid gray;
    box-sizing: border-box;
    padding: 10px 25px;
`

export const Input = styled.input`
    width: 100%;
    height: 45px;
    border-radius: 25px;
    box-sizing: border-box;
    padding: 10px;
    font-size: 18px;
    color: #1d1c1c;
    border: 2px solid gray;

    &:focus {
        outline: none;
        border: 2px solid #1d1c1c;
    }
`

export const Message = styled.div`
    padding: 10px;
    /* margin-bottom: 5px; */
    display: flex;
    clear: both;
    max-width: 60%;
    /* float: right; */
`

export const Name = styled.div`
    color: black;
    font-size: 16px;
    font-weight: bold;
    margin-top: -10px;
    padding-bottom: 10px;
`

export const MessageText = styled.div`
    background-color: #cfd8dc; 
    padding: 15px;
    color: black;
    border-radius: 0px 20px 20px 20px;
    font-size: 14px;
    position: relative;
`
export const Time = styled.div`
    color: #424242;
    font-size: 11px;
    margin-top: 7px;
    /* text-align: right; */
`