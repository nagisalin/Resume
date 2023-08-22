import React, { useState, useEffect } from "react";
import classnames from 'classnames';

import './ResumeHeader.scss';

const ResumeHeader = () => {

	const [currentContent, setCurrentContent] = useState('Information')

	useEffect(() => {
		/* 下面是 componentDidMount*/
		window.addEventListener('scroll', handleScroll);
		
		/* 上面是 componentDidMount */
		
		return (() => {
			/* 下面是 componentWillUnmount */
			window.removeEventListener('scroll', handleScroll);

			/* 上面是 componentWillUnmount */
		});
		
	}, []);

	const handleScroll = () => {
		const sections = document.getElementsByTagName('section')
		const headerHeight = 117;

		for (let section of sections) {
			const top = window.scrollY;
			const offset = section.offsetTop - 3;
			const height = section.offsetHeight;
			let id = section.getAttribute('id');

			if (top >= offset && top < offset + height - headerHeight) {
				setCurrentContent(id)
			} else if (top >= offset + height - headerHeight && top < offset + height) {
				setCurrentContent('divider')
			}
		}
	}

	return (
		<div className="ResumeHeader">
			<nav className={currentContent}>
				<a href="#Information" style={{ "--clr": getComputedStyle(document.body).getPropertyValue('--cream_color') }} className={(currentContent === 'Information') ? "active" : ""}>Information</a>
				<a href="#Experience" style={{ "--clr": getComputedStyle(document.body).getPropertyValue('--lightYellow_color') }} className={(currentContent === 'Experience') ? "active" : ""}>Experience</a>
				<a href="#SideProject" style={{ "--clr": getComputedStyle(document.body).getPropertyValue('--skyBlue_color') }} className={(currentContent === 'SideProject') ? "active" : ""}>SideProject</a>
				<a href="#Learn" style={{ "--clr": getComputedStyle(document.body).getPropertyValue('--pink_color') }} className={(currentContent === 'Learn') ? "active" : ""}>Learn</a>
			</nav>
		</div>
	);
}

export default ResumeHeader;