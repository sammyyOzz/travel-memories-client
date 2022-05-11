import styled from 'styled-components'

export const Root = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    /* background-color: red; */
`

export const FormContainer = styled.div`
    box-sizing: border-box;
    padding: 30px 25px;
    box-shadow: 0 7px 10px #abacad;
    border-radius: 20px;
    background-color: white;
    margin-bottom: 50px;
    width: 40%;

    @media(max-width: ${p => p.theme.breakpoints.md}) {
        width: 60%;
    }

    @media(max-width: ${p => p.theme.breakpoints.sm}) {
        width: 90%;
    }
`

export const Title = styled.h1`
    text-align: center;
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 5px;
    
`

export const FooterElement = styled.div`
    cursor: pointer;
    text-decoration: underline;
`

export const Error = styled.p`
    color: red;
    font-size: 14px;
`