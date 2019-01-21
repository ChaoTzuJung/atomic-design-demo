import React from 'react';
import classnames from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';

import Options from 'components/atoms/Options';
import ArrowTriangle from 'components/atoms/ArrowTriangle';

import styles from './index.css';

class Select extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			optionsOpen: false,
			selectBoxConfig: {
				class: styles.defaultSelectBox,
				activeClass: styles.activeSelectBox,
				triangle: true,
				triangleSize: 10,
				triangleColor: '#FF7800',
				triangleBorderWidth: 1.5,
				animation: false,
				...this.props.selectBoxConfig,
			},
			optionConfig: {
				border: true,
				reverse: false,
				optionClass: undefined,
				...this.props.optionConfig, // selected, select ...
			},
		};
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.onSelectOption = this.onSelectOption.bind(this);
		this.toggleSelectBox = this.toggleSelectBox.bind(this);
	}

	onSelectOption(option) {
		this.setState({ optionsOpen: false });
		this.props.onSelectOption(option);
	}

	handleClickOutside() {
		this.setState({ optionsOpen: false });
	}

	toggleSelectBox() {
		if (!this.props.disabled) {
			this.setState({ optionsOpen: !this.state.optionsOpen });
		}
	}

	render() {
		const {
			className,
			options,
			placeholder = 'select...',
			PlaceholderIcon,
			selected = {
				id: -1,
				label: '',
				value: '',
			},
			disabled,
		} = this.props;

		const {
			selectBoxConfig,
			optionConfig,
			optionsOpen,
		} = this.state;

		return (
			<div
				className={classnames(
					styles.select,
					className,
					{ [styles.disabled]: disabled },
				)}
			>
				<div
					className={classnames(
						styles.selectBox,
						selectBoxConfig.class,
						{
							[styles.active]: optionsOpen,
							[selectBoxConfig.activeClass]: optionsOpen,
							[styles.animation]: selectBoxConfig.animation,
						},
					)}
					role="button"
					tabIndex="0"
					onClick={this.toggleSelectBox}
					onKeyPress={this.toggleSelectBox}
				>
					<div className={styles.mask} />
					<div className={styles.container}>
						{selected.id === -1	?
							<div className={styles.placeholder}>
								{PlaceholderIcon &&
									<div className={styles.icon}>
										<PlaceholderIcon />
									</div>}
								<div className={styles.text}>{placeholder}</div>
							</div>
							: selected.label}
						{selectBoxConfig.triangle &&
							<ArrowTriangle
								direction={optionsOpen ? 'down' : 'right'}
								className={styles.triangle}
								size={selectBoxConfig.triangleSize}
								color={selectBoxConfig.triangleColor}
								borderWidth={selectBoxConfig.triangleBorderWidth}
							/>}
					</div>
				</div>
				<div
					className={classnames(styles.optionsWrap)}
					style={{ height: optionsOpen ? `${options.length * 60}px` : 0 }}
				>
					<Options
						options={options}
						onSelect={this.onSelectOption}
						{...optionConfig}
					/>
				</div>
			</div>
		);
	}
}

export default enhanceWithClickOutside(Select);
