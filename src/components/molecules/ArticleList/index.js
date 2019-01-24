import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import Loading from 'components/atoms/LoadingSpinner';

import styles from './index.css';

const ArticleList = ({
	className,
	articles,
	hasMoreData,
	loading,
	onClickMore,
}) => (
	<div className={classnames(styles.articleList, className)}>
		<div className={styles.articleContainer}>
			{articles.map((article, index) => (
				<div key={article.id} className={styles.wrapper}>
					<Link className={styles.article} to={article.link}>
						<div className={styles.title} dangerouslySetInnerHTML={{ __html: article.title }} />
						{article.content && (
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{ __html: article.content }}
							/>
						)}
						{article.contents && (
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: article.contents.filter(c => c.type === 'TEXT')[0].content,
								}}
							/>
						)}
					</Link>
					{index < articles.length - 1 && <div className={styles.line} />}
				</div>
			))}
		</div>
		{hasMoreData && (
			<div
				className={styles.more}
				role="button"
				tabIndex="0"
				onClick={onClickMore}
				onKeyPress={onClickMore}
			>
				查看全部
			</div>
		)}
		{loading && <Loading className={styles.loading} />}
	</div>
);

export default ArticleList;
