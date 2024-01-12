import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsGameInitialized } from '../../services/redux/reducers';
import style from '../styles/welcome.module.css';

const Welcome = ({ emitMyName }: { emitMyName: Function }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const isGameInitialized = useSelector(
    (state: any) => state.app?.isGameInitialized
  );

  const handleEnterName = (e: any) => {
    setName(e.target.value);
  };

  const handleInitializeGame = () => {
    if (!name) return message.info('Please enter your name');
    dispatch(setIsGameInitialized(true));
    emitMyName(name);
  };

  return (
    <div className={style.welcomePage + ' primer-bg'}>
      <h2 className={style.headline}>Welcome</h2>
      <p className={style.description}>Please Insert Your Name</p>
      <Form onFinish={handleInitializeGame} >
        <Input
          placeholder="Enter You Name"
          className={style.input}
          value={name}
          onChange={handleEnterName}
        />
        <Button
          block
          type="primary"
          className={name ? 'primer-button' : style.disable}
          onClick={handleInitializeGame}
        >
          Accept
        </Button>
      </Form>
    </div>
  );
};

export default Welcome;
