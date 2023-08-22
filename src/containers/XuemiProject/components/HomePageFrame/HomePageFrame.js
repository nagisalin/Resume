import React, { useState, useCallback, useEffect, useRef } from 'react';

import Header from '../Header/Header';
import InnerContent from '../InnerContent/InnerContent';

import './HomePageFrame.scss';

const HomePageFrame = React.memo(function HomePageFrame(
	{
		//props
	}
) {
	return (
		<div className="homePageFrame">
			<div className="homePageFrame-Content">
				<Header />
				<InnerContent />
			</div>
		</div>
	);
})

HomePageFrame.propTypes = {
	//props: PropTypes.string,
};
export default HomePageFrame;
