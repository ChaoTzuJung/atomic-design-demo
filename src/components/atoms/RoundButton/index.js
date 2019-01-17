import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const RoundButton = ({ className, children, onClick = () => {} }) => (
	<div
		className={classnames(styles.roundButton, className)}
		role="button"
		tabIndex="0"
		onClick={onClick}
		onKeyPress={onClick}
	>
		{children}
	</div>
);

export default RoundButton;
