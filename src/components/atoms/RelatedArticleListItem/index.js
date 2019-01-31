import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const relatedArticleListItem = ({
	className, title, content, singleEllipsis, mutilineEllipsis,
}) => (
	<div className={classnames(styles.sidebarArticleListItem, className)}>
		<h4>{title}</h4>
		<p className={classnames({
			[styles.singleEllipsis]: singleEllipsis,
			[styles.mutilineEllipsis]: mutilineEllipsis,
		})}
		>
			{content}
		</p>
	</div>
);

export default relatedArticleListItem;
