import styled from 'styled-components'

export const Root = styled.div`
    display: flex;
    /* justify-content: center; */
    /* padding: 50px 0; */
    height: calc(100vh - 70px);

    @media(max-width: ${p => p.theme.breakpoints.md}) {
        height: auto;
    }
`

export const Container = styled.div`
    /* width: 80%; */
`

export const Title = styled.h1`
    text-transform: uppercase;
    text-shadow: 0 0 2px gray;
`

export const GridContainer = styled.div`
    display: flex;
    justify-content: space-between;
    /* background-color: red; */
    height: 100%;
    /* margin: 50px auto 20px auto; */

    @media(max-width: ${p => p.theme.breakpoints.md}) {
        flex-direction: column;
    }
`

export const GridLeft = styled.div`
    width: calc(40% - 20px);

    @media(max-width: ${p => p.theme.breakpoints.md}) {
        width: 100%;
    }
`

export const GridRight = styled.div`
    width: 60%;

    @media(max-width: ${p => p.theme.breakpoints.md}) {
        width: 100%;
        height: 100vh;
        margin-top: 50px;
    }
`