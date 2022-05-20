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

    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    console.log(messages)


    useEffect(() => {
        socket = socketIOClient(ENDPOINT, { withCredentials: true });
        socket.emit('setup', { room: roomID })
        socket.on("message", (newMessageReceived) => setMessages(prevMessages => [...prevMessages, newMessageReceived]));

        return () => socket.disconnect();
    }, []);


    const handleSendMessage = (e) => {
        e.preventDefault();

        const messageData = {
            _id: `${Date.now()}-${userData?._id}`, 
            body: newMessage, 
            user: { name: userData?.name } 
        }

        socket.emit('new_message', { room: roomID, messageData })
        setNewMessage('')

        // _createMessage({ body: newComment, urlParams: `/${userData?._id}` })
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
            { messages.map((message) => (
                <Message key={message._id} { ...message } />
            )) }
        </>
    )
}

function Message({ body, user }) {

    return (
        <Styles.Message>
            <Styles.MessageText>
                <Styles.Name>{ user.name }</Styles.Name>
                { body }
                {/* <Styles.Time>5:00</Styles.Time> */}
            </Styles.MessageText>
        </Styles.Message>
    )
}
