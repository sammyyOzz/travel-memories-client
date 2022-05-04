import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0;
    background-image: url("https://media.istockphoto.com/photos/vector-hexagons-pattern-geometric-abstract-background-with-simple-picture-id1307794659?b=1&k=20&m=1307794659&s=170667a&w=0&h=8utxIGEIgxxX_rUGxa5DtS7MQIaCHvQjt1eBrU28lEg=");
    background-size: cover;
    
`

export const Title = styled.h1`
    position: absolute;
    top: 0;
    left: 0;
    margin-top: -60px;
    text-transform: uppercase;
    text-shadow: 0 0 2px gray;
`

export const GridContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 50px auto 20px auto;
    width: 80%;
    position: relative;

    @media(max-width: 900px) {
        flex-direction: column-reverse;
    }
`

export const GridLeft = styled.div`
    width: calc(70% - 20px);

    @media(max-width: 900px) {
        width: 100%;
    }
`

export const GridRight = styled.div`
    width: 30%;

    @media(max-width: 900px) {
        width: 100%;
    }
`

export const FormTitle = styled.h2`
    color: black;
`

export const FormContainer = styled.div`
    box-sizing: border-box;
    padding: 30px 25px;
    box-shadow: 0 7px 10px #abacad;
    border-radius: 20px;
    background-color: white;
    margin-bottom: 50px;
`

export const ImageName = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`