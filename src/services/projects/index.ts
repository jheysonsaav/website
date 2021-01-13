// Copyright (C) Jheyson Saavedra ~ All right reserved.
import axios from 'axios';

async function getProjects(): Promise<[any, number]> {
  const request = await axios.get('/api/projects');
  return [request.data, request.status];
}

export default getProjects;
