import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import axios from 'axios';
import { Suspense } from 'react';

function ProjectsPage(): JSX.Element {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get('/api/projects')
      .then((response) => {
        setRepos(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="text-center">
      <Header />
      <h1 className="text-blue-500 text-3xl font-medium pt-4 pb-2">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-1 sm:gap-2 md:gaps-4 md:grid-cols-4 sm:grid-cols-2">
        {repos.map((repo) => (
          <ProjectCard
            id={repo.id}
            name={repo.name}
            full_name={repo.full_name}
            description={repo.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
