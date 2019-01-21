import React from 'react';
import { withKnobs, color, number, select } from '@storybook/addon-knobs';

import SolidTriangle from 'components/atoms/SolidTriangle';

import { storiesOf } from 'util/facade';

const stories = storiesOf('Commons|atoms/[ graphics ]/SolidTriangle', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => {
	const solidTriangle = (
		<SolidTriangle
			color={color('color', '#8dc8e8')}
			width={number('width', 16)}
			height={number('height', 15)}
			direction={select(
				'direction',
				['up', 'right', 'down', 'left'],
				'up',
			)}
		/>);

	return solidTriangle;
});
