import { Fragment, useState } from "react";

import { Tabs, Tab, InfoBlockWithActionBtn } from "components";
import PerformanceEvaluation from "./PerformanceEvaluation/PerformanceEvaluation";
import ProgressRow from "./ProgressRow/ProgressRow";
import PerformanceRow from "./PerformanceRow/PerformanceRow";

import "./ChartPage.scss";

const evaluation = {
	quality: Math.floor(Math.random() * 10) + 1,
	seller: Math.floor(Math.random() * 10) + 1,
	logistics: Math.floor(Math.random() * 10) + 1,

	price: Math.floor(Math.random() * 10) + 1,
	durability: Math.floor(Math.random() * 10) + 1,
	design: Math.floor(Math.random() * 10) + 1,
	package: Math.floor(Math.random() * 10) + 1,
	reputation: Math.floor(Math.random() * 10) + 1
}

const ChartPage = () => {
	const [activeTab, setActiveTab] = useState(0);

	const getAverage = (totalNumber, length) => {
		let average = totalNumber / length
		return parseFloat(average.toFixed(1));
	}

	const getStandardDeviation = (data, average) => {
		if (!data) return
	
		const totalPower = data.reduce((total, el) => {
			return total + el ** 2
		}, 0)
	
		return Math.sqrt((totalPower / data.length) - average ** 2)
	}

	const getNormalDistributionFlag = (currentValue, Average, SD) => {
		const LowerTwoBound = (Average - 2 * SD > 0) ? Average - 2 * SD : 0;
		const LowerOneBound = (Average - SD > 0) ? Average - SD : 0;
		const UpperTwoBound = Average + 2 * SD;
		const UpperOneBound = Average + SD

		if (currentValue <= LowerTwoBound) {
			return -2;
		} else if (LowerTwoBound < currentValue && currentValue < LowerOneBound) {
			return -1;
		} else if (UpperOneBound < currentValue && currentValue < UpperTwoBound) {
			return 1;
		} else if (currentValue >= UpperTwoBound) {
			return 2
		} else {
			return 0
		}
	}
	
	const getEvaluation = (type, value) => {  //評語標準因為分兩種，percent 和 標準差，用 type 區別
		if (type === 'percent') {
			if (value >= 80) {
				return 'S'
			} else if (value >= 60) {
				return 'A'
			} else if (value >= 40) {
				return 'B'
			} else if (value >= 20) {
				return 'C'
			} else {
				return 'D'
			}
		} else if (type === 'SD') {
			if (value === 2) {
				return 'Outlier'
			} else if (value === 1) {
				return 'Outlier'
			} else if (value === -1) {
				return 'Outlier'
			} else if (value === -2) {
				return 'Outlier'
			} else {
				return 'Normal'
			}
		}
	}
	
	const onTabSelected = (tabIndex) => {
		setActiveTab(tabIndex)
	}

	const renderProgress = () => { 
		return (
			<InfoBlockWithActionBtn
				className="data-block"
				headerText='商品寄送進度'
				isShowTabLabelColor={true}
				tabLabelColor="#286DC9"
			>
				<ProgressRow
					totalLevel={10}
					currentLevel={10}
					hasLabel
				/>
			</InfoBlockWithActionBtn>
		)
	}

	const renderEvaluation = () => {
		return (
			<InfoBlockWithActionBtn
				className="data-block"
				headerText="購買評價"
				isShowTabLabelColor={true}
				tabLabelColor="#28C9AC"
			>
				<PerformanceEvaluation 
					evaluation={evaluation}
				/>
			</InfoBlockWithActionBtn>
		)
	}

	const renderAnalysis = () => {
		const StatsLength = 10

		//  商品品質
		const good = evaluation.quality;
		const goodEvaluationsFlag = Math.floor(Math.random() * 3) - 1;

		const goodEvaluations = (goodEvaluationsFlag === 1) ?
			Array.from({ length: StatsLength - 1 }, () => Math.floor(Math.random() * 4) + 7)
			: (goodEvaluationsFlag === -1) ?
				Array.from({ length: StatsLength - 1 }, () => Math.floor(Math.random() * 5) + 1)
				: Array.from({ length: StatsLength - 1 }, () => Math.floor(Math.random() * 10) + 1)
		const totalGoodEvaluation = good + goodEvaluations.reduce((total, currentValue) => {
			return total + currentValue;
		}, 0)

		const goodStateAverage = getAverage(totalGoodEvaluation, StatsLength)
		const goodStateSD = getStandardDeviation(goodEvaluations.concat() ,goodStateAverage)
		const goodStateNDFlag = getNormalDistributionFlag(good, goodStateAverage, goodStateSD)

		// 賣家服務
		const seller = evaluation.seller

		const sellerEvaluationsFlag = Math.floor(Math.random() * 3) - 1;

		const sellerEvaluations = (sellerEvaluationsFlag === 1) ?
			Array.from({ length: StatsLength - 1 }, () => Math.floor(Math.random() * 4) + 7)
			: (sellerEvaluationsFlag === -1) ?
				Array.from({ length: StatsLength - 1 }, () => Math.floor(Math.random() * 5) + 1)
				: Array.from({ length: StatsLength - 1 }, () => Math.floor(Math.random() * 10) + 1)
		
		const totalSellerEvaluation = seller + sellerEvaluations.reduce((total, currentValue) => {
			return total + currentValue;
		}, 0)

		const sellerStateAverage = getAverage(totalSellerEvaluation, StatsLength)
		const sellerStateSD = getStandardDeviation(sellerEvaluations.concat(seller) ,sellerStateAverage)
		const sellerStateNDFlag = getNormalDistributionFlag(seller, sellerStateAverage, sellerStateSD)

		// 物流服務
		const logistics = evaluation.logistics

		const logisticsEvaluationsFlag = Math.floor(Math.random() * 3) - 1;

		const logisticsEvaluations = (logisticsEvaluationsFlag === 1) ?
			Array.from({ length: StatsLength - 1 }, () => Math.floor(Math.random() * 4) + 7)
			: (logisticsEvaluationsFlag === -1) ?
				Array.from({ length: StatsLength - 1 }, () => Math.floor(Math.random() * 5) + 1)
				: Array.from({ length: StatsLength - 1 }, () => Math.floor(Math.random() * 10) + 1)
		
		const totalLogisticsEvaluation = logistics + logisticsEvaluations.reduce((total, currentValue) => {
			return total + currentValue;
		}, 0)

		const logisticsStateAverage = getAverage(totalLogisticsEvaluation, StatsLength)
		const logisticsStateSD = getStandardDeviation(logisticsEvaluations.concat(logistics) ,logisticsStateAverage)
		const logisticsStateNDFlag = getNormalDistributionFlag(logistics, logisticsStateAverage, logisticsStateSD)

		return (
			<InfoBlockWithActionBtn
				className="data-block"
				headerText="全部商品評分"
				isShowTabLabelColor={true}
				tabLabelColor="#7778DE"
			>
				<Fragment>
					<PerformanceRow
						rowTitle="商品品質"

						leftBlockSubtitle="你的評分離群"
						leftBlockValue={getEvaluation('SD', goodStateNDFlag)}

						middleBlockSubtitle="你的評分"
						middleBlockValue={good}
						
						rightBlockSubtitle="全部評分平均"
						rightBlockValue={goodStateAverage}
						
						barTopSubtitle="你的評分"
						barTopWidth={ Math.round(good / 10 * 100) }
						
						barBottomSubtitle="全部評分平均"
						barBottomWidth={ Math.round(goodStateAverage / 10 * 100) }
					/>

					<PerformanceRow
						rowTitle="賣家服務"

						leftBlockSubtitle="你的評分離群"
						leftBlockValue={getEvaluation('SD', sellerStateNDFlag)}

						middleBlockSubtitle="你的評分"
						middleBlockValue={seller}
						
						rightBlockSubtitle="全部評分平均"
						rightBlockValue={sellerStateAverage}
						
						barTopSubtitle="你的評分"
						barTopWidth={ Math.round(seller / 10 * 100) }
						
						barBottomSubtitle="全部評分平均"
						barBottomWidth={ Math.round(sellerStateAverage / 10 * 100) }
					/>

					<PerformanceRow
						rowTitle="物流服務"

						leftBlockSubtitle="你的評分離群"
						leftBlockValue={getEvaluation('SD', logisticsStateNDFlag)}

						middleBlockSubtitle="你的評分"
						middleBlockValue={logistics}
						
						rightBlockSubtitle="全部評分平均"
						rightBlockValue={logisticsStateAverage}
						
						barTopSubtitle="你的評分"
						barTopWidth={ Math.round(logistics / 10 * 100) }
						
						barBottomSubtitle="全部評分平均"
						barBottomWidth={ Math.round(logisticsStateAverage / 10 * 100) }
					/>
				</Fragment>
			</ InfoBlockWithActionBtn>
		)
	}

	return (
		<div className="ChartPage">
			<Tabs className="ChartPage-Tabs" tabContentClassName="ChartPage-Content" defaultActiveTabIndex={activeTab} onTabSelected={onTabSelected}>
				<Tab tabLabel="商品頁">
					<Fragment>
						<div className="ChartPage-Content-Title">
							商品頁
						</div>

						<div className="ChartPage-Content-Body">
							{renderProgress()}
							{renderEvaluation()}
			
							{renderAnalysis()}
						</div>
					</Fragment>
				</Tab>
			</Tabs>
		</div>
	)
}

export default ChartPage;