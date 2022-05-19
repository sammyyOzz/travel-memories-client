import * as Styles from './chat.styles'


export function Chat() {

    return (
        <Styles.Root>
            <Styles.TitleContainer>
                <h2>Title</h2>
            </Styles.TitleContainer>

            <Styles.Body>
                <ListMessages />
            </Styles.Body>

            <Styles.InputContainer>
                <Styles.Input 
                    placeholder="Type a message..."
                />
            </Styles.InputContainer>
        </Styles.Root>
    )
}

function ListMessages({ messages }) {

    return (
        <>
            { Array(10).fill().map((_, i) => (
                <Message />
            )) }
        </>
    )
}

function Message() {

    return (
        <Styles.Message>
            <Styles.MessageText>
                <Styles.Name>Samuel</Styles.Name>
                hello everyone 
                <Styles.Time>5:00</Styles.Time>
            </Styles.MessageText>
        </Styles.Message>
    )
}
