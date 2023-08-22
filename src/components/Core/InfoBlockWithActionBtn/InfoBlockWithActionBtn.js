import PropTypes from 'prop-types';
import cx from 'classnames';

import './InfoBlockWithActionBtn.scss';

const InfoBlockWithActionBtn = (props) => {
	const { className, bodyClassName, headerText, isShowTabLabelColor, tabLabelColor, children } = props;

	return (
		<div className={cx('info-block-cont', className)}>
			<div className="info-block-header-cont">
				{isShowTabLabelColor && <div className="block-header-label" style={{ backgroundColor: tabLabelColor }}></div>}

				<h3 className="block-header-text">{headerText}</h3>
			</div>

			<div className={cx('info-block-body', bodyClassName)}>{children}</div>
		</div>
	);
};

InfoBlockWithActionBtn.propTypes = {
	className: PropTypes.string,
	bodyClassName: PropTypes.string,
	headerText: PropTypes.string,
	btnText: PropTypes.string,
	onClickActionBtn: PropTypes.func,
	isShowTabLabelColor: PropTypes.bool,
	tabLabelColor: PropTypes.string,
};

export default InfoBlockWithActionBtn;
