import { WechatFilled } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Server, WebSocket } from 'mock-socket';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/chat.module.css';

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const [ws, setWs] = useState<WebSocket | null>(null);
  const isGameInitialized = useSelector(
    (state: any) => state.app?.isGameInitialized
  );

  useEffect(() => {
    // Creating a mock WebSocket server
    const mockServer = new Server('ws://localhost:3000');

    mockServer.on('connection', (socket) => {
      socket.on('message', (data) => {
        console.log('Mock server received:', data);
        socket.send(`Echo from server: ${data}`);
      });
    });

    // Connecting to the mock server
    const mockWs = new WebSocket('ws://localhost:3000');
    mockWs.onopen = () => console.log('Connected to mock server');
    mockWs.onmessage = (event: MessageEvent) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };
    setWs(mockWs);

    return () => {
      mockServer.stop();
      mockWs.close();
    };
  }, []);

  const sendMessage = (): void => {
    if (ws && input.trim()) {
      ws.send(input);
      setInput('');
    }
  };

  return (
    <>
      <h3>
        <WechatFilled style={{ color: '#d96a61' }} /> Chat
      </h3>
      <div className={style.chat + ' primer-bg'}>
        <div className={style.talk}>
          {messages.map((message, index) => (
            <p key={index} className="pa-1">
              <span className="primer-color">CPU1: </span>
              <span className="white-color pa-2">{message}</span>
            </p>
          ))}
        </div>
        <Form onFinish={sendMessage} className={style.chatFooter}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            readOnly={!isGameInitialized}
            placeholder="Type you message"
            className={style.input}
          />
          {isGameInitialized && (
            <Button
              onClick={sendMessage}
              className="primer-button"
              type="primary"
            >
              Start
            </Button>
            )}
        </Form>
      </div>
    </>
  );
};

export default Chat;
