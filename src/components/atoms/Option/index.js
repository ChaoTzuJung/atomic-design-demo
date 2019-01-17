import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const Option = ({
	className,
	children,
	active,
	reverse,
	border,
	onSelect,
}) => (
	<div
		className={classnames(
			styles.option,
			className,
			{
				[styles.reverse]: reverse,
				[styles.border]: border,
				[styles.active]: active,
			},
		)}
		role="button"
		tabIndex="0"
		onClick={onSelect}
		onKeyPress={onSelect}
	>
		{children}
	</div>
);

export default Option;
