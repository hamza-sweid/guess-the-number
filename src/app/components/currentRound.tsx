import { Button, Input, Slider, Space, Table, message } from 'antd';
import style from '../styles/currentRound.module.css';
import { TrophyTwoTone } from '@ant-design/icons';
import TableStyle from '../styles/table.module.css';
import {
  CaretUpOutlined,
  CaretDownOutlined,
  RiseOutlined,
} from '@ant-design/icons';
import { SliderMarks } from 'antd/es/slider';
import { useEffect, useState } from 'react';
import { players, updatedPlayers } from '../../services/players';
import { PlayersInterface } from '../interfaces/app';
import { ColumnsType } from 'antd/es/table';
import {
  setRanking,
  setStopPoint,
  setIsGameStarted,
  setRoundDuration,
} from '../../services/redux/reducers';
import { useDispatch, useSelector } from 'react-redux';

const marks: SliderMarks = {
  1: '1x',
  2: '2x',
  3: '3x',
  4: '4x',
  5: '5x',
};

const CurrentRound = () => {
  const dispatch = useDispatch();
  const [point, setPoint] = useState<number>(100);
  const [multiplier, setMultiplier] = useState<number>(1.0);
  const [speed, setSpeed] = useState<number>(1);
  const [localPlayers, setLocalPlayers] = useState<PlayersInterface[]>([]);
  const [round, setRound] = useState<any>({
    isRoundRunning: false,
    currentRound: 0,
  });
  const [localStopPoint, setLocalStopPoint] = useState<number | null>(null);
  const myData = useSelector((state: any) => state.app?.ranking).find(
    (player: PlayersInterface) => player.isMe
  );

  const columns: ColumnsType<PlayersInterface> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: any) => (
        <span
          className={
            round.currentRound === 0 || round.isRoundRunning
              ? ''
              : record.multiplier <= Number(localStopPoint)
              ? 'win'
              : 'lost'
          }
        >
          {text}
        </span>
      ),
    },
    {
      title: 'Pointe',
      dataIndex: 'point',
      key: 'point',
      render: (text: string, record: any) => (
        <span
          className={
            round.currentRound === 0 || round.isRoundRunning
              ? ''
              : record.multiplier <= Number(localStopPoint)
              ? 'win'
              : 'lost'
          }
        >
          {text}
        </span>
      ),
    },
    {
      title: 'Multiplier',
      dataIndex: 'multiplier',
      key: 'multiplier',
      render: (text: string, record: any) => (
        <span
          className={
            round.currentRound === 0 || round.isRoundRunning
              ? ''
              : record.multiplier <= Number(localStopPoint)
              ? 'win'
              : 'lost'
          }
        >
          {text}
        </span>
      ),
    },
  ];

  useEffect(() => {
    setLocalPlayers(players);
  }, []);

  const handleStartTheRound = () => {
    if (myData.totalPoint < point) return message.warning('Not enough points');
    if (point < 1)
      return message.warning('Point must be greater than 1 to start the round');
    if (multiplier < 1)
      return message.warning(
        'Multiplier must be greater than 1 to start the round'
      );
    if (multiplier > 9.99) return message.warning('Multiplier must be less 10');
    const players: PlayersInterface[] = updatedPlayers(point, multiplier);
    setLocalPlayers(players);
    const randomStopPoint = Number((Math.random() * 10).toFixed(2));
    setLocalStopPoint(randomStopPoint);
    dispatch(setStopPoint(randomStopPoint));
    setRound({ isRoundRunning: true, CurrentRound: round.CurrentRound + 1 });
    setIsGameStarted(true);
    setTimeout(() => {
      setRound({ isRoundRunning: false });
      dispatch(setRanking(players));
    }, 2500 / speed);
  };

  const handleSetSpeed = (value: number) => {
    setSpeed(value);
    dispatch(setRoundDuration(value));
  };

  return (
    <div className={style.currentRound}>
      {/* user inputs */}
      <Space className={style.userInput}>
        <div className={style.inputContainer}>
          <Input
            type="number"
            className={style.input}
            addonBefore={
              <CaretDownOutlined
                onClick={() => setPoint(parseInt(point.toString()) - 25)}
                className={style.control}
              />
            }
            addonAfter={
              <CaretUpOutlined
                onClick={() => setPoint(parseInt(point.toString()) + 25)}
                className={style.control}
              />
            }
            value={point}
            onChange={(e: any) => setPoint(parseInt(e.target.value))}
          />
          <span className={style.inputTitle}>Points</span>
        </div>
        <div className={style.inputContainer}>
          <Input
            type="number"
            className={style.input}
            addonBefore={
              <CaretDownOutlined
                onClick={() =>
                  setMultiplier(parseFloat(multiplier.toString()) - 0.25)
                }
                className={style.control}
              />
            }
            addonAfter={
              <CaretUpOutlined
                onClick={() =>
                  setMultiplier(parseFloat(multiplier.toString()) + 0.25)
                }
                className={style.control}
              />
            }
            value={multiplier}
            onChange={(e: any) => setMultiplier(parseFloat(e.target.value))}
          />
          <span className={style.inputTitle}>Multiplier</span>
        </div>
      </Space>

      <Button
        block
        type="primary"
        className={
          round.isRoundRunning ? style.disabled : '' + ' primer-button my-2'
        }
        onClick={handleStartTheRound}
        disabled={round.isRoundRunning}
      >
        Start
      </Button>

      <h3 className="my-1">
        <TrophyTwoTone twoToneColor="#d96a61" />
        <span className="mx-1">Current Round</span>
      </h3>

      <Table
        columns={columns}
        rootClassName={TableStyle.table}
        dataSource={localPlayers}
        pagination={false}
      />

      {/* speed control */}
      <h3 className="my-3">
        <RiseOutlined style={{ color: '#d96a61' }} /> Speed
      </h3>
      <div className={style.sliderContainer}>
        <Slider
          marks={marks}
          min={1}
          max={5}
          defaultValue={1}
          value={speed}
          onChange={(value: number) => handleSetSpeed(value)}
          step={null}
          className={style.slider}
        />
      </div>
    </div>
  );
};

export default CurrentRound;
