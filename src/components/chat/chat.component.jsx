import * as Styles from './chat.styles'
import socketIOClient from "socket.io-client";
import { useCallback, useEffect, useState } from 'react';
import { Button } from '../button/button.component';
import { Form } from '../form/form.component';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../../redux/auth/auth.selectors';

const ENDPOINT = "http://localhost:5000";

let socket;

export function Chat() {
    const { id: roomID } = useParams()

    const { data: userData } = useSelector(selectLoggedInUser)

    const [response, setResponse] = useState("");

    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')


    useEffect(() => {
        socket = socketIOClient(ENDPOINT, { withCredentials: true });
        socket.emit('setup', { room: roomID })
        socket.on("message", data => setMessages(prevState => [...prevState, data]));

        return () => socket.disconnect();
    }, []);


    const handleSendMessage = (e) => {
        e.preventDefault();

        socket.emit('new_message', { room: roomID, newMessage })
        setNewMessage('')
    }

    return (
        <Styles.Root>
            <Styles.TitleContainer>
                <h2>Title</h2>
                
            </Styles.TitleContainer>

            <Styles.Body>
                <ListMessages messages={messages} />
            </Styles.Body>

            <Styles.InputContainer>
                <Form handleSubmit={handleSendMessage}>
                    <Styles.Input 
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={e => setNewMessage(e.target.value)}
                    />
                </Form>
            </Styles.InputContainer>
        </Styles.Root>
    )
}

function ListMessages({ messages }) {

    return (
        <>
            { messages.map((message, i) => (
                <Message key={i} message={message} />
            )) }
        </>
    )
}

function Message({ message }) {

    return (
        <Styles.Message>
            <Styles.MessageText>
                <Styles.Name>Samuel</Styles.Name>
                { message }
                <Styles.Time>5:00</Styles.Time>
            </Styles.MessageText>
        </Styles.Message>
    )
}
