import './ProgressRow.scss';

const ProgressRow = (props) => {
	const { totalLevel, currentLevel, bgColor, activeColor, hasLabel, height } = props;

	const currentLevelRatio = `${(currentLevel / totalLevel) * 100 || 0}%`;

	const bgBarStyle = {
		backgroundColor: bgColor,
		height,
	};

	const activeBarStyle = {
		backgroundColor: activeColor,
		height,
		width: currentLevelRatio,
	};

	const labelStyle = {
		backgroundColor: activeColor,
	};

	const formatDate = (timeStamp) => {
		// var year = timeStamp.getFullYear();
		var month = ('0' + (timeStamp.getMonth() + 1)).slice(-2); // 注意月份是从0开始计数的
		var day = ('0' + timeStamp.getDate()).slice(-2);
		// var hours = ('0' + timeStamp.getHours()).slice(-2);
		// var minutes = ('0' + timeStamp.getMinutes()).slice(-2);
		// var seconds = ('0' + timeStamp.getSeconds()).slice(-2);
		
		return month + '/' + day;
	}

	return (
		<section className="progress-block">
			<div className="progress-block-left">
				<h3 className="row-title">商品狀態：</h3>
				
				<div className="progress-text">
					已送達
				</div>
			</div>
			
			<div className='progress-cont-border'> {/* 純粹為了外框線加的 div */}
				<div className="progress-cont">
					<div className="bar-cont">
						<div style={bgBarStyle} className="ProgressRow">
							<div style={activeBarStyle} className="ProgressRow-activeBar">
								{hasLabel && (
									<div style={labelStyle} className="ProgressRow-label">
										{formatDate(new Date())}
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="period-time-cont">
						已送達
					</div>
				</div>
			</div>
		</section>
	)
}

ProgressRow.defaultProps = {
	extendInfo: false,
	bgColor: '#EBF2F8',
	activeColor: '#2F80ED',
	currentLevel: 2,
	totalLevel: 10,
	height: '6px',
	hasLabel: false,
}

export default ProgressRow;