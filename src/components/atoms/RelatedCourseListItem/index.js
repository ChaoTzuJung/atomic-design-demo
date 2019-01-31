import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const RelatedCourseListItem = ({ className, title, url, singleEllipsis, mutilineEllipsis }) => (
	<div className={classnames(styles.realtedCourseListItem, className)}>
		<div
			className={styles.image}
			style={{ backgroundImage: `url(${url})` }}
		/>
		<div className={classnames(styles.imageDesc, {
			[styles.singleEllipsis]: singleEllipsis,
			[styles.mutilineEllipsis]: mutilineEllipsis,
		})}
		>
			{title}
		</div>
	</div>
);


export default RelatedCourseListItem;
