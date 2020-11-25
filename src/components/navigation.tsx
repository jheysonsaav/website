import React from "react"
import {NavContainner} from "@/styles/navigation"
import Link from "next/link"

class Navigation extends React.Component {
	render() {
		return (
			<NavContainner>
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
			</NavContainner>
		)
	}
}

export default Navigation
