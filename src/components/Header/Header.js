import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import './Header.scss';
import LogoPng from 'design/images/slime.png';

const Header = (props) => {
	const { HeaderItems } = props;

	useEffect(() => {
		HeaderItems.map(item => {
			const btn = document.getElementById(item.path);
			btn.addEventListener('mousemove', (e) => {
				const rect = e.target.getBoundingClientRect();
				const x = e.clientX * 3 - rect.left;
				btn.style.setProperty('--x', x + 'deg');
			})
		})
	},[])

	return (
		<div className="Header">
			<img className="Header-Logo" src={LogoPng} alt="Header-Logo" />

			<div className="Header-Items">
				<Link to="/" className="Header-Items-Resume">Resume</Link>
				{HeaderItems.map(item => {
					return (
						<Link to={item.path} key={item.path} id={item.path}>
							<i></i><i></i>
							<span>{item.title}</span>
						</Link>
					)
				})}
			</div>
		</div>
	);
}

export default Header;