import React from 'react';
import classnames from 'classnames';
// import Modal from 'react-responsive-modal';

import HandleClickOutsideHOC from 'components/atoms/HandleClickOutsideHOC';
import SearchIcon from 'images/icon/search.inline.svg';
import CircleButton from 'components/atoms/CircleButton';
// import ModalTemplate from 'components/molecules/ModalTemplate';

import styles from './index.css';

const SearchBar = ({
	// props
	className,
	placeholder = '請輸入關鍵字',
	submit, // submit function
	iconStyle,
	withInfo,
	withExtension,
	relatedKeywords,
	searchRecords = [],
	small,
	setRef, // ref function

	// redux data
	media,

	// states
	inputValue,
	extensionOpened,
	inputHeight,
	extensionHeight,
	isModalOpen,

	// actions
	handleChange,
	showExtension,
	getInputHeight,
	getExtensionHeight,
	onClickKeyword,
	openModal,
	closeModal,
}) => (
	<form
		className={classnames(styles.searchBar, className, {
			[styles.small]: small,
		})}
		action="" // for keyboard search button on mobile safari #37
		onSubmit={submit}
	>
		<div
			className={classnames(styles.input, {
				[styles.extensionOpened]: withExtension && extensionOpened,
			})}
			ref={node => {
				if (node) {
					getInputHeight(node.getBoundingClientRect().height);
				}
			}}
		>
			<div className={classnames(styles.searchIcon, iconStyle)}>
				<SearchIcon viewBox="0 0 20 20" width="100%" height="100%" />
			</div>
			<input
				type="search"
				role="searchbox"
				tabIndex="0"
				ref={setRef}
				placeholder={placeholder}
				value={inputValue}
				onChange={handleChange}
				onClick={showExtension}
				onKeyPress={showExtension}
			/>
			{withInfo && (
				<div
					className={styles.infoButton}
					role="button"
					tabIndex="0"
					onClick={openModal}
					onKeyPress={openModal}
				>
					<CircleButton
						size={small ? 17 : 20}
						buttonStyle={styles.info}
						color="transparent"
						hoverColor="transparent"
						activeColor="transparent"
						tooltipConfig={{
							enable: true,
							direction: 'right',
							withTriangle: true,
							text: '使用說明',
						}}
					>
						<div className={styles.text}>i</div>
					</CircleButton>
				</div>
			)}
		</div>
		{/* Model */}
		{withExtension &&
			((relatedKeywords && relatedKeywords.length > 0) ||
				(searchRecords && searchRecords.length > 0)) && (
				<div
					className={classnames(styles.extension, {
						[styles.active]: extensionOpened,
					})}
					style={{
						height: extensionOpened
							? `calc(${extensionHeight}px + ${inputHeight}px)`
							: `${inputHeight}px`,
					}}
				>
					<div
						className={styles.content}
						ref={node => {
							if (node) {
								getExtensionHeight(node.getBoundingClientRect().height);
							}
						}}
						style={{
							marginTop: `${inputHeight}px`,
						}}
					>
						{relatedKeywords &&
							relatedKeywords.length > 0 && (
								<div
									className={classnames(styles.relatedKeyword, {
										[styles.marginBottom]: searchRecords.length > 0,
									})}
								>
									{relatedKeywords.map(keyword => (
										<div
											key={keyword.keyword}
											role="button"
											tabIndex="0"
											onClick={() => onClickKeyword(keyword.keyword)}
											onKeyPress={() => onClickKeyword(keyword.keyword)}
										>
											{keyword.keyword}
										</div>
									))}
								</div>
							)}
						{searchRecords &&
							searchRecords.length > 0 && (
								<div className={styles.searchRecord}>
									<div className={styles.label}>搜尋紀錄</div>
									<div className={styles.content}>
										{searchRecords.map(record => (
											<div
												key={record.keyword}
												role="button"
												tabIndex="0"
												onClick={() => {
													onClickKeyword(record.keyword);
												}}
												onKeyPress={() => {
													onClickKeyword(record.keyword);
												}}
											>
												{record.keyword}
											</div>
										))}
									</div>
								</div>
							)}
					</div>
				</div>
			)}
	</form>
);

const HandleClickOutside = HandleClickOutsideHOC(SearchBar);

export default HandleClickOutside;
