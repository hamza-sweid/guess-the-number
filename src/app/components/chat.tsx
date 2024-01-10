import { Button, Input } from 'antd';
import style from '../styles/chat.module.css';
import { WechatFilled } from '@ant-design/icons';

const Chat = () => {
  return (
    <>
      <h3>
        <WechatFilled style={{ color: '#d96a61' }} /> Chat
      </h3>
      <div className={style.chat + ' primer-bg'}>
        <div className={style.talk}>
          <p className="pa-1">
            <span className="primer-color">CPU1: </span>
            <span className="white-color pa-2">Bla</span>
          </p>
          <p className="pa-1">
            <span className="primer-color">CPU2: </span>
            <span className="white-color pa-2">Bla</span>
          </p>
          <p className="pa-1">
            <span className="primer-color">CPU3: </span>
            <span className="white-color pa-2">Bla</span>
          </p>
          <p className="pa-1">
            <span className="primer-color">CPU3: </span>
            <span className="white-color pa-2">Bla</span>
          </p>
          <p className="pa-1">
            <span className="primer-color">CPU3: </span>
            <span className="white-color pa-2">Bla</span>
          </p>
          <p className="pa-1">
            <span className="primer-color">CPU3: </span>
            <span className="white-color pa-2">Bla</span>
          </p>
          <p className="pa-1">
            <span className="primer-color">CPU3: </span>
            <span className="white-color pa-2">Bla</span>
          </p>
          <p className="pa-1">
            <span className="primer-color">CPU3: </span>
            <span className="white-color pa-2">Bla</span>
          </p>
          <p className="pa-1">
            <span className="primer-color">CPU3: </span>
            <span className="white-color pa-2">Bla</span>
          </p>
        </div>
        <div className={style.chatFooter}>
          <Input className={style.input} />
          <Button className="primer-button" type="primary">
            Start
          </Button>
        </div>
      </div>
    </>
  );
};

export default Chat;