import React from 'react';
import classnames from 'classnames';
import HandleClickOutsideHOC from 'components/atoms/HandleClickOutsideHOC';

import styles from './index.css';

const setColor = ({
	hover,
	active,
	color,
	hoverColor,
	activeColor,
}) => {
	if (hover) {
		return hoverColor;
	} else if (active) {
		return activeColor;
	}

	return color;
};

const setTooltipPosition = (tooltipConfig, size) => {
	/* tooltip with triangle */
	if (tooltipConfig.withTriangle) {
		if (tooltipConfig.direction === 'top') {
			return `0 0 10px -${tooltipConfig.width / 2}px`;
		} else if (tooltipConfig.direction === 'left') {
			return `${(size / 2) - 15}px 10px 0 0`;
		} else if (tooltipConfig.direction === 'right') {
			return `${(size / 2) - 18}px 0 0 10px`;
		}
		// direction === 'buttom'
		return `10px 0 0 -${tooltipConfig.width / 2}px`;
	}

	/* tooltip without triangle */
	if (tooltipConfig.direction === 'top') {
		return `0 0 5px -${tooltipConfig.width / 2}px`;
	} else if (tooltipConfig.direction === 'left') {
		return `${(size / 2) - 18}px 5px 0 0`;
	} else if (tooltipConfig.direction === 'right') {
		return `${(size / 2) - 18}px 0 0 5px`;
	}
	// direction === 'buttom'
	return `5px 0 0 -${tooltipConfig.width / 2}px`;
};

const setExtendWrapperShape = (extendItemsConfig, size, extendContentInfo) => {
	const extendContentWidth = extendContentInfo
		? extendContentInfo.width
		: size * (extendItemsConfig.componentList.length + 1);

	const extendContentHeight = extendContentInfo
		? extendContentInfo.height
		: size * (extendItemsConfig.componentList.length + 1);

	if (extendItemsConfig.direction === 'top') {
		return {
			width: size,
			height: extendContentHeight,
			padding: `${size / 5}px 0 ${size}px 0`,
		};
	} else if (extendItemsConfig.direction === 'left') {
		return {
			width: extendContentWidth,
			height: size,
			padding: `0 ${size}px 0 ${size / 5}px`,
		};
	} else if (extendItemsConfig.direction === 'right') {
		return {
			width: extendContentWidth,
			height: size,
			padding: `0 ${size / 5}px 0 ${size}px`,
		};
	}
	// direction === 'bottom'
	return {
		width: size,
		height: extendContentHeight,
		padding: `${size}px 0 ${size / 5}px 0`,
	};
};

const CircleButton = ({
	// states
	hover,
	active,
	extendItemsActiveKey,
	extendContentInfo,

	// props
	children,
	buttonStyle,
	size = 40,
	shadow = false,
	color = '#C0C0C0',
	hoverColor = '#ECECEC',
	activeColor = '#ECECEC',
	tooltipConfig,
	extendItemsConfig,

	// actions
	onHover,
	onLeave,
	onClick,
	closeExtension,
	getExtendContentInfo,
	activateExtendItem,
}) => (
	<div className={classnames(styles.circleButton, styles.wrapper)}>
		<div
			className={classnames(styles.button, buttonStyle, {
				[styles.hover]: hover,
				[styles.active]: active,
				[styles.shadow]: shadow && !extendItemsConfig.enable,
			})}
			style={{
				background: setColor({
					hover,
					active,
					color,
					hoverColor,
					activeColor,
				}),
				width: `${size}px`,
				height: `${size}px`,
				borderRadius: `${size / 2}px`,
			}}
			onMouseOver={onHover}
			onFocus={onHover}
			onMouseLeave={onLeave}
			onBlur={onLeave}
			role="button"
			tabIndex="0"
			onClick={onClick}
			onKeyPress={onClick}
		>
			{children}
		</div>
		{tooltipConfig.enable &&
			(hover && !active) && (
			<div
				className={classnames(
					styles.tooltip,
					tooltipConfig.className,
					styles[tooltipConfig.direction],
					{
						[styles.withTriangle]: tooltipConfig.withTriangle,
					},
				)}
				style={{
					width: `${tooltipConfig.width}px`,
					margin: setTooltipPosition(tooltipConfig, size),
				}}
			>
				{tooltipConfig.text}
				{tooltipConfig.withTriangle && (
					<div className={classnames(styles.triangle, styles[tooltipConfig.direction])} />
				)}
			</div>
		)}
		{tooltipConfig.enable &&
			tooltipConfig.activeComponent &&
			active && (
			<div
				className={classnames(
					styles.tooltipActiveComponent,
					styles[tooltipConfig.direction],
					tooltipConfig.activeComponentStyle,
				)}
			>
				<tooltipConfig.activeComponent />
			</div>
		)}
		{extendItemsConfig.enable && (
			<div
				className={classnames(styles.extension, styles[extendItemsConfig.direction], {
					[styles.active]: hover || active,
					[styles.shadow]: shadow,
				})}
				style={{
					width:
						hover || active
							? `${setExtendWrapperShape(extendItemsConfig, size, extendContentInfo).width}px`
							: `${size}px`,
					height:
						hover || active
							? `${setExtendWrapperShape(extendItemsConfig, size, extendContentInfo).height}px`
							: `${size}px`,
					borderRadius: `${size / 2}px`,
					transition: `
							width
							${0.002 * setExtendWrapperShape(extendItemsConfig, size, extendContentInfo).width}s
							ease-in-out,
							height
							${0.002 * setExtendWrapperShape(extendItemsConfig, size, extendContentInfo).height}s
							ease-in-out
						`,
				}}
				onMouseOver={onHover}
				onFocus={onHover}
				onMouseLeave={onLeave}
				onBlur={onLeave}
			>
				<div
					className={styles.itemContainer}
					style={{
						background: setColor({
							hover: extendItemsConfig.extendOnHover && hover,
							active,
							color,
							hoverColor,
							activeColor,
						}),
						// width: setExtendWrapperShape(extendItemsConfig, size, extendContentInfo).width,
						height: `${setExtendWrapperShape(extendItemsConfig, size, extendContentInfo).height}px`,
						borderRadius: `${size / 2}px`,
						padding: setExtendWrapperShape(extendItemsConfig, size, extendContentInfo).padding,
					}}
					ref={node => {
						if (node) {
							getExtendContentInfo(node.getBoundingClientRect());
						}
					}}
					role="button"
					tabIndex="0"
					onClick={closeExtension}
					onKeyPress={closeExtension}
				>
					<div className={styles.items}>
						{extendItemsConfig.componentList.map(Item => (
							<div
								key={Item.key}
								role="button"
								tabIndex="0"
								onClick={() => {
									if (extendItemsConfig.enableActiveComponent) {
										activateExtendItem(Item.key);
									}
								}}
								onKeyPress={() => {
									if (extendItemsConfig.enableActiveComponent) {
										activateExtendItem(Item.key);
									}
								}}
							>
								<Item.component key={Item.key} />
							</div>
						))}
					</div>
					<div
						className={classnames(styles.separator, styles.active)}
						style={{
							background: extendItemsConfig.separatorColor,
							marginLeft: extendItemsConfig.direction === 'left' && `${size * 0.1}px`,
							marginTop: extendItemsConfig.direction === 'top' && `${size * 0.1}px`,
							marginButtom: extendItemsConfig.direction === 'buttom' && `${size * 0.1}px`,
							marginRight: extendItemsConfig.direction === 'right' && `${size * 0.1}px`,
						}}
					/>
				</div>
			</div>
		)}
		{extendItemsConfig.enable &&
			extendItemsConfig.enableActiveComponent &&
			extendItemsConfig.activeComponents[extendItemsActiveKey] &&
			extendItemsConfig.activeComponents[extendItemsActiveKey]()}
	</div>
);

const CircleButtonWrapper = HandleClickOutsideHOC(CircleButton);

export default CircleButtonWrapper;
