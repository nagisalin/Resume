import Avatar1 from 'design/images/avatar1.png';
import Avatar2 from 'design/images/avatar2.jpeg';

import '../SectionContainer.scss';
import './Information.scss';

const introduction = `      數學系背景出身來說對比資工科系的長處，自覺在「邏輯設計」或需要「數學運算」方面來的好，也為了幫助更多非本科系的成人或甚至國高中生，盡量用易懂且圖像型的方式教學理解演算法。

      以自己過去的工作經驗來看，自從 ChatGPT 廣為應用後，前端工程既不用靠自己記憶撰寫、也不會在面對複雜邏輯時找不到答案，比起早期在 Stack OverFlow 上搜尋解決辦法來說更為方便。工程師面試時常考白板題，主要也是衡量對方的技術知識外，就是看邏輯能力或臨場自主能力，但在凡事皆能 Google 找答案的現今，考驗對方是否能在未做過某項功能的情況下，去閱讀官方文件或尋問 AI 完成作法，這種獨立工程與理解、試誤能力或許更為重要。

      對於日新月異的技術更迭或是不了解的東西，除了 ChatGPT 以外也有許多線上免費的影片資源可學，但最重要的初衷應該還是，我對於能將設計的畫面或想法，實際產出變成符合的畫面或遊戲(埋一些彩蛋)等等，屬於成就感的部分才是支持我繼續學習前進的動力吧！`

const Information = () => {

	return (
		<section id="Information" className="informationSection" style={{ "--clr": getComputedStyle(document.body).getPropertyValue('--cream_color')}}>
			<div className="information-info">
				<div className="information-info-detail">
					<div className="information-info-avatar">
						<img src={Avatar1} alt="Avatar1" className="avatarImg"/>
						<img src={Avatar2} alt="Avatar2" className="avatarImg" />
					</div>
					<p className="name">洪世桓</p>
					<p className="job">Front-End Engineer</p>
					<p>🏠  Taiwan / Taipei</p>
					<p>📬  getsulin@gmail.com</p>
					<p>📞  0921-512-668</p>
					<p>🏫  國立臺灣師範大學 數學系 畢</p>

					<p style={{ marginTop: '16px', fontSize: "16px"}}>※履歷非 ChatGPT 生成聲明</p>
					<p style={{ fontSize: "16px" }}>　現在是不是都要附註這句? XD</p>
				</div>

				<div className="information-info-intro">
					<p>【一隻從大學開始接觸程式的史萊姆】</p>
					{introduction}
				</div>
			</div>

			<div className="information-bottom">
				技能

				<div className="underline w90"></div>

				<div className="information-bottom-skill">
					<div className="information-bottom-skill-items">
						<ul className="information-bottom-skill-item-title">
							<li>React.js/Hook</li>
						</ul>

						<div className="information-bottom-skill-item-text">
							{`過去工作使用 classComponent 方式撰寫
目前皆改以 hook 建立新專案
相關詳細內容可參考 作品應用
曾有接案從頭使用 webpack 並處理 RWD 經驗`}
						</div>
					</div>

					<div className="information-bottom-skill-items">
						<ul className="information-bottom-skill-item-title">
							<li>Node.js</li>
						</ul>
					
						<div className="information-bottom-skill-item-text">
							{`配合 GCP 服務建立後端 API
部署於 Cloud Functions 並提供給前端使用
DB 存取於 FireStore`}
						</div>
					</div>

					<div className="information-bottom-skill-items">
						<ul className="information-bottom-skill-item-title"><li>其他</li></ul>

						<ul style={{marginLeft: "24px", listStyle: "circle"}}>
							<li>HTML/CSS/SCSS</li>
							<li>i18n</li>
							<li>Git</li>
							<li>WordPress</li>
							<li style={{whiteSpace: "pre-wrap"}}>{`資安弱掃處理\n(黑箱:ZAP/白箱:SonarQube)`}</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Information;