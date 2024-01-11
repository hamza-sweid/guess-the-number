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
import { useState } from 'react';
import { resetStore } from '../services/redux/reducers';
import { PlayersInterface } from './interfaces/app';

export default function Home() {
  const dispatch = useDispatch();
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
        <Col lg={8} xs={24}>
          {isGameInitialized ? (
            <CurrentRound />
          ) : (
            <Welcome emitMyName={handleShowMyName} />
          )}
        </Col>
        <Col lg={16} xs={24}>
          <div>
            <NavBar myName={myName} />
            <MyChartComponent speedPoint={stopPoint} stopPoint={stopPoint} />
          </div>
        </Col>
        <Col md={13} xs={24}>
          <Ranking />
        </Col>
        <Col md={11} xs={24}>
          <Chat />
        </Col>
      </Row>
    </main>
  );
}
