import React from 'react';
import { withKnobs, object, text } from '@storybook/addon-knobs';

import { storiesOf } from 'util/facade';

import SideBarArticleLists from 'components/atoms/SideBarArticleLists';
import SideBar from 'components/molecules/SideBar';

const stories = storiesOf('Commons|molecules/SideBar', module);

stories.addDecorator(withKnobs);

const articleList = [
	{
		id: 0,
		title: '雇主品牌建立八步法',
		content: '在大數據與人工智能的時代，企業面臨激烈的人才爭奪戰，尤其是業務行銷及ST...',
	},
	{
		id: 1,
		title: '因應企業營運策略的人才訓練發展',
		content: '在大數據與人工智能的時代，企業面臨激烈的人才爭奪戰，尤其是業務行銷及ST...',
	},
];

const courseList = [
	{
		id: 0,
		title: '2018從實務觀點看企業如何因應...',
		url: 'https://fakeimg.pl/250x100/',
	},
	{
		id: 1,
		title: '2017從一例一休談勞基法最新修...',
		url: 'https://fakeimg.pl/250x100/',
	},
];

stories.add('__interactive', () => (
	<SideBar>
		<SideBarArticleLists
			title={text('title', '相關文章')}
			articleData={object('articleList', articleList)}
		/>
		<hr />
		<SideBarArticleLists
			title={text('title2', '相關課程')}
			courseData={object('courseList', courseList)}
		/>
	</SideBar>
));
