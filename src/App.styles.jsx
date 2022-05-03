import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
`

export const GridContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 80%;

    @media(max-width: 600px) {
        flex-direction: column-reverse;
    }
`

export const GridLeft = styled.div`
    width: calc(70% - 20px);
`

export const GridRight = styled.div`
    width: 30%;
`