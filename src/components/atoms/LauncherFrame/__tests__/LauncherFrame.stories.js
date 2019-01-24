import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import LauncherFrame from 'components/atoms/LauncherFrame';

import { storiesOf } from 'util/facade';

const stories = storiesOf('Commons|atoms/LauncherFrame', module);

stories.addDecorator(withKnobs);

stories.add('with default', () => {
	const launcherFrame = (
		<div>
			<LauncherFrame
				title={text('title', '意見表單')}
				questionareId={text('questionareId', 'yPb9V')}
				iframeInnerHeight={number('iframeHeight', 2200)}
				iframeInnerWidth={number('iframeWidth', 300)}
				iframeBoxHeight={number('iframeBoxHeight', 360)}
				iframeBoxWidth={number('iframeBoxWidth', 310)}
			/>
		</div>
	);

	return launcherFrame;
});
