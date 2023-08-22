import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { HeaderItems } from './config';
import Logo from './Logo.png';

const Header = React.memo(function Header(
	{
		//props
	}
) {
	const [ isSearching, setIsSearching ] = useState(false);

	const renderHeader = () => {
		return HeaderItems.map((item, index) => {
			return (
				<div key={index} className="homePageFrame-header-block-linkItem">
					<Link to={item.url}>{item.title}</Link>
				</div>
			);
		});
	};

	return (
		<div className="homePageFrame-header">
			<Link to={'/xuemi_project'}><img src={Logo} className="homePageFrame-header-logo"/></Link>

			<div className="homePageFrame-header-block">
				<i className="fa-solid fa-magnifying-glass homePageFrame-header-block-searchIcon" onClick={() => setIsSearching(!isSearching)}></i>
				<input type="text" className={isSearching ? "homePageFrame-header-block-searchInput open": "homePageFrame-header-block-searchInput"} placeholder="搜尋網站目標"></input>
				{renderHeader()}
				<button className="homePageFrame-header-block-signInBtn">Sign In</button>
			</div>
		</div>
	);
});

Header.propTypes = {
	//props: PropTypes.string,
};
export default Header;
