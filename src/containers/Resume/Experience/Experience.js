import '../SectionContainer.scss';
import './Experience.scss';

const Experience = () => {
	const experiences = [
		{
			duration: '九月 2023 - 二月 2024',
			title: 'Front-End Engineer',
			company: '太平洋建設(蝦米智慧) (已離職)',
			position: '專案前端開發 / 資安弱點掃描',
			description: `專案型處理前端工作事項，
根據設計製作並一人完成從開版到 RWD 樣式、Webpack 設定等，
乃至 Deploy 於 IIS 令專案上線。
			
專案分別為：
[外部專案類]
- 製作<a href="https://www.sabahyan.com/" target="_blank" rel="noreferrer noopener">沙巴官燕官方網站</a>
- 製作<a href="http://www.pacific-aiot.com.tw/" target="_blank" rel="noreferrer noopener">泉源國際官方網站</a>
- 製作<span style="text-decoration: underline;">松山機場小學堂活動網站</span>(現已被下架QQ)

[內部專案類]
- 新北市府停車場後台管理系統 (含獨立設計)
- 新竹警局 ISMS 管理系統 (含獨立設計)
- 泉源國際內部 OA 管理系統 (含獨立設計)
   此專案有額外 Node.js 建立全端設計
   供公司同仁進行 上下班打卡 及 公告資訊用 系統
- 停車場事業 KIOSK 繳費機系統介面 (含獨立設計)

除一般專案外，亦負責專案的資安弱掃處理項目，
針對專案定期進行黑白箱弱掃，
並協助修復掃描問題。`,
		},
		{
			duration: '七月 2021 - 六月 2023',
			title: 'Front-End Engineer',
			company: '瑞比智慧科技(CodingBar) (已離職)',
			position: '平台前端 Feature 開發 / Issue 維護',
			description:
				'- 協助製作程式教學平台，前端維護與需求開發\n- 負責與後端溝通合作串接 API 功能，定期 Weekly Meeting\n- 擔任前端負責人( 1~3 人成員) 分配工作項目 與 專案 PM\n\n- 協助 git 進退版處理，QA 把關 deploy 至 staging/prod\n- 建立 Notion 筆記制度，方便日後培訓公司新人或交接\n\n- 使用 GCP 與 Cloud Functions 承接外包自動化爬蟲專案\n- 使用 Wordpress 生成 CSFC 檢定 官網',
		},
		{
			duration: '四月 2018 - 七月 2021',
			title: 'Course Design/Teaching',
			company: '瑞比智慧科技(CodingBar) (已離職)',
			position: '課程設計開發 / 教學講師\n(教學 Python, C++ / 國高中程式教育)',
			description:
				'- 協助設計最初版 Python 程式教育課程，規劃投影片製作與課堂 習題設計，\n   以及後來的線上課程錄製與資優班學生特規教材\n- 整理課程開發所需資源，並建檔規格化處理\n- 擔任課程組負責人(3~5人成員) 分配工作項目 與 合作開發\n- 規劃 MTA(現稱 ITS) 考試題庫以提高證照合格通過率。',
		},
	];

	return (
		<section
			id="Experience"
			className="ExperienceSection"
			style={{ '--clr': getComputedStyle(document.body).getPropertyValue('--lightYellow_color') }}>
			<div className="ResumeDivider" />

			<div className="timeline-container">
				<div className="timeline-axis" />
				<div className="timeline">
					{experiences.map((experience, index) => (
						<div key={index} className="timeline-item">
							<div className="circle" />
							<div className="job-intro">
								<div className="duration">{experience.duration}</div>
								<div className="title">{experience.title}</div>
								<div className="company">{experience.company}</div>
								<div className="position">{experience.position}</div>
							</div>

							<div className="job-list" dangerouslySetInnerHTML={{ __html: experience.description }}>
								{/* {experience.description} */}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
