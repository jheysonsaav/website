function Header(): JSX.Element {
  return (
    <nav className="bg-gray-800 sticky top-0 flex justify-center md:py-2 lg:py-3 shadow-lg">
      <div>
        <ul className="flex justify-between md:space-x-4 lg:space-x-8 text-lg md:text-2 font-medium">
          <li>
            <a href="/" className="text-blue-500 hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="/projects" className="text-blue-500 hover:text-blue-400">
              Projects
            </a>
          </li>
          <li>
            <a href="/blog" className="text-blue-500 hover:text-blue-400">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
