import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './MenuItem.scss';

export default class MenuItem extends React.PureComponent {
	static propTypes = {
		className: PropTypes.string,
		onClick: PropTypes.func,
		value: PropTypes.any,
		closeMenu: PropTypes.func,
	};

	static defaultProps = {
		className: '',
	};

	onClick = (e) => {
		const { onClick, value } = this.props;

		if (typeof onClick === 'function') {
			e.stopPropagation();
			onClick(value);
		}

		this.props.closeMenu();
	};

	render() {
		const { className, redText, disabled } = this.props;
		return (
			<li className={`icon-menu-item ${className}`}>
				{typeof this.props.children === 'string' ? (
					<button className={cx("icon-menu-item-btn", { "red-text": redText })} disabled={disabled} onClick={disabled ? null : this.onClick}>
						{this.props.children}
					</button>
				) : (
					<div className="icon-menu-item-btn-plain" onClick={disabled ? null : this.onClick}>
						{this.props.children}
					</div>
				)}
			</li>
		);
	}
}
