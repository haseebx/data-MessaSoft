import { API_PROJECTS, API_CAREERS, API_CLIENTS, API_EVENTS, API_TEAM } from '@/constants/api';
import { IProjects, ICareers, IClient, IEvent, ITeam } from '@/store/app/types';
import { getErrorMessage } from '@/utils/helper';

import { getRequest } from './utils';

export const getProjects = async (): Promise<IProjects[]> => {
  try {
    const resp = await getRequest(API_PROJECTS);
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const getCareers = async (): Promise<ICareers[]> => {
  try {
    const resp = await getRequest(API_CAREERS);
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const getClients = async (): Promise<IClient[]> => {
  try {
    const resp = await getRequest(API_CLIENTS);
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const getEvents = async (): Promise<IEvent[]> => {
  try {
    const resp = await getRequest(API_EVENTS);
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const getTeam = async (): Promise<ITeam[]> => {
  try {
    const resp = await getRequest(API_TEAM);
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};
