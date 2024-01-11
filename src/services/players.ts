import { PlayersInterface } from '@/app/interfaces/app';
import { ColumnsType } from 'antd/es/table';

export const players: PlayersInterface[] = [
  {
    key: '1',
    name: 'You',
    totalPoint: 1000,
    point: '-',
    multiplier: '-',
    score: 0,
    isMe: true,
  },
  {
    key: '2',
    name: 'Jim Green',
    totalPoint: 1000,
    point: '-',
    multiplier: '-',
    score: 0,
    isMe: false,
  },
  {
    key: '3',
    name: 'Joe Black',
    totalPoint: 1000,
    point: '-',
    multiplier: '-',
    score: 0,
    isMe: false,
  },
  {
    key: '4',
    name: 'Eve Jackson',
    totalPoint: 1000,
    point: '-',
    multiplier: '-',
    score: 0,
    isMe: false,
  },
];

export const columns: ColumnsType<PlayersInterface> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Pointe',
    dataIndex: 'point',
    key: 'point',
  },
  {
    title: 'Multiplier',
    dataIndex: 'multiplier',
    key: 'multiplier',
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
];

export const updatedPlayers = (points: number, multiplier: number) => {
  const UpdatedPlayers = players.map((player, index) => {
    if (index === 0) {
      return {
        ...player,
        point: points,
        multiplier: multiplier,
      };
    } else {
      return {
        ...player,
        point: points,
        multiplier: Number((Math.random() * 10).toFixed(2)),
      };
    }
  });
  return UpdatedPlayers;
};
