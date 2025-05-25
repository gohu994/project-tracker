import api from './api';

export const getProjects = async () => {
  const res = await api.get('/projects');
  return res.data;
};

export const getProjectById = async (id: string) => {
  const res = await api.get(`/projects/${id}`);
  return res.data;
};

export const createProject = async (data: any) => {
  const res = await api.post('/projects', data);
  return res.data;
};
