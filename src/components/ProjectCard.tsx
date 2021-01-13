// Copyright (C) Jheyson Saavedra ~ All right reserved.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons';

interface ProjectCardProps {
  id: number;
  name: string;
  full_name?: string;
  description: string;
  html_url?: string;
  homepage?: string;
  stargazers_count?: number;
  forks_count?: number;
}

function ProjectCard(props: ProjectCardProps): JSX.Element {
  return (
    <div
      key={props.id}
      className="rounded p-2 bg-white shadow select-none text-center hover:shadow-md md:shadow-lg md:hover:shadow-xl sm:shadow-md sm:hover:shadow-lg dark:bg-gray-600 transition ease-in-out duration-300"
    >
      <a
        href={props.homepage || props.html_url}
        className="text-secondary-500 font-medium text-lg select-all hover:underline"
        target="_blank"
      >
        {props.name}
      </a>
      <div>
        <span className="px-1 text-secondary-400 hover:text-secondary-300">
          <FontAwesomeIcon icon={faStar} />
          <span> {props.stargazers_count}</span>
        </span>
        <span className="px-1 text-secondary-400 hover:text-secondary-300">
          <FontAwesomeIcon icon={faCodeBranch} />
          <span> {props.forks_count}</span>
        </span>
      </div>
      <p className="text-gray-700 select-all dark:text-gray-200">
        {props.description || (
          <span className="text-gray-400">No description</span>
        )}
      </p>
    </div>
  );
}

export default ProjectCard;
