import DemoBlock from './DemoBlock/DemoBlock';

import '../SectionContainer.scss';
import './SideProject.scss';

import loginPageImg from 'design/pictures/loginPage.png';
import chartPageImg from 'design/pictures/chartPage.png';
import listPageImg from 'design/pictures/listPage.png';

const SideProject = () => {

	return (
		<section id="SideProject" className="SideProjectSection" style={{ "--clr": getComputedStyle(document.body).getPropertyValue('--skyBlue_color') }}>
			<div className="ResumeDivider" />
			
			<div className="SideProject-Container">
				<div className="SideProject-Title">
					作品應用
				</div>

				<div className="SideProject-Intro">
					<div className="SideProject-Intro-Title">CodingBar 線上教學平台系統</div>
					<div className="SideProject-Intro-Description">{`在 瑞比智慧科技公司 期間協助維護與開發新功能，
以下各段將會針對重點功能說明，相關示範請由上方導覽頁點選觀看，
Other 也有更多額外功能開發時的截圖 與 特別經歷紀錄。`}
					</div>
				</div>

				<DemoBlock
					img={loginPageImg}
					imgAlt='loginPage'
					title='Login Page'
					description={`平台有登入頁面讓學生透過帳號密碼登入，
除了基本切版之外，設計端上有需求要使用到
Carousel 套件處理右側輪播圖，因此當時由我研究官方 Doc 引入 Package 使用。
此頁面由於有手機登入需求，因此含簡易 RWD 設計。
					
另外此範例有串 Firebase 作為後端使用者帳戶處理，
可點選註冊或忘記密碼進行基本帳戶功能使用，
亦或利用 trial account 驗證登入
(成功登入我這邊是做跳出一個 alert 示範😂)`}
					url="./login"
				/>

				<DemoBlock
					img={chartPageImg}
					inverse
					imgAlt='chartPage'
					title='Chart Page'
					description={`平台設計使用圖表方式呈現一些數據面的資訊，
依照設計端協助處理重複 Component 與切版，
上方也有 Tab 標籤頁設計。
					
這邊在下方的全部商品評分處，為了計算與全部人的離群程度，使用到數學的標準差計算，當初其他的同仁一看到設計 spec 時就直接說：「這數學看起來好難哦早就忘光了，交給史萊姆數學系的好了XD」，於是這邊的 task 就由我全部處理了😅
					
const getStandardDeviation = (data, average) => {
  if (!data) return
	
  const totalPower = data.reduce((total, el) =>
        { return total + el ** 2 }, 0)
	
  return Math.sqrt((totalPower / data.length) - average ** 2)
}

大概像這樣的計算QQ`}
					url="./chart"
				/>

				<DemoBlock
					img={listPageImg}
					imgAlt='listPage'
					title='List Page'
					description={`平台很常有列表需要做資料管理，
因此 Rectangle 與後面 Hamburger 的組合 component 還滿常使用的。

這邊有串 FireStore 的後端實作資料庫，
並且實作基礎 CRUD，也有簡易搜尋功能。`}
					url="./list"
				/>
			</div>
		</section>
	);
}

export default SideProject;