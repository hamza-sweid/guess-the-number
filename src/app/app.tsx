'use client';
import NavBar from './components/navbar';
import Welcome from './components/welcome';
import styles from './styles/page.module.css';
import Chat from './components/chat';
import { Button, Col, Row, message } from 'antd';
import Ranking from './components/ranking';
import CurrentRound from './components/currentRound';
import MyChartComponent from './components/chart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { resetStore } from '../services/redux/reducers';
import { PlayersInterface } from './interfaces/app';

export default function Home() {
  const dispatch = useDispatch();
  const [round, setRound] = useState<number>(1);
  const [myName, setMyName] = useState<string>('');
  const isGameInitialized = useSelector(
    (state: any) => state.app?.isGameInitialized
  );
  const stopPoint = useSelector((state: any) => state.app?.stopPoint);
  const myData = useSelector((state: any) => state.app?.ranking).find(
    (player: PlayersInterface) => player.isMe
  );

  const handleResetGame = () => {
    dispatch(resetStore());
  };

  const handleShowMyName = (name: string) => {
    setMyName(name);
  };

  if (myData && myData.totalPoint <= 0) {
    message.error('You lost the game');
    dispatch(resetStore());
  }

  return (
    <main className={styles.main}>
      {isGameInitialized && (
        <Button
          type="primary"
          onClick={handleResetGame}
          className={styles.resetBtn + ' primer-button'}
        >
          Reset Game
        </Button>
      )}
      <Row gutter={[24, 24]} className={styles.content}>
        <Col span={8}>
          {isGameInitialized ? (
            <CurrentRound />
          ) : (
            <Welcome emitMyName={handleShowMyName} />
          )}
        </Col>
        <Col span={16}>
          <div>
            <NavBar myName={myName} />
            <MyChartComponent speedPoint={stopPoint} stopPoint={stopPoint} />
          </div>
        </Col>
        <Col span={13}>
          <Ranking />
        </Col>
        <Col span={11}>
          <Chat />
        </Col>
      </Row>
    </main>
  );
}
