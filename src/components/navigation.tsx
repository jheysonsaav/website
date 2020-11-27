import React from "react";
import Link from "next/link";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav_containner">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
