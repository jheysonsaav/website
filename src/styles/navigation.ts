import styled from "styled-components"
import theme from "@/config/theme"

const NavContainner = styled.nav`
	box-shadow: 2px 2px 5px #EEEEEE;
	padding: 10px;
	position: sticky;
	* {
		margin: 0;
		padding: 0;
	}
	ul {
		height: 100%;
		display: flex;
		justify-content: center;
		li {
			list-style: none;
			padding: 0 1em;
			a {
				color: ${theme.palette.primary};
			}
			a:hover {
				border-bottom: 2px;
		  }
	}
	}
`

export {NavContainner}
