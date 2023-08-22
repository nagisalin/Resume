import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import onClickOutside from 'react-onclickoutside';

import { ReactComponent as MenuIcon } from 'design/images/Icons/hamburgerMenu.svg';

import MenuItem from './MenuItem';

import './IconMenu.scss';

class IconMenuTemplate extends React.PureComponent {
	static propTypes = {
		className: PropTypes.string,
		menuButtonClassName: PropTypes.string,
		menuItemCSS: PropTypes.string,
		menuPosition: PropTypes.string,
	};

	static defaultProps = {
		className: '',
		menuButtonClassName: '',
		menuItemCSS: '',
		menuPosition: 'center',
	}

	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
		};
	}

	openMenu = () => {
		this.setState({isOpen: true});
	}

	closeMenu = () => {
		this.setState({isOpen: false,});
	}

	toggleMenu = (e) => {
		e.stopPropagation();
		this.state.isOpen ? this.closeMenu() : this.openMenu();
	}

	handleClickOutside = () => { // can not delete for special functions of 'react-onclickoutside' Module use;
		this.closeMenu();
	};

	listItems() {
		return React.Children.map(this.props.children, (child, index) => {
			if (!child) {
				return null;
			}

			// if uses <Fragment /> to wrap child
			if (typeof child.props.children !== 'string') {
				return React.Children.map(child.props.children, (propChild, propIdx) => {
					if (!propChild) return null
					return React.cloneElement(propChild, {
						closeMenu: this.closeMenu,
					});
				})
			}

			return React.cloneElement(child, {
				closeMenu: this.closeMenu,
			});
		});
	}

	render() {
		const { className, menuButtonClassName, menuPosition } = this.props;
		const { isOpen } = this.state;
		const menuCSS = classnames('icon-menu-list', `align-${menuPosition}`, { 'active': isOpen });

		return (
			<div className={`icon-menu-main ${className}`}>
				<MenuIcon
					className={`icon-menu-main-btn ${menuButtonClassName}`}
					onClick={this.toggleMenu}
				/>
				<ul className={menuCSS}>
					{this.listItems()}
				</ul>
			</div>
		);
	}
}

const IconMenu = onClickOutside(IconMenuTemplate);

IconMenu.Item = MenuItem;

IconMenu.Divider = () => {
	return <div className="icon-menu-divider" />;
};

export default IconMenu;