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
				/*
					select() 做兩件事：
					1. 透過setState把你點的option給selected這個state。
					2. 當option本身被onClick，'onSelect'被執行並當成props傳給OptionsContainer，
					當optionComponent執行'onSelect'並帶一個option參數，就可以知道Options中，哪個option被click
				*/
			>
				{option.label}
			</Option>
		))}
	</div>
);

export default Options;
