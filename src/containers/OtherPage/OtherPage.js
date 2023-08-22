import WorkSpaceBlock from './WorkSpaceBlock/WorkSpaceBlock';
import exerciseEditorImg from 'design/pictures/exerciseEditorPage.png';
import calendarImg from 'design/pictures/calendarPage.png';
import clickModalOutSideImg from 'design/pictures/clickModalOutSide.png';
import visiblePasswordImg from 'design/pictures/visiblePassword.png';
import selectAllWordAImg from 'design/pictures/selectAllWordA.png';
import selectAllWordBImg from 'design/pictures/selectAllWordB.png';

import './OtherPage.scss';

const OtherPage = () => {
	return (
		<div className="OtherPage">
			<h1 className="WorkSpace-Title">其他ＵＩ介面例</h1>
			<WorkSpaceBlock
				img={exerciseEditorImg}
				imgAlt="exerciseEditorImg"
				title="CodingBar 系統 - 線上程式碼編譯器畫面"
				description={`由於 CodingBar 系統為線上程式語言教學平台，
為了讓學生能方便直接透過瀏覽器編寫程式碼，
而非需要安裝繁雜編譯器軟體及設定，
並且需配合課程教學設計，
有習題介面以及解答、下載講義資源等等 UI，
在設計師完稿後即與同仁合作並完成此頁面切板。

當時處理此頁面遇到的挑戰是，
由於右側題目敘述與提交皆可拖曳寬度大小，
在寬度從未滿版至滿版過程中，
右邊題目敘述視窗拖曳向左變大時，
要能推動左邊的提交視窗前進，
而當碰到最左側滿版時則要阻止拖曳，
為了類似的距離調整，也是需要做一堆數學條件判斷去計算寬度，
並且設置 min-width 做處理。`}
			/>

			<WorkSpaceBlock
				img={calendarImg}
				imgAlt="calendarImg"
				title="CodingBar 系統 - 行事曆行程"
				description={`由於在教學面上會需要對教學講師進行排班，
當時的講師與學生授課資料為了方便行政人員填寫，
因此都是透過線上 GoogleSheet 管理。

但行政人員提出希望能有一個行事曆表，
方便觀看每天有哪些講師上課，
因此我就透過 GoogleSheet Api 串接，
並且研究 react-calender package 的 doc 做出此頁面，
算是額外自發性幫助同仁的 task。`}
			/>
		
			<h1 className="WorkSpace-Title" style={{marginTop: "100px"}}>其他ＵＸ改善例</h1>

			<WorkSpaceBlock
				img={visiblePasswordImg}
				imgAlt="visiblePasswordImg"
				title="CodingBar 系統 - 輸入密碼框"
				description={`一般來說對於密碼這種私密性較高的資訊，
通常都會用 * 字號做隱藏，
但由於這邊在建立資料時沒有特別做密碼重複輸入欄位驗證，
很常發生有人填寫資料後，卻發現無法正常登入，
可能是設定密碼時打錯字或輸入法問題等等。

所以我當時針對從用戶處聽聞到的困擾，
就加上可以顯示密碼的 toggle，
至少在送出資料前用戶可以稍微確認一下。`}
			/>

			<WorkSpaceBlock
				img={clickModalOutSideImg}
				imgAlt="clickModalOutSideImg"
				title="CodingBar 系統 - 建立資料 Modal"
				description={`懸浮視窗是常見的 UI 呈現方式，
通常在點擊外側區域時就表示想關閉按掉視窗，
而不用特地要找 x 按鍵或是關閉。

但由於這邊是填寫資料的懸浮視窗，
很常發生用戶在填寫到一半時，
可能在移動滑鼠要點選其他欄位，或準備按下確認按鍵，
卻不小心點到視窗外側區域，而導致直接關閉視窗，
先前填寫的內容全部遺失。

當然也有另一種 UX 的做法是 cache 概念，
關閉前先存在 sessionStorage 裡保留用戶先前填寫的內容，
不過概念上來說兩個都做也可以，
如此一來既不會在點選外側區域時就不小心關閉，
或是按下取消後如果又反悔想建立，
也還是能再復原已填寫的內容。`}
			/>

			<WorkSpaceBlock
				ABtest={{
					imgA: selectAllWordAImg,
					imgB: selectAllWordBImg,
					imgA_Alt: "selectAllWordAImg",
					imgB_Alt: "selectAllWordBImg",
				}}
				title="CodingBar 系統 - 全選文字欄位"
				description={`學生在做程式題目練習時，
很常會需要參考答案的程式碼，因此當我在教學現場時，
就很常觀察到他們是習慣利用鍵盤的 ctrl+A 快捷鍵全選解答文字，
而不是用滑鼠進行反白。

針對這點就將原本 ctrl+A 全選會選到所有畫面上的文字，
對 area 進行調整方便學生能準確選到解答部分。`}
			/>

			{/* 我是分隔線 */}
			<h1 className="WorkSpace-Title" style={{marginTop: "100px"}}>特別經歷紀錄</h1>




		</div>
	);
};

export default OtherPage;
