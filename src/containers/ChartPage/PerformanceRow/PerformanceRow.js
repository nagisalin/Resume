import PropTypes from 'prop-types';
import cx from 'classnames';

import './PerformanceRow.scss';

const PerformanceRow = (props) => {
	const {
		rowTitle,
		leftBlockSubtitle,
		middleBlockSubtitle,
		rightBlockSubtitle,
		leftBlockValue,
		middleBlockValue,
		rightBlockValue,
		barTopSubtitle,
		barBottomSubtitle,
		barTopValue,
		barBottomValue,
		barTopWidth,
		barBottomWidth,
		linearTransfer,
		testType,
	} = props;

	const linearTransform = (max, min, value) => {
		const delta = 100 / (max - min);

		return value * delta;
	};

	return (
		<section className={cx('perf-row default-perf-row', testType === 'comming' ? 'incomming' : '')}>
			{rowTitle ? <h3 className="row-title">{rowTitle}</h3> : null}

			<div className={rowTitle ? 'row-content' : 'row-content noTitle'}>
				<div className="row-block-item">
					{testType ? (
						<span
							className={
								leftBlockValue >= 80 ? 'block-text EXC' : leftBlockValue < 60 ? 'block-text Poor' : 'block-text'
							}>
							{leftBlockValue}
						</span>
					) : (
						<span className={`block-text ${leftBlockValue}`}>{leftBlockValue}</span>
					)}
					<span className="block-subtext">{leftBlockSubtitle || "leftBlockSubtitle"}</span>
				</div>

				<div className="row-block-item">
					<span className="block-text">{middleBlockValue}</span>
					<span className="block-subtext">{middleBlockSubtitle}</span>
				</div>

				<div className="row-block-item">
					<span className="block-text">{rightBlockValue}</span>
					<span className="block-subtext">{rightBlockSubtitle || "rightBlockSubtitle"}</span>
				</div>

				<div className="stu-average-block">
					<div className="bar-text-cont">
						<p className="bar-subtitle">{barTopSubtitle}</p>

						<div className="stu-bar-cont">
							{linearTransfer ? (
								<span
									className={barTopWidth ? 'stu-bar' : cx('no-value-bar', testType === 'comming' ? 'incomming' : '')}
									style={{
										width:
											barTopWidth > 0
												? `${linearTransform(linearTransfer[0], linearTransfer[1], barTopWidth)}%`
												: 'fit-content',
									}}>
									{middleBlockValue !== '-' ? barTopValue || middleBlockValue : ''}
								</span>
							) : (
								<span
									className={barTopWidth ? 'stu-bar' : cx('no-value-bar', testType === 'comming' ? 'incomming' : '')}
									style={{ width: barTopWidth > 0 ? `${barTopWidth}%` : 'fit-content' }}>
									{middleBlockValue !== '-' ? barTopValue || middleBlockValue : ''}
								</span>
							)}
						</div>
					</div>

					<div className="bar-text-cont">
						<p className="bar-subtitle">{barBottomSubtitle || "barBottomSubtitle"}</p>
						<div className="average-bar-cont">
							{/* <span>{barBottomSubtitle}</span> */}
							{linearTransfer ? (
								<span
									className={
										barBottomWidth !== '-' && barBottomWidth !== 0
											? 'average-bar'
											: cx('no-value-bar', testType === 'comming' ? 'incomming' : '')
									}
									style={{
										width:
											barBottomWidth > 0
												? `${linearTransform(linearTransfer[0], linearTransfer[1], barBottomWidth)}%`
												: 'fit-content',
									}}>
									{rightBlockValue !== '-' || barBottomValue ? barBottomValue || rightBlockValue : ''}
								</span>
							) : (
								<span
									className={
										barBottomWidth ? 'average-bar' : cx('no-value-bar', testType === 'comming' ? 'incomming' : '')
									}
									style={{ width: barBottomWidth > 0 ? `${barBottomWidth}%` : 'fit-content' }}>
									{rightBlockValue !== '-' || barBottomValue ? barBottomValue || rightBlockValue : ''}
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

PerformanceRow.propTypes = {
	className: PropTypes.string,
	rowTitle: PropTypes.string,
	leftBlockSubtitle: PropTypes.string,
	middleBlockSubtitle: PropTypes.string,
	rightBlockSubtitle: PropTypes.string,
	leftBlockValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	middleBlockValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	rightBlockValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	barTopSubtitle: PropTypes.string,
	barBottomSubtitle: PropTypes.string,
	barTopValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	barBottomValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	barTopWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	barBottomWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	questionsSubmit: PropTypes.array,
};

export default PerformanceRow;