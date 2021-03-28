import Link from "next/link";

function Header(): JSX.Element {
  return (
    <header
      className="flex items-center px-4 py-2 lg:px-6 lg:py-4 bg-white sticky top-0 z-40"
      style={{ boxShadow: "4px 4px 40px 20px #F1F5F9" }}
    >
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="font-medium text-gray-600 hover:text-blue-500">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="font-medium text-gray-600 hover:text-blue-500">
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="font-medium text-gray-600 hover:text-blue-500">
                Blog
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
