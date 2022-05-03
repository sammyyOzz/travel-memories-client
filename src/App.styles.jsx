import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
    background-image: url("https://media.istockphoto.com/photos/vector-hexagons-pattern-geometric-abstract-background-with-simple-picture-id1307794659?b=1&k=20&m=1307794659&s=170667a&w=0&h=8utxIGEIgxxX_rUGxa5DtS7MQIaCHvQjt1eBrU28lEg=");
    background-size: cover;
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

export const FormTitle = styled.h2`
    color: black;
`

export const FormContainer = styled.div`
    box-sizing: border-box;
    padding: 30px 25px;
    box-shadow: 0 7px 10px #abacad;
    border-radius: 20px;
    background-color: white;
`