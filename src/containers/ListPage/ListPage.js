import { useState, useEffect } from 'react';
import { db } from 'firebaseImport';
import { collection, getDocs, doc, setDoc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';

import { IconSearchBar, FabAddWithTipMulti, ProgressDialog } from 'components';

import GoodManageModal from './GoodManageModal/GoodManageModal';
import GoodManageRectangle from './GoodManageRectangle/GoodManageRectangle';

import { ReactComponent as ArrowUp } from 'design/images/Icons/arrowUp.svg';
import { ReactComponent as ArrowDown } from 'design/images/Icons/arrowDown.svg';

import './ListPage.scss';

const ListPage = () => {
	const [goodsList, setGoodsList] = useState([]);
	const [filterGoodsList, setFilterGoodsList] = useState(goodsList);
	const [editGood, setEditGood] = useState(null);

	const [searchTerm, setSearchTerm] = useState('');

	const [sort, setSort] = useState('displayName');
	const [sortDir, setSortDir] = useState(1);

	const [isShowAddGoodModal, setIsShowAddGoodModal] = useState(false);
	const [isShowExpandFab, setIsShowExpandFab] = useState(false);

	const [isShowProgressDialog, setIsShowProgressDialog] = useState(false);

	const collectionName = 'goods';

	useEffect(() => {
		initGoodsList();
	}, []);

	useEffect(() => {
		fetchGoodsList();
	}, [goodsList, searchTerm, sort, sortDir]);

	const initGoodsList = async () => {
		const fetchDataFromDb = async () => {
			const dataTemplate = [];
			const querySnapshot = await getDocs(collection(db, collectionName));

			querySnapshot.forEach((doc) => {
				const data = doc.data();
				dataTemplate.push(data);
			});

			return dataTemplate;
		};

		setIsShowProgressDialog(true);
		const fetchDataFromDB = await fetchDataFromDb();
		setGoodsList(fetchDataFromDB);
		setFilterGoodsList(fetchDataFromDB);

		setIsShowProgressDialog(false);
	};

	const fetchGoodsList = async () => {
		const filterGoods = goodsList.filter(
			(good) => good.displayName.toLowerCase().includes(searchTerm.toLowerCase()) || good.location.toLowerCase().includes(searchTerm.toLowerCase())
		);
		filterGoods.sort((a, b) => (a[sort] > b[sort] ? sortDir : sortDir * -1));
		setFilterGoodsList(filterGoods);
	};

	const onRemoveGood = async (id) => {
		setIsShowProgressDialog(true);

		await deleteDoc(doc(db, collectionName, id));
		setGoodsList(goodsList.filter((good) => good.id !== id));
		setIsShowProgressDialog(false);
	};

	//Icon Search Bar
	const onSearchInput = (e) => {
		setSearchTerm(e.target.value);
	};

	const clearSearchTerm = () => {
		setSearchTerm('');
	};

	//Expand Fab
	const onChangeExpandStatus = () => {
		setIsShowExpandFab((prevState) => !prevState);
	};

	const onClickedOutsideFab = () => {
		setIsShowExpandFab(false);
	};

	//Good Modal
	const toggleAddGoodModal = (type = '', data = {}) => {
		if (type === 'edit') {
			setEditGood(data);
		}

		setIsShowAddGoodModal((prevState) => !prevState);
	};

	const onConfirmModalAction = async (mode, good) => {
		if (mode === 'edit') {
			const goodId = good.id;
			const goodRef = doc(db, collectionName, goodId);
			const data = { ...good, update: serverTimestamp() };

			await updateDoc(goodRef, data);
			setGoodsList(goodsList.filter((good) => good.id !== goodId).concat(data));
		} else {
			const newGoodRef = doc(collection(db, collectionName));
			const data = { ...good, id: newGoodRef.id, update: serverTimestamp() };

			await setDoc(newGoodRef, data);
			setGoodsList([...goodsList, data]);
		}

		setIsShowAddGoodModal((prevState) => !prevState);
		setEditGood(null);
	};

	const onCancelModalAction = () => {
		setIsShowAddGoodModal((prevState) => !prevState);
		setEditGood(null);
	};

	//Sort Function
	const setSortOption = (sortOption) => {
		setSort(sortOption);
		setSortDir((prevState) => prevState * -1);
	};

	//Render Function
	const renderSortHeader = () => {
		const sortByOption = (sortOption, sortText) => {
			return (
				<div className={`sort-option-cont sort-by-${sortOption}`} onClick={() => setSortOption(sortOption)}>
					<span className="sort-text">{sortText}</span>
					{sort === sortOption ? (
						sortDir === 1 ? (
							<ArrowDown className="sort-icon" />
						) : (
							<ArrowUp className="sort-icon" />
						)
					) : null}
				</div>
			);
		};

		return (
			<div className="sort-header">
				{sortByOption('displayName', '名稱')}
				{sortByOption('price', '價格')}
				{sortByOption('amount', '數量')}
				{sortByOption('location', '寄送地點')}
			</div>
		);
	};

	const renderGoodListContainer = () => {
		return (
			<div className="ListPage-ListContent">
				{renderSortHeader()}

				{filterGoodsList.map((good, i) => {
					return (
						<GoodManageRectangle
							key={`${good.displayName}-${i}`}
							good={good}
							listIndexNum={i + 1}
							onEditGood={(good) => toggleAddGoodModal('edit', good)}
							onRemoveGood={onRemoveGood}
						/>
					);
				})}
			</div>
		);
	};

	const renderHeaderContent = () => {
		return (
			<div className="ListPage-Header">
				<h4 className="ListPage-Header-Title">商品管理清單</h4>

				<IconSearchBar
					className="ListPage-SearchBox"
					onSearchInput={onSearchInput}
					clearSearchTerm={clearSearchTerm}
					searchTerm={searchTerm}
					placeholder="請輸入商品名稱關鍵字"
				/>
			</div>
		);
	};
	return (
		<div className="ListPage">
			{renderHeaderContent()}
			{renderGoodListContainer()}

			<FabAddWithTipMulti
				tipContent="新增商品"
				onChangeExpandStatus={onChangeExpandStatus}
				onClickedOutsideFab={onClickedOutsideFab}
				showExpand={isShowExpandFab}
				itemList={[
					{
						itemTitle: '新增商品',
						onClick: toggleAddGoodModal,
					},
				]}
			/>

			{isShowAddGoodModal && (
				<GoodManageModal
					good={editGood}
					isShowAddGoodModal={isShowAddGoodModal}
					onConfirm={onConfirmModalAction}
					onCancelButtonClick={onCancelModalAction}
				/>
			)}

			<ProgressDialog show={isShowProgressDialog} />
		</div>
	);
};

export default ListPage;
