import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

interface ProjectCardProps {
  id: number;
  name: string;
  full_name?: string;
  description: string;
  html_url?: string;
  homepage?: string;
  git_url?: string;
}

function ProjectCard(props: ProjectCardProps): JSX.Element {
  return (
    <div
      key={props.id}
      className="rounded p-2 bg-white shadow hover:shadow-md md:shadow-lg md:hover:shadow-xl sm:shadow-md sm:hover:shadow-lg dark:bg-gray-600 transition ease-in-out duration-300"
    >
      <h1 className="text-blue-500 font-medium text-lg select-all">
        {props.name}
      </h1>
      <div>
        <a
          href={props.html_url}
          className="px-1 text-indigo-400 hover:text-indigo-300"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href={props.homepage}
          className="px-1 text-indigo-400 hover:text-indigo-300"
        >
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a
          href={props.git_url}
          className="px-1 text-indigo-400 hover:text-indigo-300"
        >
          <FontAwesomeIcon icon={faCodeBranch} />
        </a>
      </div>
      <p className="text-gray-700 select-all dark:text-gray-200">
        {props.description || 'No description'}
      </p>
    </div>
  );
}

export default ProjectCard;
