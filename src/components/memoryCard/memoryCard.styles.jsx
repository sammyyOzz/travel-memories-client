import styled from 'styled-components'

export const Root = styled.div`
    box-shadow: 0 7px 10px #abacad;
    border-radius: 20px;
    cursor: pointer;
    background-color: white;
    position: relative;

    &:hover img { 
        transform: scale(1.5);
        transition: 1000ms linear all;
    }
`

export const ImageContainer = styled.div`
    overflow: hidden;
    height: 250px;
    width: 100%;
    border-radius: 20px 20px 0 0;
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: 1000ms linear all;
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