import styled from 'styled-components'

export const Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 500px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;

    @media(max-width: ${p => p.theme.breakpoints.md}) {
       width: 100%;
       height: 100%; 
       overflow-y: scroll;
    }
`

export const CloseBox = styled.div`
    height: 40px;
    display: none;
    justify-content: flex-end;
    align-items: center;

    @media(max-width: ${p => p.theme.breakpoints.md}) {
       display: flex;
    }

    & > svg {
        margin-right: 20px;
        font-size: 30px;
        cursor: pointer;
    }
`