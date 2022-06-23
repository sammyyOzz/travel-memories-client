import * as Styles from './chat.styles'
import socketIOClient from "socket.io-client";
import { useCallback, useEffect, useState } from 'react';
import { Button } from '../button/button.component';
import { Form } from '../form/form.component';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from '../../redux/auth/auth.selectors';
import { createMessage, getMessages } from '../../redux/memories/memories.slice';
import { selectMessages } from '../../redux/memories/memories.selectors';
import { MessageLoader } from '../loaders/messageLoader.component'
import { HTTP_STATUS } from '../../utils/constants/httpStatus.constant';

const ENDPOINT = process.env.NODE_ENV === 'production' 
    ? "https://samuel-memories.herokuapp.com"
    : "http://localhost:5000"

let socket;

export function Chat({ title }) {
    const { id: roomID } = useParams()

    /***********************************************************************
    * selectors
    ***********************************************************************/
    const { data: userData } = useSelector(selectLoggedInUser)
    const { status: messagesStatus } = useSelector(selectMessages)

    /***********************************************************************
    * state
    ***********************************************************************/
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    /***********************************************************************
    * dispatch
    ***********************************************************************/
    const dispatch = useDispatch()

    const _getMessages = (data) => dispatch(getMessages(data)).unwrap().then(data => setMessages(data))
    const _createMessage = (data) => dispatch(createMessage(data))

    /***********************************************************************
    * hooks
    ***********************************************************************/
    useEffect(() => {
        _getMessages({ id: roomID })
    }, [])

    useEffect(() => {
        socket = socketIOClient(ENDPOINT, { withCredentials: true });
        socket.emit('setup', { room: roomID })
        socket.on("message", (newMessageReceived) => setMessages(prevMessages => [...prevMessages, newMessageReceived]));

        return () => socket.disconnect();
    }, []);

    useEffect(() => {
        const element = document.getElementById("dummy");
        element.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    /***********************************************************************
    * handlers
    ***********************************************************************/
    const handleSendMessage = (e) => {
        e.preventDefault();

        const messageData = {
            _id: `${Date.now()}-${userData?._id}`, 
            body: newMessage, 
            user: { _id: userData?._id, name: userData?.name } 
        }

        socket.emit('new_message', { room: roomID, messageData })
        setNewMessage('')

        _createMessage({ id: roomID, body: newMessage })
    }

    return (
        <Styles.Root>
            <Styles.TitleContainer>
                <h2>{title}</h2>
                
            </Styles.TitleContainer>

            <Styles.Body>
                <ListMessages messages={messages} loading={messagesStatus === HTTP_STATUS.PENDING} userData={userData} />
                <div id="dummy" />
            </Styles.Body>

            <Styles.InputContainer>
                <Form handleSubmit={handleSendMessage}>
                    <Styles.Input 
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={e => setNewMessage(e.target.value)}
                        data-testid="input"
                    />
                </Form>
            </Styles.InputContainer>
        </Styles.Root>
    )
}

function ListMessages({ messages, loading, ...props }) {

    return !loading ? (
        <>
            { messages.map((message) => (
                <Message key={message._id} { ...message } { ...props } />
            )) }
        </>
    ) : (
        <MessageLoader />
    )
}

function Message({ body, user, userData }) {

    const isSender = userData?._id === user?._id
    
    return (
        <Styles.Message isSender={isSender}>
            <Styles.MessageText isSender={isSender}>
                { !isSender && <Styles.Name>{ user.name }</Styles.Name> }
                { body }
                {/* <Styles.Time>5:00</Styles.Time> */}
            </Styles.MessageText>
        </Styles.Message>
    )
}
