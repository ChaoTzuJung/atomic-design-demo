import { contain } from 'react-container-helper';
import { connect } from 'react-redux';

// import { mergeUrlQueryString } from 'actions/url';

import SearchBar from './component';

const initState = () => ({
	inputValue: '',
	extensionOpened: false,
	inputHeight: 0,
	extensionHeight: 0,
	isModalOpen: false,
	inputElement: undefined,
});

const mapSetStateToProps = (
	{
		inputValue,
		extensionOpened,
		inputHeight,
		extensionHeight,
		isModalOpen,
		inputElement,
	},
	{
		// props
		className,
		placeholder,
		onInputChange = () => {},
		onSubmit = () => {},
		searchRoute,
		iconStyle,
		withInfo,
		withExtension,
		searchRecords,
		relatedKeywords,
		small,
		...others,

		// dispatch
		search,
	},
	setState,
) => ({
	// states
	inputValue,
	extensionOpened,
	inputHeight,
	extensionHeight,
	isModalOpen,

	// props
	className,
	placeholder,
	iconStyle,
	searchRoute,
	withInfo,
	withExtension,
	searchRecords,
	relatedKeywords,
	small,
	...others,

	// actions
	showExtension() {
		setState({ extensionOpened: true });
	},

	closeExtension() {
		setState({ extensionOpened: false });
	},

	handleChange(event) {
		onInputChange(event.target.value);
		setState({ inputValue: event.target.value });
	},

	onClickKeyword(keyword) {
		setState({ extensionOpened: false });
		setState({ inputValue: '' });
		search({ keyword, pathname: searchRoute });
		if (inputElement) {
			inputElement.blur();
		}
	},
	// 處裡送出時，需要對該處發的state做的管理
	submit(event) {
		search({ keyword: inputValue, pathname: searchRoute });
		setState({ extensionOpened: false });
		setState({ inputValue: '' });
		onSubmit(inputValue);

		if (inputElement) {
			inputElement.blur();
		}

		event.preventDefault();
	},

	getInputHeight(height) {
		if (inputHeight !== height) {
			setState({ inputHeight: height });
		}
	},

	getExtensionHeight(height) {
		if (extensionHeight !== height) {
			setState({ extensionHeight: height });
		}
	},

	openModal() {
		setState({ isModalOpen: true });
	},

	closeModal() {
		setState({ isModalOpen: false });
	},

	onClickOutside() {
		setState({ extensionOpened: false });
	},

	setRef(node) {
		if(node) {
			//若 inputElement 是 undefined 就把inpurt dom放入state管理
			if (!inputElement) setState({ inputElement: node });
		}
	}
});

export const SearchBarContainer = contain(initState, mapSetStateToProps)(SearchBar);

const mapStateToProps = ({
	global: { window: { media } },
}) => ({
	media,
});

const mapDispatchToProps = dispatch => ({
	search: ({ keyword, pathname }) => dispatch(mergeUrlQueryString({
		newPath: pathname,
		query: { category: 'all', keyword },
	})),
});

export default connect(null, null)(SearchBarContainer);
