export interface IImage {
  id: number;
  images: string;
  project: number;
}
export interface IProjects {
  name: string;
  description: string;
  language: string[];
  clientReview: string;
  reviewStar: number;
  clientName: string;
  status: string;
  projectLink: string;
  type: string;
  images: IImage[];
  id: number;
}

export interface ICareers {
  id: number;
  title: string;
  requirement: string;
  valid: string;
  description: string;
}

export interface IClient {
  id: number;
  name: string;
  description: string;
  designation: string;
  image: string;
}

export interface IEvent {
  id: number;
  title: string;
  description: string;
  isFeatured: boolean;
  image: string;
}

export interface ITeam {
  id: number;
  name: string;
  designation: string;
  description: string;
  githubLink: string;
  linkedinLink: string;
  upworkLink: string;
  isFeatured: boolean;
  image: string;
}

export interface appState {
  loading: boolean;
  error: string | undefined;
  data: any;
  projects: IProjects[];
  projectsLoading: boolean;
  projectsError: string | undefined;
  careers: ICareers[];
  careersLoading: boolean;
  careersError: string | undefined;
  clients: IClient[];
  clientsLoading: boolean;
  clientsError: string | undefined;
  events: IEvent[];
  eventsLoading: boolean;
  eventsError: string | undefined;
  teams: ITeam[];
  teamsLoading: boolean;
  teamsError: string | undefined;
}
