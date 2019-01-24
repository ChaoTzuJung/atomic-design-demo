import React from 'react';
import classnames from 'classnames';

import CircleButton from 'components/atoms/CircleButton';
import CrossIcon from 'images/icon/cross.inline.svg';

import styles from './index.css';

const ModelTemplate = ({
	className,
	children = '尚無內容', // text or image or component
	title,
	small,
	hasCloseBtn,
	onClose = () => {},
}) => (
	<div
		className={classnames(styles.modelTemplate, className, {
			[styles.small]: small,
		})}
	>
		<div className={styles.title}>{title}</div>
		<div className={styles.seperator} />
		<div className={styles.children}>{children}</div>
		{
			hasCloseBtn &&
				<div className={styles.closeBtn}>
					<CircleButton
						size={34}
						color="white"
						hoverColor="white"
						activeColor="white"
						shadow
						onClick={onClose}
					>
						<CrossIcon />
					</CircleButton>
				</div>
		}
	</div>
);

export default ModelTemplate;
