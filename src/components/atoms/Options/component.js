import React from 'react';
import classnames from 'classnames';

import Option from 'components/atoms/Option';

import styles from './index.css';

const Options = ({
	selected,
	options,
	reverse,
	border,
	select,
	optionClass,
}) => (
	<div className={styles.options}>
		{options.map(option => (
			<Option
				key={option.id}
				className={classnames(styles.option, optionClass)}
				border={border}
				reverse={reverse}
				active={option.id === selected.id}
				onSelect={() => { select(option); }}
			>
				{option.label}
			</Option>
		))}
	</div>
);

export default Options;
