import { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';
import dotenv from 'dotenv';

async function Projects(req: NextApiRequest, res: NextApiResponse) {
  dotenv.config();

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
    userAgent: 'JheysonDev Website v1',
  });

  const repos = await octokit.repos.listForUser({
    username: 'JheysonDev',
  });

  res.status(repos.status).json(repos);
}

export default Projects;
