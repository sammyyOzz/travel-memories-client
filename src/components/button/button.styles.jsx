import styled from 'styled-components'

export const Root = styled.button`
    width: ${p => p.fullWidth && '100%'};
    padding: 10px 20px;
    border-radius: 8px;
    margin: 10px 0 5px 0;
    border: 1px solid white;
    /* box-shadow: 2px 4px 5px #cccaca; */
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 250ms linear all;
    background-color: transparent;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #373e6656;
        color: white;
        transition: 250ms linear all;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background-color: #d4d1d1;
        color: gray;
    }
`