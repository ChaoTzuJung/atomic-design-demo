import { contain } from 'react-container-helper';

import Options from './component';

const defaultSelected = {
	id: -1,
	label: '',
	value: '',
};

const initState = ({ selected = defaultSelected }) => ({
	selected,
});

const mapSetStateToProps = (
	{ selected },
	{
		options,
		reverse,
		border,
		onSelect,
		optionClass,
	},
	setState,
) => ({
	selected,
	options,
	reverse,
	border,
	optionClass,
	select(option) {
		setState({ selected: option });
		onSelect(option);
	},
});

const OptionsContainer = contain(initState, mapSetStateToProps)(Options);

export default OptionsContainer;
