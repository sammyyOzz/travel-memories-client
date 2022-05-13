import styled from 'styled-components'


export const Root = styled.div`
    display: flex;
    
`

export const Left = styled.div`
    width: 50%;
    height: 100%;
    overflow-y: scroll;

    @media(max-width: ${p => p.theme.breakpoints.md}) {
       width: 100%; 
    }
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`

export const Place = styled.h2`
    margin: 20px;
    color: #302f2f;
`

export const Description = styled.div`
    padding: 10px 20px 40px 20px;
    box-sizing: border-box;
    border-radius: 0 0 20px 20px;
    color: #383838;
`

export const Footer = styled.div`
    font-size: 14px;
    color: #a39e9e;
    /* margin: 10px 20px; */
    position: absolute;
    bottom: 10px;
    left: 20px;
`

export const Right = styled.div`
    width: 50%;
    height: 100%;
    overflow-y: scroll;

    @media(max-width: ${p => p.theme.breakpoints.md}) {
       width: 100%; 
    }
`