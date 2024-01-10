'use client';
import NavBar from './components/navbar';
import Welcome from './components/welcome';
import styles from './styles/page.module.css';
import Image from 'next/image';
import splash from '../../public/splash.png';
import splash2 from '../../public/splash2.png';
import Chat from './components/chat';
import { Col, Row } from 'antd';
import Ranking from './components/ranking';
import CurrentRound from './components/currentRound';

export default function Home() {
  return (
    <main className={styles.main}>
      <Row gutter={[24, 24]} className={styles.content}>
        <Col span={9}>
          <Welcome />
          {/* <CurrentRound /> */}
        </Col>
        <Col span={15}>
          <div>
            <NavBar />
            {/* graph */}
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
