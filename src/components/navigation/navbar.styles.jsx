import styled from 'styled-components'

export const Root = styled.div`
    height: 70px;
    box-shadow: 0 10px 10px 5px #a5a3a39b;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    z-index: 1000;
    background-image: none;
`

export const Title = styled.div`
    font-size: 28px;
    font-weight: bold;
    text-transform: uppercase;
    font-style: italic;
`

export const Login = styled.div`
    font-size: 22px;
    font-weight: bold;
    margin-right: 50px;
    cursor: pointer;
    color: black;
`