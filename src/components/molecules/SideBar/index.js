import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const Sidebar = ({ className, children }) => (
	<div className={classnames(styles.sidebar, className)}>
		{children}
	</div>
);

export default Sidebar;
