import styled from 'styled-components'


export const Root = styled.div`
    display: flex;

    @media(max-width: ${p => p.theme.breakpoints.md}) {
       flex-direction: column; 
    }
    
`

export const Left = styled.div`
    width: 50%;
    height: 500px;
    overflow-y: scroll;

    @media(max-width: ${p => p.theme.breakpoints.md}) {
       width: 100%; 
       overflow-y: visible;
       height: auto;
    }
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;

    @media(max-width: ${p => p.theme.breakpoints.md}) {
       width: 100%; 
    }
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
    margin-left: 20px;
`

export const Right = styled.div`
    width: 50%;
    height: 500px;
    /* overflow-y: scroll; */

    @media(max-width: ${p => p.theme.breakpoints.md}) {
       width: 100%; 
       overflow-y: visible;
       height: auto;
    }
`

export const Title = styled.h2`
color: gray;
`

export const RightContainer = styled.div`
    width: calc(100% - 20px);
    margin: auto;
`

export const RightTop = styled.div`
    height: calc(100% - 50px);
    overflow-y: scroll;

    @media(max-width: ${p => p.theme.breakpoints.md}) {
       overflow-y: visible;
       min-height: 300px;
    }
`

export const RightBottom = styled.div`
    height: 50px;

`

export const Comment = styled.div`
    margin: 30px 0;

    &:first-child {
        margin-top: 20px;
    }
`

export const CommentBody = styled.span`
    background-color: #d3d2d2; 
    color: black;
    margin-left: 10px;
    padding: 10px 15px 7px 15px;
    text-align: center;
    border-radius: 10px;

`

export const CommentAuthor = styled.p`
    font-weight: bold;
    font-size: 13px;
    margin: 3px auto auto 20px;

    & > span {
        background-color: skyblue;
        padding: 2px 10px;
        border-radius: 10px;
    }
`