import { MyDataInterface, PlayersInterface } from '@/app/interfaces/app';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { players } from '../players';

const initialState = {
  isGameInitialized: <boolean>false,
  isGameStarted: <boolean>false,
  ranking: <PlayersInterface[]>players,
  isRoundRunning: <boolean>false,
  stopPoint: <number>0,
  roundDuration: <number>2000,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsGameInitialized: (state, action: PayloadAction<boolean>) => {
      state.isGameInitialized = action.payload;
    },
    setIsGameStarted: (state, action: PayloadAction<boolean>) => {
      state.isGameStarted = action.payload;
    },
    setRanking: (state, action: PayloadAction<PlayersInterface[]>) => {
      const updatedRanking = action.payload.map((player: PlayersInterface) => {
        const findPlayer = state.ranking.find(
          (p) => p.name === player.name
        ) as PlayersInterface;
        let score: number;
        if (Number(player.multiplier) > state.stopPoint) {
          score = findPlayer.score;
        } else {
          score =
            Number(player.point) * Number(player.multiplier) + findPlayer.score;
        }
        let totalPoint = findPlayer.totalPoint - Number(player.point);
        totalPoint =
          Number(player.multiplier) > state.stopPoint
            ? totalPoint
            : totalPoint + Number(player.point) * Number(player.multiplier);
        return { ...player, score, totalPoint };
      });
      state.ranking = updatedRanking.sort((a, b) => b.score - a.score);
    },
    setIsRoundRunning: (state, action: PayloadAction<boolean>) => {
      state.isRoundRunning = action.payload;
    },
    setStopPoint: (state, action: PayloadAction<number>) => {
      state.stopPoint = action.payload;
    },
    setRoundDuration: (state, action: PayloadAction<number>) => {
      state.roundDuration = 2000 / action.payload;
    },
    resetStore: () => initialState,
  },
});

export default appSlice.reducer;

export const {
  setRanking,
  setIsGameInitialized,
  setIsGameStarted,
  setIsRoundRunning,
  setStopPoint,
  setRoundDuration,
  resetStore,
} = appSlice.actions;
