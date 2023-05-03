import { createSlice, ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';

import { getProjects, getCareers, getClients, getEvents, getTeam } from '@/services/appService';

import { appState, IProjects, ICareers, IClient, IEvent, ITeam } from './types';

export const initialState: appState = {
  loading: false,
  error: '',
  data: {},
  projects: [] as IProjects[],
  projectsLoading: false,
  projectsError: '',
  careers: [] as ICareers[],
  careersLoading: false,
  careersError: '',
  clients: [] as IClient[],
  clientsLoading: false,
  clientsError: '',
  events: [] as IEvent[],
  eventsLoading: false,
  eventsError: '',
  teams: [] as ITeam[],
  teamsLoading: false,
  teamsError: '',
};

export const getAllProjectThunk = createAsyncThunk('app/projects', async () => {
  return await getProjects();
});

export const getAllClientThunk = createAsyncThunk('app/clients', async () => {
  return await getClients();
});

export const getAllCareersThunk = createAsyncThunk('app/careers', async () => {
  return await getCareers();
});

export const getAllEventsThunk = createAsyncThunk('app/events', async () => {
  return await getEvents();
});

export const getAllTeamThunk = createAsyncThunk('app/teams', async () => {
  return await getTeam();
});

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    clearError(state: appState) {
      state.error = '';
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<appState>) => {
    // projects
    builder.addCase(getAllProjectThunk.pending, (state: appState) => {
      state.projectsLoading = true;
    });
    builder.addCase(getAllProjectThunk.fulfilled, (state: appState, { payload }) => {
      state.projectsLoading = false;
      state.projects = payload;
    });
    builder.addCase(getAllProjectThunk.rejected, (state: appState, { error }) => {
      state.projectsError = error.message;
      state.projectsLoading = false;
      state.projects = [] as IProjects[];
    });
    // clients
    builder.addCase(getAllClientThunk.pending, (state: appState) => {
      state.clientsLoading = true;
    });
    builder.addCase(getAllClientThunk.fulfilled, (state: appState, { payload }) => {
      state.clientsLoading = false;
      state.clients = payload;
    });
    builder.addCase(getAllClientThunk.rejected, (state: appState, { error }) => {
      state.clientsError = error.message;
      state.clientsLoading = false;
      state.clients = [] as IClient[];
    });
    // career
    builder.addCase(getAllCareersThunk.pending, (state: appState) => {
      state.careersLoading = true;
    });
    builder.addCase(getAllCareersThunk.fulfilled, (state: appState, { payload }) => {
      state.careersLoading = false;
      state.careers = payload;
    });
    builder.addCase(getAllCareersThunk.rejected, (state: appState, { error }) => {
      state.clientsError = error.message;
      state.careersLoading = false;
      state.careers = [] as ICareers[];
    });
    // team
    builder.addCase(getAllTeamThunk.pending, (state: appState) => {
      state.teamsLoading = true;
    });
    builder.addCase(getAllTeamThunk.fulfilled, (state: appState, { payload }) => {
      state.teamsLoading = false;
      state.teams = payload;
    });
    builder.addCase(getAllTeamThunk.rejected, (state: appState, { error }) => {
      state.teamsError = error.message;
      state.teamsLoading = false;
      state.teams = [] as ITeam[];
    });
    // events
    builder.addCase(getAllEventsThunk.pending, (state: appState) => {
      state.eventsLoading = true;
    });
    builder.addCase(getAllEventsThunk.fulfilled, (state: appState, { payload }) => {
      state.eventsLoading = false;
      state.events = payload;
    });
    builder.addCase(getAllEventsThunk.rejected, (state: appState, { error }) => {
      state.clientsError = error.message;
      state.eventsLoading = false;
      state.events = [] as IEvent[];
    });
  },
});

export const { clearError } = appSlice.actions;

export default appSlice.reducer;
