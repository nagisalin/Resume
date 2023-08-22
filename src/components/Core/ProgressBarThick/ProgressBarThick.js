import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './ProgressBarThick.scss';

const ProgressBarThick = React.memo(function ProgressBarThick({
	baseClassName,
	progressClassName,
	progressWidth,
	progressLabel,
}) {
	return (
		<div className={cx('ProgressBarThick-base', baseClassName)}>
			<span
				className={cx(
					progressWidth ? 'progress-bar' : 'no-value',
					progressClassName
				)}
				style={{
					width: progressWidth > 0 ? `${progressWidth}%` : 'fit-content',
				}}>
				{progressLabel && (
					<span className='progress-label'>{progressLabel}</span>
				)}
			</span>
		</div>
	);
});

ProgressBarThick.propTypes = {
	baseClassName: PropTypes.string,
	progressClassName: PropTypes.string,
	progressWidth: PropTypes.number.isRequired,
	progressLabel: PropTypes.string,
};

export default ProgressBarThick;
