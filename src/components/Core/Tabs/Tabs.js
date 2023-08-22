import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';

const Tabs = (props) => {
	const { className, tabContentClassName, defaultActiveTabIndex, isShowTabList, onTabSelected, selectedIndices, onlyBottomBorder, children } = props;

	const [ activeTabIndex, setActiveTabIndex ] = useState(defaultActiveTabIndex);

	// Toggle currently active tab
	const handleTabClick = (tabIndex) => {
		if (tabIndex === activeTabIndex) {
			return;
		}

		setActiveTabIndex(tabIndex);

		if (onTabSelected) {
			onTabSelected(tabIndex);
		}
	};

	// Encapsulate <Tabs/> component API as props for <Tab/> children
	const renderChildrenWithTabsApiAsProps = () => {
		const childrenElement = children.length > 1 ? children.filter((child) => child) : [children]; // filter out child==null
		
		return React.Children.map(childrenElement, (child, index) => {
			return React.cloneElement(child, {
				onClick: handleTabClick,
				tabIndex: index,
				isActive: index === activeTabIndex,
			});
		});
	};

	// Render current active tab content
	const renderActiveTabContent = () => {
		const childrenElement = children.length > 1 ? children.filter((child) => child) : [children];
		
		if (childrenElement[activeTabIndex]) {
			return childrenElement[activeTabIndex].props.children;
		}
	};

	return (
		<Fragment>
			{isShowTabList && (
				<ul className={`Tabs ${className} ${selectedIndices} ${onlyBottomBorder && 'only-bottom-border'}`}>
					{renderChildrenWithTabsApiAsProps()}
				</ul>
			)}
			<div className={`Tabs-content ${tabContentClassName}`}>{renderActiveTabContent()}</div>
		</Fragment>
	);
}

Tabs.propTypes = {
	className: PropTypes.string,
	tabContentClassName: PropTypes.string,
	defaultActiveTabIndex: PropTypes.number,
	isShowTabList: PropTypes.bool,
	onTabSelected: PropTypes.func,
};

Tabs.defaultProps = {
	className: '',
	tabContentClassName: '',
	defaultActiveTabIndex: 0,
	isShowTabList: true,
};

export default Tabs;