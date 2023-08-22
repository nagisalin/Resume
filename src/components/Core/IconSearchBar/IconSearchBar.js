import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SearchLogo from 'design/images/Icons/search.png';
import './IconSearchBar.scss';

export default class IconSearchBar extends Component {
	static propTypes = {
		searchTerm: PropTypes.string.isRequired,
		placeholder: PropTypes.string,
		onSearchInput: PropTypes.func.isRequired,
		onSearchSubmit: PropTypes.func,
		className: PropTypes.string,
	};

	render() {
		const { searchTerm, placeholder, className, onSearchInput, onSearchSubmit, clearSearchTerm } = this.props;

		return (
			<div className={cx("icon-search-bar-cont", className)}>
				<input
					className="icon-search-input"
					type="text"
					placeholder={ placeholder || 'please enter text'}
					value={searchTerm}
					onChange={onSearchInput}
					onKeyDown={onSearchSubmit}
				/>
				<img src={SearchLogo} alt='icon-search-bar-img' className='icon-search-bar-img'/>

				{searchTerm && <div className="icon-search-bar-clear" aria-hidden="true" onClick={clearSearchTerm}>
					<svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="icon-search-bar-clear-SvgCss">
						<path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
					</svg>
				</div>
				}
			</div>
		)
	}
}