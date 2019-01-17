import React from 'react';
import { withKnobs, color, number, select, boolean } from '@storybook/addon-knobs';

import { storiesOf, action } from 'util/facade';

import CircleButton from 'components/atoms/CircleButton';
import ShareIcon from 'images/icon/share.inline.svg';

const stories = storiesOf('Commons|atoms/[ Buttons ]/CircleButton', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => {
	const circleButton = (
		<div>
			<CircleButton
				size={number('size', 40)}
				shadow={boolean('shadow', false)}
				color={color('color', '#C0C0C0')}
				hoverColor={color('hoverColor', '#ECECEC')}
				activeColor={color('activeColor', '#ECECEC')}
				onClick={action('click')}
			>
				?
			</CircleButton>
		</div>
	);

	return circleButton;
});

stories.add('with default', () => {
	const circleButton = (
		<div>
			<CircleButton>
				<ShareIcon />
			</CircleButton>
		</div>
	);

	return circleButton;
});

stories.add('with tooltip', () => {
	const circleButton = (
		<div style={{ marginLeft: '100px', marginTop: '100px' }}>
			<CircleButton
				tooltipConfig={{
					enable: true,
					text: 'tips',
					direction: select(
						'tooltip direction',
						['top', 'left', 'right', 'bottom'],
						'left',
					),
					withTriangle: boolean('withTriangle', true),
				}}
				size={number('size', 40)}
				shadow={boolean('shadow', false)}
				color={color('color', '#C0C0C0')}
				hoverColor={color('hoverColor', '#ECECEC')}
				activeColor={color('activeColor', '#ECECEC')}
			>
				<ShareIcon />
			</CircleButton>
		</div>
	);

	return circleButton;
});

stories.add('with extendItems', () => {
	const circleButton = (
		<div style={{ marginLeft: '200px', marginTop: '200px' }}>
			<CircleButton
				extendItemsConfig={{
					enable: true,
					direction: select(
						'extension direction',
						['top', 'left', 'right', 'bottom'],
						'left',
					),
					separatorColor: color('separatorColor', 'rgba(155, 155, 155, 0.5)'),
					componentList: [
						() => (<div>1</div>),
						() => (<div>2</div>),
						() => (<div>3</div>),
						() => (<div>4</div>),
					],
					extendOnHover: boolean('extendOnHover', true),
				}}
				size={number('size', 40)}
				shadow={boolean('shadow', false)}
				color={color('color', '#C0C0C0')}
				hoverColor={color('hoverColor', '#ECECEC')}
				activeColor={color('activeColor', '#ECECEC')}
			>
				<ShareIcon />
			</CircleButton>
		</div>
	);

	return circleButton;
});

