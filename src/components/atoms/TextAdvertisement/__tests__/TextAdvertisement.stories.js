import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import TextAdvertisement from 'components/atoms/TextAdvertisement';

import { storiesOf } from 'util/facade';

const stories = storiesOf('Commons|atoms/[ advertisement ]/TextAdvertisement', module);

stories.addDecorator(withKnobs);

const advertisement = [
	{
		id: 0,
		title: '2018人資法令課程【第五堂：聘僱契約中不可不知的常見重要約款】，免費報名中！',
		url: 'https://plus.104.com.tw/activity/f960aef7-775d-4c30-ab37-c0e64d30c718',
	},
	{
		id: 1,
		title: ' 歡迎加入~104職涯社群「上班族法令」社團，每週選讀案例與法令知識等你來了解喔！',
		url: 'https://plus.104.com.tw/group/44825',
	},
	{
		id: 2,
		title: '歡迎加入~104職涯社群「人資同學會」社團，人資應知的大小事盡在此喔！',
		url: 'https://plus.104.com.tw/group/13545',
	},
];

stories.add('with default', () => {
	const textAdvertisement = (
		<div>
			<TextAdvertisement advertisements={advertisement} />
		</div>
	);

	return textAdvertisement;
});
