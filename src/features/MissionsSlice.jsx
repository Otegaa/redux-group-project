import { createSlice, current } from '@reduxjs/toolkit';
import fetchMissions from '../API/apiMissions';

const initialState = {
  missions: [],
  loading: false,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => {
      console.log(payload);
      const newState = state.missions.map((mission) => {
        if (mission.id === payload) return { ...mission, reserved: !mission.reserved };
        console.log(current(state));
        return mission;
      });
      return { ...state, newState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({ ...state, loading: true }))
      .addCase(fetchMissions.fulfilled, (state, { payload }) => ({
        ...state,
        missions: payload,
      }));
  },
});

export const { joinMission } = missionSlice.actions;

export default missionSlice.reducer;
