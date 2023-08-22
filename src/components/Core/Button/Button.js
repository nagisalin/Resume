import React from 'react';
import classnames from 'classnames';

import './Button.scss';

const Button = function(props) {
	const { className, children, primary, primaryYellow, secondary, disabled, tertiary, alert, ...otherProps } = props;
	const css = classnames(
		'custom-button',
		className,
		{ primary },
		{ secondary },
		{ disabled },
		{ tertiary },
		{ 'primary-yellow': primaryYellow },
		{ alert }
	);

	return (
		<button className={css} {...otherProps}>
			{children}
		</button>
	);
}

export default Button;