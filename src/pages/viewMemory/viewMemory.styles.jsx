import styled from 'styled-components'

export const Root = styled.div`
    display: flex;
    justify-content: space-between;
    height: calc(100vh - 70px);

    @media(max-width: ${p => p.theme.breakpoints.md}) {
        height: auto;
    }
`

export const Title = styled.h1`
    text-transform: uppercase;
    text-shadow: 0 0 2px gray;
`

export const Left = styled.div`
    width: 40%;

    @media(max-width: ${p => p.theme.breakpoints.md}) {
        display: none;
    }
`

export const LeftBody = styled.div`
    padding: 20px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`

export const Right = styled.div`
    width: 60%;
    height: 100%;

    @media(max-width: ${p => p.theme.breakpoints.md}) {
        width: 100%;
        height: calc(100vh - 70px);
    }
`