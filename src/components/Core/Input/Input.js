import React from 'react';

import './Input.scss';

export default function (props) {
	const { className = '', ...otherProps } = props;
	const handleClick = (e) => {
		e.stopPropagation();
	};

	return (
		<input
			type="text"
			style={{ outline: 'blue' }}
			onClick={(e) => handleClick(e)}
			className={`input-text ${className}`}
			{...otherProps}
		/>
	);
}
