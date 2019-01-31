import React from 'react';
import classnames from 'classnames';
import RelatedArticleListItem from 'components/atoms/RelatedArticleListItem';
import RelatedCourseListItem from 'components/atoms/RelatedCourseListItem';
import styles from './index.css';

const SideBarArticleLists = ({ className, title, articleData, courseData }) => (
	<div className={classnames(styles.sidebarArticleLists, className)}>
		<div className={styles.sidebarSectionTitle}>{title}</div>
		{articleData &&
			articleData.map(listItem => (
				<RelatedArticleListItem
					mutilineEllipsis
					key={listItem.id}
					title={listItem.title}
					content={listItem.content}
				/>
			))
		}

		{courseData &&
			courseData.map(listImage => (
				<RelatedCourseListItem
					mutilineEllipsis
					key={listImage.id}
					url={listImage.url}
					title={listImage.title}
				/>
			))
		}
	</div>
);

export default SideBarArticleLists;
