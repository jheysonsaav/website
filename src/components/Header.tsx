function Header(): JSX.Element {
  const navItems = [
    {
      name: 'Home',
      path: '/',
      key: 0o1,
    },
    {
      name: 'Projects',
      path: '/projects',
      key: 0o2,
    },
    {
      name: 'Blog',
      path: '/blog',
      key: 0o3,
    },
  ];

  return (
    <nav className="justify-center sticky top-0 flex bg-white shadow-md py-1.5 md:py-2 lg:py-3 dark:bg-gray-800 dark:shadow-lg">
      <div>
        <ul className="flex justify-between space-x-2 md:space-x-4 lg:space-x-8 select-none text-lg md:text-2 font-medium">
          {navItems.map((item: any) => (
            <li key={item.key}>
              <a
                href={item.path}
                className="text-blue-500 text-semibold hover:text-blue-400 hover:scale-150 transition duration-200 ease-in-out"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
