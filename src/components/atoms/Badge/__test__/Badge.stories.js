import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';

import Badge from 'components/atoms/Badge';

const stories = storiesOf('Commons|atoms/Badge', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => (
	<Badge
		colorType={select(
			'colorType',
			[
				'secondary-normal',
				'light-normal',
				'green-soft',
				'red-soft',
				'yellow-soft',
				'blue-soft',
				'gray-soft',
				'cyan-soft',
			],
			'secondary-normal',
		)}
		text={text('文字', 'label')}
		outline={boolean('isOutline')}
	/>
));
