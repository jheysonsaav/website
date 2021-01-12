import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
import axios from 'axios';

async function Projects(req: NextApiRequest, res: NextApiResponse) {
  dotenv.config();

  const repos = await axios.get(
    `https://api.github.com/users/${
      process.env.GITHUB_USERNAME || 'JheysonSaa'
    }/repos`
  );

  res.status(repos.status).send(repos.data);
}

export default Projects;
