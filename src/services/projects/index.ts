import axios from 'axios';

export const getProjects = async () => {
  let res;
  try {
    const {data, status} = await axios.get('/api/projects');
    res = {data, status}
  } catch (e) {
      const {status} = e.response;
      const {message} = e.reponse.data;
      res = {status, message}
  }finally{
      return res
  }
};
