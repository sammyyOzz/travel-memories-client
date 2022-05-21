import styled, { css } from 'styled-components'

export const Root = styled.div`
    display: flex;
    background-color: #01020e;
    height: 100vh;

    @media(max-width: ${p => p.theme.breakpoints.md}) {
        flex-direction: column;
        height: auto;
    }
`

const Scrollbar = css`
    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-track {
        background-color: white;
        border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: skyblue;
        border-radius: 50px;
    }
`

export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: ${p => p.removePadding ? '0px' : '15px'};
`

export const Left = styled.div`
    width: ${p => p.hideSidePanel ? '100%' : '70%'};
    height: 100%;
    
    @media(max-width: ${p => p.theme.breakpoints.md}) {
        width: 100%;
    }
`

export const LeftBody = styled.div`
    height: calc(100% - 70px);
    overflow-y: scroll;
    ${Scrollbar}

    @media(max-width: ${p => p.theme.breakpoints.md}) {
        height: auto;
        width: 100%;
    }
`

export const Right = styled.div`
    width: 30%;
    display: ${p => p.hideSidePanel && 'none'};
    border-left: 1px solid gray;
    overflow-y: scroll;
    ${Scrollbar}

    @media(max-width: ${p => p.theme.breakpoints.md}) {
        height: auto;
        width: 100%;
    }
`