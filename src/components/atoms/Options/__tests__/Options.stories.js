import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';

import Options from 'components/atoms/Options';

import { storiesOf } from 'util/facade';

const stories = storiesOf('Commons|atoms/Options', module);

const options = [
	{
		id: 0,
		label: 'label',
		value: 'value',
	},
	{
		id: 1,
		label: 'label',
		value: 'value',
	},
	{
		id: 2,
		label: 'label',
		value: 'value',
	},
	{
		id: 3,
		label: 'label',
		value: 'value',
	},
	{
		id: 4,
		label: 'label',
		value: 'value',
	},
];

stories.addDecorator(withKnobs);

stories.add('__interactive', () => {
	const noteCard = (
		<div>
			<Options options={object('options', options)} onSelect={() => {}} />
		</div>
	);

	return noteCard;
});

stories.add('with default', () => {
	const noteCard = (
		<div>
			<Options options={options} onSelect={() => {}} />
		</div>
	);

	return noteCard;
});

stories.add('with reverse', () => {
	const noteCard = (
		<div>
			<Options options={options} reverse onSelect={() => {}} />
		</div>
	);

	return noteCard;
});

stories.add('with border', () => {
	const noteCard = (
		<div>
			<Options options={options} border onSelect={() => {}} />
		</div>
	);

	return noteCard;
});
