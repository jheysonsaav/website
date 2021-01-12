import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import axios from 'axios';

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
    <Layout title="This Projects - JheysonDev" className="text-center" header>
      <h1 className="text-blue-500 text-3xl font-medium pt-4 pb-2">Projects</h1>
      <div className="grid grid-cols-1 gap-1 sm:gap-2 md:gaps-4 md:grid-cols-4 sm:grid-cols-2">
        {repos.map((repo) => (
          <ProjectCard
            id={repo.id}
            name={repo.name}
            full_name={repo.full_name}
            description={repo.description}
            html_url={repo.html_url}
            homepage={repo.homepage}
          />
        ))}
      </div>
    </Layout>
  );
}

export default ProjectsPage;
