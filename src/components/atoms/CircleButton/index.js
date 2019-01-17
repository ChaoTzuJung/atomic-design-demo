import { isBrowser } from 'react-device-detect';
import { contain } from 'react-container-helper';

import CircleButton from './component';

const initState = () => ({
	hover: false,
	disableHover: false,
	active: false,
	extendItemsActiveKey: undefined,
	extendContentInfo: undefined,
});

const mapSetStateToProps = (
	// 內部init的state
	{
		hover,
		active,
		extendItemsActiveKey,
		extendContentInfo,
		disableHover,
	},
	// 外部進來的props
	{
		children,
		onClick,
		size,
		shadow,
		buttonStyle,
		color,
		hoverColor,
		activeColor,
		tooltipConfig,
		extendItemsConfig,
	},
	// 必須設定的參數
	setState,
) => ({
	// states
	hover,
	active,
	extendItemsActiveKey,
	extendContentInfo,
	disableHover,

	// props
	children,
	size,
	shadow,
	buttonStyle,
	color,
	hoverColor,
	activeColor,
	tooltipConfig: {
		enable: false,
		direction: 'left',
		className: undefined,
		text: '',
		width: 100,
		withTriangle: true,
		activeComponent: undefined,
		activeComponentStyle: undefined,
		...tooltipConfig,
	},
	extendItemsConfig: {
		enable: false,
		direction: 'left',

		componentList: [],
		/*
			component format:
			{
				key: '0', for mapping active component
				component: () => (<div />)
			}
		*/

		enableActiveComponent: false,
		activeComponents: {},
		/*
			activeComponents format:
			{
				key1: component1,
				key2: component2,
			}
		*/

		separatorColor: 'rgba(155, 155, 155, 0.5)',
		...extendItemsConfig,
	},

	// actions
	onHover() {
		if (isBrowser && !disableHover) {
			setState({ hover: true });
		}
	},
	onLeave() {
		if (isBrowser) {
			setState({ hover: false });
		}
	},
	onClick() {
		setState({ active: !active });
		if (onClick) {
			onClick(!active);
		}
	},
	closeExtension() {
		setState({ active: false });
	},
	onClickOutside() {
		setState({ active: false });
		setState({ disableHover: false });
		setState({ extendItemsActiveKey: undefined });
	},
	getExtendContentInfo(contentInfo) {
		if (!extendContentInfo) {
			setState({ extendContentInfo: contentInfo });
		}
	},
	activateExtendItem(key) {
		setState({ disableHover: true });
		setState({ extendItemsActiveKey: key });
	},
});

const CircleButtonContainer = contain(initState, mapSetStateToProps)(CircleButton);

export default CircleButtonContainer;
