import classnames from 'classnames';

import './ProgressBar.scss';

const ProgressBar = (props) => {
	const { progress, style, variant, striped, animated, hasLabel } = props;

	const css = classnames(
		'progress-bar',
		variant,
		{ striped },
		{ animated },
	);

	return (
		<div style={style} className="ProgressBar">
			<div className={css} style={{ width: `${progress}%` }}>
				{hasLabel &&
					<div className="progress-bar-label">
						{progress} %
					</div>
				}
			</div>
		</div>
	)
}

export default ProgressBar;