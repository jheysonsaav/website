// Copyright (C) Jheyson Saavedra ~ All right reserved.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTelegramPlane,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  let datetime = new Date();
  let year = datetime.getFullYear();
  return (
    <footer className="flex justify-around py-1 dark:bg-gray-800 content-center">
      <div className="">
        <a
          href={`https://github.com/${
            process.env.GITHUB_USERNAME || 'JheysonSaavedra' || 'JheysonDev'
          }`}
          className="text-secondary-500 hover:text-secondary-400 text-xl md:text-2xl mx-2 md:mx-4"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href={`https://twitter.com/${
            process.env.TWITTER_USERNAME || 'JheysonSaavedra' || 'JheysonDev'
          }`}
          className="text-secondary-500 hover:text-secondary-400 text-xl md:text-2xl mx-2 md:mx-4"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          target="_blank"
          href={`https://t.me/${
            process.env.TELEGRAM_USERNAME || 'JheysonSaavedra' || 'JheysonDev'
          }`}
          className="text-secondary-500 hover:text-secondary-400 text-xl md:text-2xl mx-2 md:mx-4"
        >
          <FontAwesomeIcon icon={faTelegramPlane} />
        </a>
      </div>
      <div className="font-medium dark:text-gray-300">
        © Jheyson Saavedra {year}
      </div>
    </footer>
  );
}

export default Footer;
