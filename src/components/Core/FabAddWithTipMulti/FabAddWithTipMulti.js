import { useEffect, useRef } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import cx from 'classnames';

import { ReactComponent as IconPlus } from 'design/images/Icons/plus-white.svg';

import './FabAddWithTipMulti.scss';

const FabAddWithTipMulti = (props) => {
	const { tipContent, onChangeExpandStatus, onClickedOutsideFab, onClick, showExpand, itemList, isShowClose } = props;
	// onClick v.s showExpand, itemList 應該是互斥出現, 因為有兩種形式的 Fab, 單一元件 trigger Click Function 或展開 Fab

	const wrapperRef = useRef(null);
	const iconCloseRef = useRef(null);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return (() => {
			document.removeEventListener('mousedown', handleClickOutside);
		})
	}, [])

	const toolTip = (input) => {
		return <Tooltip id="tooltip">{input}</Tooltip>;
	};

	const handleClickOutside = (event) => {
		if (isShowClose) {
			if (
				(wrapperRef.current && !wrapperRef.current.contains(event.target)) ||
				(iconCloseRef.current &&
					iconCloseRef.current.contains(event.target))
			) {
				onClickedOutsideFab();
			}
		} else {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				onClickedOutsideFab();
			}
		}
	};

	const onPropsClick = () => {
		if (onClick) {
			onClick();
		}
	}

	return (
		<div onClick={onPropsClick}>
			<div
				id="ActionFab"
				className={cx('fab btn-circle-multi', `show-expand-${showExpand}`)}
				ref={wrapperRef}
				onClick={onChangeExpandStatus}>
				{showExpand ? (
					itemList.map((c) => {
						return (
							<div className="fab-item" key={c.itemTitle} onClick={c.onClick}>
								{c.itemTitle}
							</div>
						);
					})
				) : (
					<OverlayTrigger placement="top" overlay={toolTip(tipContent)}>
						<IconPlus className="fab-item-plus" />
					</OverlayTrigger>
				)}
			</div>
		</div>
	);
}

export default FabAddWithTipMulti;
