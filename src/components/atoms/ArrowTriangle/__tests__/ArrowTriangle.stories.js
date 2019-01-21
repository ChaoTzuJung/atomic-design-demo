import React from 'react';
import { withKnobs, color, number, select } from '@storybook/addon-knobs';

import ArrowTriangle from 'components/atoms/ArrowTriangle';

import { storiesOf } from 'util/facade';

const stories = storiesOf('Commons|atoms/[ Graphics ]/ArrowTriangle', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withKnobs);

stories.add('__interactive', () => {
	const arrow = (
		<div>
			<ArrowTriangle
				size={number('size', 10)}
				borderWidth={number('borderWidth', 2)}
				direction={select(
					'direction',
					['up', 'right', 'down', 'left'],
					'right',
				)}
				color={color('color', '#2D2926')}
			/>
		</div>
	);
	return arrow;
});

stories.add('with default', () => {
	const arrow = <ArrowTriangle />;

	return arrow;
});

