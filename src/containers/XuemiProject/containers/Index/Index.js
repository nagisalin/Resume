import React, { useState, useCallback, useEffect, useRef } from 'react';

import './Index.scss';

const Index = React.memo(function Index(
	{
		//props
	}
) {
	return (
		<div className="homePageFrame-InnerContent">
			<div className="homePageFrame-InnerContent-title">Let's Get Cooking!</div>
			<div className="homePageFrame-InnerContent-content">{"Explore the best recipes from around\nthe world. Make cooking enjoyable again."}</div>
			<button className="homePageFrame-InnerContent-Btn">Explore Recipes</button>
		</div>
	)
})

export default Index;