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
			<h1 className="WorkSpace-Title" style={{ marginTop: "100px" }}>特別經歷紀錄</h1>
			
			<div className="Special-Record-Container">
				<div className="Special-Record-Items">
					<div className="Special-Record-Item-Title">
						Login 使用 google 第三方登入
					</div>

					<div className="Special-Record-Item-Description">
						{`      平台在透過 firebase Google 第三方登入時，
由於他會自動跳轉到 google 登入的畫面，
依照原本的 spec 會希望收集使用者從什麼地方登入的 UTM 相關資訊，
可是一旦跳轉的話就沒辦法透過 props 傳遞。

      Google 了一下解決辦法，有看到建議說將第三方登入的畫面改成小視窗處理，這樣原本的頁面就還是可以在系統內跳轉。

      但後來仔細想想主要就是要想辦法傳遞資訊，所以就想到還是可以透過 localStorage 存取，最後也順利做出想要的結果，算是對 localStorage 的一種應用認識。`}
					</div>
				</div>

				<div className="Special-Record-Items">
					<div className="Special-Record-Item-Title">
						ListPage 減少載入時間
					</div>

					<div className="Special-Record-Item-Description">
						{`      原本平台內有一頁類似 ListPage，也就是新增商品的那個地方，由於商品內容過多且每一包的資料其實都不小，在每一次 fetch 資料做載入時都會跑大約 5 秒，以前端的 performance 來說不甚理想。

      後來我觀察到這個現象時，決定將 fetch 資料的方式改為不要整包讀取，利用 DB 本身的 projection 處理多餘的東西，只撈出整個 rectangle 上
會需要用到呈現的最基本資料，等到使用者如果真的要編輯時，才透過 id 單獨撈出該筆資料整包內容提供 Modal 顯示。

      這是我第一次針對系統載入時間做出優化，當時從 5 秒多的載入時間減少到 0.X 秒，之後聽大多數使用者也認為有改善很多，因而對此很有印象。`}
					</div>
				</div>

				<div className="Special-Record-Items">
					<div className="Special-Record-Item-Title">
						考試阻擋複製貼上
					</div>

					<div className="Special-Record-Item-Description">
						{`      由於在讓學生學習時需要有考試介面，很常在上機考時發現學生可能透過通訊軟體或是上網方式，尋找傳遞答案並直接複製貼上，而這件事情自然在教學端 spec 下就會要求阻止。

我做這一段的時候真的是很像上演什麼諜對諜的駭客劇情，從基本的鎖右鍵選單、鍵盤 ctrl C/V，甚至瀏覽器本身工具列也可以用滑鼠點選貼上，
類似這樣的地方都要記得阻擋，當初功能上線後，我還自己實際在教學現場旁觀了幾次，就是為了檢查學生是不是還有什麼奇舉異招是我沒想到的QQ`}
					</div>
				</div>
			</div>

			<div className="Special-Record-Container">
				<div className="Special-Record-Items">
					<div className="Special-Record-Item-Title">
						CSFC 檢定登入帳號處理
					</div>

					<div className="Special-Record-Item-Description">
						{`      因應檢定平台，登入的驗證方式只需要 email，以及 firebase 後端共用，當時要處理的問題會是學生在原有平台可能已經使用 A 帳號，需要搭配 password 進行登入，但在檢定平台登入時只需要輸入 email 即可登入，雖然都是走 firebase 後端 authentication 但又不能共用，也就是說不能因為他在原有平台已經註冊 A 帳號，此 A 帳號即可也登入檢定平台。

      但總不能因為 RD 沒有驗證方式，就說使用者在檢定平台時一定要改用 B 帳號吧，於是就出現了怎麼辨識的問題，同樣是 A 帳號但註冊資訊要能分離驗證。
						
      我後來就想到用創造虛擬帳號的方式處理，在檢定平台登入後先針對對方輸入的 A 帳號到 DB 撈取註冊資訊，如果有資料再將此 A 帳號對應的虛擬帳號做使用登入，這樣就成功將原有平台與檢定平台的 authentication 分離，但對使用者來說只需要以 A 帳號為準即可。
						`}
					</div>
				</div>

				<div className="Special-Record-Items">
					<div className="Special-Record-Item-Title">
						校園方案金鑰加密
					</div>

					<div className="Special-Record-Item-Description">
						{`      先前接過一個 task 是要幫學校採購平台使用權，那時候的 spec 是因為學校採購案都要走硬體(非軟體)，
所以他們希望能透過 Usb 的採購，Usb 裡面放我們制定的上傳憑證，只要登入平台後將 Usb 內的憑證上傳才能開通帳號權限使用，
否則就只能是免費受限版。

      由於憑證最基本的格式就是 crt 或 pem，當時第一次學到這部分相關的知識，也因為怕對方採購後直接打開檔案，可以看到內部資料去猜測憑證規則，
除了透過 uuid 生成憑證之外，我還在過程中做了加密轉換，讓實際的 key 會是不易辨識的文字，算是第一次接觸到有點與資安相關的功能。`}
					</div>
				</div>

				<div className="Special-Record-Items">
					<div className="Special-Record-Item-Title">
						課程即時繳費報名頁面
					</div>

					<div className="Special-Record-Item-Description">
						{`      每年寒暑假的前幾個月都會是課程報名旺季，也是公司財務的主要收入時間段，那時候我就想到說如果可以透過 DB 檢查，每當有人報名繳費時系統就會播報，那只要找一台電腦平時放著，大家就可以上班時即時獲得資訊感覺很好玩，於是就有做了一頁 container 會定時 reload 報名資料，一旦有人報名繳費了自然就能根據 update 的情況即時播報。

      當時做完上線後公司同仁都非常稱讚，而且每次播報時搭配匯款入帳的音效就很有感，能提振大家士氣(還有播給老闆聽的XD)。
						`}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OtherPage;
