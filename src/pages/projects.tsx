// Copyright (C) Jheyson Saavedra ~ All right reserved.
import React, { useEffect, useState } from 'react';
import Layout from 'src/components/Layout';
import ProjectCard from 'src/components/ProjectCard';
import RequestError from 'src/components/RequestError';
import getProjects from 'src/services/projects';

function ProjectsPage(): JSX.Element {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const projects = async () => {
      const data = await getProjects();
      if (data[0]) {
        setRepos(data[0]);
      } else {
        setError('We have had problems obtaining the projects');
      }
    };
    projects();
  }, []);

  return (
    <Layout title="This Projects - JheysonDev" className="" header>
      {error ? (
        <RequestError
          errrorTitle={error}
          errorDescription="Please check your internet connection and try to reload the page, if it works, you can come back later"
        />
      ) : (
        <>
          <h1 className="text-blue-500 text-3xl text-center font-medium pt-4 pb-2">
            Projects
          </h1>
          <div className="grid grid-cols-1 gap-2 px-2 sm:gap-2 md:gaps-4 md:grid-cols-4 sm:grid-cols-2">
            {repos.map((repo: any) => (
              <ProjectCard
                id={repo.id}
                name={repo.name}
                full_name={repo.full_name}
                description={repo.description}
                html_url={repo.html_url}
                homepage={repo.homepage}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
              />
            ))}
          </div>
        </>
      )}
    </Layout>
  );
}

export default ProjectsPage;
