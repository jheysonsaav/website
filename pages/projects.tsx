import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

function ProjectsPage(): JSX.Element {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get('/api/projects')
      .then((response) => {
        setRepos(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="text-center">
      <Header />
      <h1 className="text-blue-500 text-3xl font-bold pt-2 underline">
        Projects
      </h1>
      <div className="grid grid-cols-1 gaps-4 md:grid-cols-4 sm:grid-cols-2">
        {repos.map((repo) => (
          <div key={repo.id} className="rounded-sm bg-gray-600 m-2">
            <h1 className="underline text-blue-500 font-semibold">
              {repo.name}
            </h1>
            <div>
              <a
                href={repo.html_url}
                className="px-1 text-indigo-400 hover:text-purple-500"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={repo.homepage}
                className="px-1 text-indigo-400 hover:text-purple-500"
              >
                <FontAwesomeIcon icon={faHome} />
              </a>
              <a
                href={repo.git_url}
                className="px-1 text-indigo-400 hover:text-purple-500"
              >
                <FontAwesomeIcon icon={faCodeBranch} />
              </a>
            </div>
            <p>{repo.description || 'No description'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
