import { Button, Col, Input } from 'antd';
import { useState } from 'react';
import style from '../styles/welcome.module.css';

const Welcome = () => {
  const [name, setName] = useState('');

  const handleEnterName = (e: any) => {
    setName(e.target.value);
  };

  return (
    <div className={style.welcomePage + ' primer-bg'}>
      <h2 className={style.headline}>Welcome</h2>
      <p className={style.description}>Please Insert Your Name</p>
      <Input className={style.input} value={name} onChange={handleEnterName} />
      <Button
        block
        type="primary"
        className={name ? 'primer-button' : style.disable}
      >
        Accept
      </Button>
    </div>
  );
};

export default Welcome;
