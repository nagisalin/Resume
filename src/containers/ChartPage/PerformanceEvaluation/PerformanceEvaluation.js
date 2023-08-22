import React from 'react';

import { ProgressBarThick } from 'components';

import './PerformanceEvaluation.scss';

const PerformanceEvaluation = React.memo(function PerformanceEvaluation({ evaluation }) {
	const section = {
		'顧客評分': [
			{ value: 'quality', title: '商品品質' },
			{ value: 'seller', title: '賣家服務' },
			{ value: 'logistics', title: '物流服務' },
		],
		'商品評分': [
			{ value: 'price', title: '性價比' },
			{ value: 'durability', title: '品質與耐用性' },
			{ value: 'design', title: '外觀設計' },
			{ value: 'package', title: '包裝環保' },
			{ value: 'reputation', title: '口碑和評論' },
		],
	};

	const renderSection = (title) => {
		return (
			<div className='performanceEvaluation-section'>
				<h3 className='performanceEvaluation-section-title'>
					{title}
				</h3>
				<div className='performanceEvaluation-section-content'>
					{section[title].map((obj, index) => renderEachRow(obj, index))}
				</div>
			</div>
		);
	};

	const renderEachRow = (obj) => {
		return (
			<div
				className='performanceEvaluation-content-eachRow'
				key={`${obj.value}index`}
			>
				
				<p className='performanceEvaluation-eachRow-title'>
					{obj.title}
				</p>

				<ProgressBarThick
					progressWidth={evaluation && evaluation[obj.value] ? evaluation[obj.value] * 10 : 0}
					baseClassName='performanceEvaluation-eachRow-progressBar'
					progressClassName={`${obj.value}`}
				/>

				<p className='performanceEvaluation-eachRow-evaluation'>
					{(evaluation && evaluation[obj.value]) ? `${evaluation[obj.value]}/10` : `-/10`}
				</p>
			</div>
		);
	};

	return (
		<div className='performanceEvaluation'>
			{renderSection('顧客評分')}
			{renderSection('商品評分')}
		</div>
	);
});

export default PerformanceEvaluation;
