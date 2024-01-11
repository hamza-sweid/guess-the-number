export interface PlayersInterface {
  key: string;
  name: string;
  point: number | string;
  totalPoint: number;
  multiplier: number | string;
  score: number;
  isMe: boolean;
}

export interface MyDataInterface {
  points: number;
  name: string;
}
