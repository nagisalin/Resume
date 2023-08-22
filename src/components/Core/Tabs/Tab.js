import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Tab.scss';

const Tab = (props) => {
	const { isActive, onClick, tabIndex, tabLabel } = props;
	
	const rootClassName = cx('Tab', {
		active: isActive,
	});
	const handleClick = (event) => {
		event.preventDefault();
		onClick(tabIndex);
	};

	return (
		<li className={rootClassName} style={{ display: tabLabel ? '' : 'none' }} onClick={handleClick}>
			{tabLabel}
		</li>
	);
};

Tab.propTypes = {
	isActive: PropTypes.bool,
	onClick: PropTypes.func,
	tabIndex: PropTypes.number,
	tabLabel: PropTypes.string,
};

Tab.defaultProps = {
	isActive: false,
	onClick: () => {},
	tabIndex: 0,
	tabLabel: '',
};

export default Tab;