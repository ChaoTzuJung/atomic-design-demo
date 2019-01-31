import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { storiesOf } from 'util/facade';

import RelatedCourseListItem from 'components/atoms/RelatedCourseListItem';

const stories = storiesOf('Commons|atoms/RelatedCourseListItem', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => (
	<RelatedCourseListItem
		singleEllipsis={boolean('Truncating Single Line Text', true)}
		title={text('title', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cupiditate minus excepturi suscipit voluptates praesentium mollitia quos officiis cum voluptate facere accusantium, dolorem qui ad, ratione itaque odit, ab laudantium?')}
		url={text('url', 'https://fakeimg.pl/250x100/')}
	/>
));

stories.add('with mutiline', () => (
	<RelatedCourseListItem
		mutilineEllipsis={boolean('Truncating Multiple Line Text', true)}
		title={text('title', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cupiditate minus excepturi suscipit voluptates praesentium mollitia quos officiis cum voluptate facere accusantium, dolorem qui ad, ratione itaque odit, ab laudantium Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cupiditate minus excepturi suscipit voluptates praesentium mollitia quos officiis cum voluptate facere accusantium, dolorem qui ad, ratione itaque odit, ab laudantium?')}
		url={text('url', 'https://fakeimg.pl/250x100/')}
	/>
));
