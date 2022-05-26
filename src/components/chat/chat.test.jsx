import socketIOClient from 'socket.io-client';
import MockedSocket from 'socket.io-mock';
import { Chat } from './chat.component'
// import * as reactRedux from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { styledComponentsTheme } from '../../theme/styledComponents.theme';
import { Provider } from 'react-redux'
import store from '../../redux/store'


jest.mock('socket.io-client');

describe('<Chat />', () => {
    let socket;
    let scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    
    beforeEach(() => {
        socket = new MockedSocket();
        socketIOClient.mockReturnValue(socket);
    })
    afterEach(() => {
        jest.restoreAllMocks();
    })


    it('should dispatch connect event', async () => {

        render(
            <Provider store={store}>
                <ThemeProvider theme={styledComponentsTheme}>
                    <Chat />
                </ThemeProvider>
            </Provider>
        )
        expect(scrollIntoViewMock).toBeCalled();
        expect(socketIOClient.connect).toHaveBeenCalled();
    });

    it('should emit new messages', () => {

        render(
            <Provider store={store}>
                <ThemeProvider theme={styledComponentsTheme}>
                    <Chat />
                </ThemeProvider>
            </Provider>
        )
        
        socket.socketClient.emit('new_message', 'Hello World!');
        socket.on('new_message', function (message) {
            expect(message).to.equal('Hello World!');
        });
    });
})