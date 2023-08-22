import { Link } from 'react-router-dom';

import '../SectionContainer.scss';
import './Learn.scss';

const Learn = () => {

	const learnItems = [
		{
			title: '1. 學米前後端課程',
			description: '當初為了讓自己能從頭有系統規劃性的學習，以及要往全端工程師發展，因此有購買學米的線上前後端影片課程觀看學習(還要分期付款至 2024 年底QAQ)，以結論來說我自己是覺得其實前端的內容我都有做過了，當然有些技術上的原因或歷史演變等等在課程後有更了解，或是有些類似功能的介紹，這對未來如果有需要能認識到更多使用選項是好事。\n\n購買線上課程應該主要就是看看對方設計的教學大綱與示範案例實作，不然其實如果只是純觀念，網路上查詢甚至詢問 ChatGPT 應該都能有答案，結合我自身的程式講師經驗來看，如何將複雜的事情能說明的簡單甚而有趣，應該會是課程的口碑與熱銷流量密碼吧+_+',
			url: '/xuemi_project'
		},

		{
			title: '2. OnlineTutorialsYT',
			description: '在 Youtube 上都有很多免費前端資源，無論是關於 css 的特效教學，或是關於 React 的進階使用、cleanCode 等知識，基本上都可以從中不斷參照精進自己的能力技術。\n\nOnlineTutorialsYT 就是一個我有追蹤的頻道，因為本身想增進設計端方面的閱覽，所以都會上去看看有沒有什麼好看的樣式動畫，未來也許在某個專案上可以使用到，他的頻道都是利用 html 與 純css 就可以辦到的特效，能跟著對方的教學應用在 React 上實做出來也很有成就感很好玩，做前端最高興的事莫過於將漂亮的 design 能真正的實踐不是嗎~~ (雖然更多時候，如果沒 design 我可能就都用彩虹上色了XD)\n\n作品應用的上方 Header Buttons 與 首頁 Resume NavigationBar 就是出自該處。',
		},

		{
			title: '3. iThome 鐵人賽',
			description: '在 iT邦幫忙 的網頁上，每年都會固定舉辦所謂的鐵人賽，也就是約 30 天的時間內，每天都要持之以恆的撰寫一篇技術文章分享，其中不乏有許多前人與專業人士都有分享相關知識。\n\n尤其是觀看他人的教學說明，有些人就是能用很好的舉例將艱深的技術說的淺顯易懂，或是有曾經踩過的坑、遇過的雷點經驗都能在上面學習，有系統的學習對於接觸新技術會是事半功倍。',
		},
	]

	return (
		<section id="Learn" className="LearnSection" style={{ "--clr": getComputedStyle(document.body).getPropertyValue('--pink_color') }}>
			<div className="ResumeDivider" />
			
			<div className="Learn-Container">
				<div className="Learn-Title">學習資源</div>
				{learnItems.map((learnItem, index) => (
					<div key={index} className="Learn-Item">
						<div className="Learn-item-title">{learnItem.title}</div>

						<div className="Learn-item-description">
							{learnItem.description}
						</div>

						{learnItem.url &&
							<Link to={learnItem.url} className="Learn-item-link">
								Project Link
							</Link>
						}
						
					</div>
				))}
			</div>
		</section>
	);
}

export default Learn;