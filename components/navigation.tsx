import Icon from "@/components/icon";
import { useEffect, useState } from "react";

function Navigation(): JSX.Element {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);

    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else if (theme == "light") {
      setTheme("dark");
    }
  };

  return (
    <header className="flex flex-wrap justify-between items-center content-center w-full px-3 py-2 sticky top-0 select-none shadow-2xl bg-gray-100 dark:bg-gray-800">
      <nav>
        <ul className="flex flex-wrap font-medium text-blue-500">
          <li className="pr-2 hover:text-blue-400 transition duration-200 ease-in-out">
            <a href="/">Home</a>
          </li>
          <li className="pr-2 hover:text-blue-400 transition duration-200 ease-in-out">
            <a href="/projects">Projects</a>
          </li>
          <li className="pr-2 hover:text-blue-400 transition duration-200 ease-in-out">
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
      <div>
        <button
          onClick={toggleTheme}
          className="w-6 h-6 text-gray-700 dark:text-gray-300"
        >
          {theme == "light" ? <Icon name="moon" style="solid" /> : null}
          {theme == "dark" ? <Icon name="sun" style="solid" /> : null}
        </button>
      </div>
    </header>
  );
}

export default Navigation;
