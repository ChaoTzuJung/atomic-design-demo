import React from 'react';
import classnames from 'classnames';
import Modal from 'react-responsive-modal';

import HandleClickOutsideHOC from 'components/atoms/HandleClickOutsideHOC';
import SearchIcon from 'images/icons/search.inline.svg';
import CircleButton from 'components/atoms/CircleButton';
import ModalTemplate from 'components/molecules/ModalTemplate';

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
	setRef // ref function

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
		<Modal
			open={isModalOpen}
			onClose={closeModal}
			little={media === 'desktop' || media === 'tablet'}
			showCloseIcon={false}
			classNames={{
				modal: styles.modal,
				overlay: styles.overlay,
			}}
		>
			<ModalTemplate title="搜尋功能介紹" hasCloseBtn onClose={closeModal}>
				<section>
					<div className={styles.label}>關鍵字</div>
					<div className={styles.content}>
						您可以輸入任何關鍵字，中間用空白鍵隔開，例如『加班費 延長工時 工資』。
					</div>
				</section>
				<section>
					<div className={styles.label}>布林邏輯</div>
					<div className={styles.content}>
						<div className={styles.item}>
							<span className={styles.decoration} />
							<span className={styles.text}>
								{'用『空白鍵』或『&』連接關鍵字都代表and。例如：『加班費' +
									' 延長工時 工資 假日』或是『加班費&延長工時&工資&假' +
									'日』，都是代表搜尋的文件同時包含『加班費 延長工時 工' +
									'資 假日』這四個關鍵字。'}
							</span>
						</div>
						<div className={styles.item}>
							<span className={styles.decoration} />
							<span className={styles.text}>
								{'用『+』連接關鍵字代表or。例如『出差+工時』，代表搜' +
									'尋的文件包含『出差』或『工時』其中一個關鍵字。'}
							</span>
						</div>
						<div className={styles.item}>
							<span className={styles.decoration} />
							<span className={styles.text}>
								{'用『-』連接在關鍵字前方，特別注意『-』之前必須要' +
									'用空白鍵隔開。例如『資遣 -停業』，代表搜尋的文' +
									'件包含『資遣』但不包含『停業』。'}
							</span>
						</div>
					</div>
				</section>
			</ModalTemplate>

			{/*
				<div className={styles.modal}>
							<div
								className={styles.close}
								role="button"
								tabIndex="0"
								onClick={closeModal}
								onKeyPress={closeModal}
							>
								<Hamburger open color="#979797" />
							</div>
							<div className={styles.title}>搜尋功能介紹</div>
							<section>
								<div className={styles.label}>關鍵字</div>
								<div className={styles.content}>
									您可以輸入任何關鍵字，中間用空白鍵隔開，例如『加班費 延長工時 工資』。
								</div>
							</section>
							<section>
								<div className={styles.label}>布林邏輯</div>
								<div className={styles.content}>
									<div className={styles.item}>
										<span className={styles.decoration} />
										<span className={styles.text}>
											{
												'用『空白鍵』或『&』連接關鍵字都代表and。例如：『加班費' +
												' 延長工時 工資 假日』或是『加班費&延長工時&工資&假' +
												'日』，都是代表搜尋的文件同時包含『加班費 延長工時 工' +
												'資 假日』這四個關鍵字。'
											}
										</span>
									</div>
									<div className={styles.item}>
										<span className={styles.decoration} />
										<span className={styles.text}>
											{
												'用『+』連接關鍵字代表or。例如『出差+工時』，代表搜' +
												'尋的文件包含『出差』或『工時』其中一個關鍵字。'
											}
										</span>
									</div>
									<div className={styles.item}>
										<span className={styles.decoration} />
										<span className={styles.text}>
											{
												'用『-』連接在關鍵字前方，特別注意『-』之前必須要' +
												'用空白鍵隔開。例如『資遣 -停業』，代表搜尋的文' +
												'件包含『資遣』但不包含『停業』。'
											}
										</span>
									</div>
								</div>
							</section>
						</div>
				*/}
		</Modal>
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
