import React from 'react';
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs';

import Select from 'components/molecules/Select';

import Icon from 'images/icon/search.inline.svg';

import { storiesOf, action } from 'util/facade';

const stories = storiesOf('Commons|molecules/Select', module);

stories.addDecorator(withKnobs);

const options = [
	{
		id: 0,
		label: 'label #1',
		value: 'value #1',
	},
	{
		id: 1,
		label: 'label #2',
		value: 'value #2',
	},
	{
		id: 2,
		label: 'label #3',
		value: 'value #3',
	},
	{
		id: 3,
		label: 'label #4',
		value: 'value #4',
	},
	{
		id: 4,
		label: 'label #5',
		value: 'value #5',
	},
];

stories.add('__interactive', () => {
	const select = (
		<div>
			<Select
				disabled={boolean('disabled', false)}
				className=""
				options={object('options', options)}
				placeholder={text('placeholder', '請輸入關鍵字')}
				optionConfig={object('optionConfig', {
					border: false,
					reverse: false,
					optionClass: undefined,
				})}
				selectBoxConfig={object('selectBoxConfig', {
					triangle: false,
					triangleColor: '#2D2926',
					triangleBorderWidth: 1,
					triangleSize: 10,
					animation: false,
				})}
				onSelect={action('select')}
			/>
		</div>
	);

	return select;
});

stories.add('with default', () => {
	const select = (
		<div>
			<Select
				options={options}
				onSelect={action('select')}
			/>
		</div>
	);

	return select;
});

stories.add('with reverse', () => {
	const select = (
		<div>
			<Select
				options={options}
				optionConfig={{ reverse: true }}
				onSelect={action('select')}
			/>
		</div>
	);

	return select;
});

stories.add('with placeholder icon', () => {
	const select = (
		<div>
			<Select
				options={options}
				PlaceholderIcon={Icon}
				onSelect={action('select')}
			/>
		</div>
	);

	return select;
});

stories.add('select box has animation', () => {
	const select = (
		<div>
			<Select
				options={options}
				selectBoxConfig={object('optionConfig', {
					animation: true,
				})}
				onSelect={action('select')}
			/>
		</div>
	);

	return select;
});

stories.add('each option has border', () => {
	const select = (
		<div>
			<Select
				options={options}
				optionConfig={object('optionConfig', {
					border: true,
					optionClass: undefined,
				})}
				onSelect={action('select')}
			/>
		</div>
	);

	return select;
});

stories.add('select box has arrow triangle ', () => {
	const select = (
		<div>
			<Select
				options={options}
				selectBoxConfig={object('selectBoxConfig', {
					triangle: true,
					triangleColor: '#2D2926',
					triangleBorderWidth: 2,
					triangleSize: 10,
				})}
				onSelect={action('select')}
			/>
		</div>
	);

	return select;
});
