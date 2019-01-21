import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const LoadingSpinner = ({ className, color = '#FF7800' }) => (
	<div className={classnames(styles.spinner, className)}>
		<svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
			<circle id="loading-inner" cx="75" cy="75" r="60" stroke={color} />
		</svg>
	</div>
);

export default LoadingSpinner;
