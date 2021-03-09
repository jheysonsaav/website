import Icon from "@/components/atoms/icon";
import Button from "@/components/atoms/button";
import { useState, useEffect } from "react";

function ChangeDefaultButton(): JSX.Element {
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
    <>
      <Button onClick={toggleTheme} className="hidden lg:inline-flex">
        {theme == "light" ? <Icon name="moon" style="solid" /> : null}
        {theme == "dark" ? <Icon name="sun" style="solid" /> : null}
      </Button>
      <Button onClick={toggleTheme} className="lg:hidden">
        {theme == "light" ? <Icon name="moon" style="outline" /> : null}
        {theme == "dark" ? <Icon name="sun" style="outline" /> : null}
      </Button>
    </>
  );
}

export default ChangeDefaultButton;
