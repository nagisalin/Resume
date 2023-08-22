import { useState } from 'react';
import { ActionModal, Input } from 'components';

import './GoodManageModal.scss';

const GoodManageModal = (props) => {
	const { good, isShowAddGoodModal, onConfirm, onCancelButtonClick } = props;

	const [displayName, setDisplayName] = useState(good ? good.displayName : '');
	const [price, setPrice] = useState(good ? good.price : 0);
	const [amount, setAmount] = useState(good ? good.amount : 0);
	const [location, setLocation] = useState(good ? good.location : '');

	const [alert, setAlert] = useState('');

	const onDisplayNameInput = (e) => {
		setDisplayName(e.target.value);
	};

	const onPriceInput = (e) => {
		setPrice(e.target.value);
	};

	const onAmountInput = (e) => {
		setAmount(e.target.value);
	};

	const onLocationInput = (e) => {
		setLocation(e.target.value);
	};

	const saveGood = () => {
		if (displayName.trim() === '' || price === '' || amount === '') {
			setAlert('請輸入必填項目');
			return;
		}

		const data = {
			displayName,
			price: parseInt(price, 10),
			amount: parseInt(amount, 10),
			location,
		};

		if (good) {
			//edit 情況下要先拿到 id 才知道 db 要找誰
			data.id = good.id;
		}

		if (onConfirm) {
			onConfirm(good ? 'edit' : 'add', data);
		}
	};

	return (
		<ActionModal
			isOpen={isShowAddGoodModal}
			isShowClose={false}
			onConfirm={saveGood}
			onCancelButtonClick={onCancelButtonClick}
			modalTitle={good ? '更新商品' : '新增商品'}
			confirmButtonText={good ? '更新' : '新增'}
			className="Good-Manage-Modal"
			shouldCloseOnOverlayClick={false}
			alertText={alert}>
			<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
				<div className="edit-input-block displayName">
					<div className="edit-input-title">
						<span style={{ color: 'red' }}>*</span>商品名
					</div>
					<div>
						<Input className="edit-input-value" value={displayName} onChange={onDisplayNameInput} />
					</div>
				</div>

				<div className="edit-input-block price">
					<div className="edit-input-title">
						<span style={{ color: 'red' }}>*</span>價格
					</div>
					<div>
						<Input type="number" className="edit-input-value" value={price} min={0} onChange={onPriceInput} />
					</div>
				</div>

				<div className="edit-input-block amount">
					<div className="edit-input-title">
						<span style={{ color: 'red' }}>*</span>數量
					</div>
					<div>
						<Input type="number" className="edit-input-value" value={amount} min={0} onChange={onAmountInput} />
					</div>
				</div>

				<div className="edit-input-block location">
					<div className="edit-input-title">寄送地點</div>
					<div>
						<Input className="edit-input-value" value={location} onChange={onLocationInput} />
					</div>
				</div>
			</div>
		</ActionModal>
	);
};

export default GoodManageModal;
