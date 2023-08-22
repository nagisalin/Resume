import React, { Fragment, useState, useCallback, useEffect, useRef } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Redirect,
	useLocation,
} from 'react-router-dom';

import Index from '../../containers/Index/Index';
import Recipes from '../../containers/Recipes/Recipes';
import Dinner from '../../containers/Dinner/Dinner';
import Cooking from '../../containers/Cooking/Cooking';
import About from '../../containers/About/About';

const InnerContent = React.memo(function InnerContent(
	{
		//props
	}
) {
	const urlParams = useLocation();

	const [element, setElement] = useState(null);

	useEffect(() => {
		let url = urlParams.pathname;
		url = url.split('/')[2]

		switch (url) {
			case "recipes":
				setElement(<Recipes />)
				break
			
			case "dinner-tv":
				setElement(<Dinner />)
				break
			
			case "cooking-school":
				setElement(<Cooking />)
				break
			
			case "about":
				setElement(<About />)
				break
			
			default:
				setElement(<Index />)
		}
		
	}, [urlParams.pathname]);

	return (
		<>
			{element}
		</>
		
	);
});

InnerContent.propTypes = {
	//props: PropTypes.string,
};

export default InnerContent;