import styled, { css } from 'styled-components'

export const Root = styled.div`
    box-shadow: 0 7px 10px skyblue;
    border-radius: 5px;
    background-color: transparent;
    /* min-height: 500px; */
    height: 100%;
    position: relative;

    @media(max-width: ${p => p.theme.breakpoints.md}) {
        border-radius: 0;
    }
`

export const TitleContainer = styled.div`
    position: absolute;
    top: 0;
    height: 70px;
    width: 100%;
    border-bottom: 1px solid gray;
    box-sizing: border-box;
    padding: 20px;
    color: white;
`

export const Body = styled.div`
    position: absolute;
    top: 70px;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 40px;
    overflow-y: scroll;
    height: calc(100% - 140px);

    @media(max-width: ${p => p.theme.breakpoints.md}) {
        padding: 20px 10px;
    }
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
    color: white;
    border: 1px solid gray;
    background-color: transparent;

    &:focus {
        outline: none;
        border: 1px solid skyblue;
    }
`

export const Message = styled.div`
    padding: 10px;
    /* margin-bottom: 5px; */
    display: flex;
    clear: both;
    max-width: 60%;
    float: ${p => p.isSender && 'right'};
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
    border-radius: ${p => p.isSender ? '20px 0px 20px 20px' : '0px 20px 20px 20px'};
    font-size: 14px;
    position: relative;
`
export const Time = styled.div`
    color: #424242;
    font-size: 11px;
    margin-top: 7px;
    /* text-align: right; */
`