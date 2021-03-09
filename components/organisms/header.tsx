import ChangeThemeButton from "@/components/molecules/changeThemeButton";
import Link from "next/link";

function Header(): JSX.Element {
  return (
    <header className="flex flex-wrap overflow-auto justify-between items-center content-center w-full px-3 py-2 lg:px-5 lg:py-3 mb-2 sticky top-0 select-none shadow-2xl bg-gray-100 dark:bg-black-800 z-50">
      <nav>
        <ul className="flex flex-wrap font-medium text-gray-600 dark:text-gray-300">
          <li className="pr-2 hover:text-blue-400 transition duration-200 ease-in-out">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="pr-2 hover:text-blue-400 transition duration-200 ease-in-out">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className="pr-2 hover:text-blue-400 transition duration-200 ease-in-out">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <ChangeThemeButton />
    </header>
  );
}

export default Header;
