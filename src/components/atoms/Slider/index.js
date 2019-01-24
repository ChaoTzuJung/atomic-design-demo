import React from 'react';
import classnames from 'classnames';
import Swiper from 'react-id-swiper';
import enhanceWithClickOutside from 'react-click-outside';

import 'react-id-swiper/src/styles/css/swiper.css';

import styles from './index.css';

const WatermarkContainer = ({ Component, className, ...props }) => (
	<div className={classnames(styles.watermark, className)}>
		<Component {...props} />
	</div>
);

const DefaultSlideComponent = ({ slide }) => (
	<div className={styles.slide}>
		<img src={slide.image} alt="slide" />
	</div>
);

class Select extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			swiper: null,
			activeId: null,
		};
		this.onClickSlide = this.onClickSlide.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.setSwiper = this.setSwiper.bind(this);
	}

	onClickSlide(id) {
		this.setState({ activeId: id });
		// 如果component有加onClickSlide這個props，把參數帶入這function執行
		if (this.props.onClickSlide) {
			this.props.onClickSlide(id);
		}
	}

	handleClickOutside() {
		this.setState({ activeId: null });
	}

	setSwiper(swiperElement) {
		this.setState({ swiper: swiperElement });
		// 如果component有加setSwiper這個props，把參數帶入這function執行
		if (this.props.setSwiper) {
			this.props.setSwiper(swiperElement);
		}
	}

	render() {
		const {
			className,
			slides,
			SlideComponent = DefaultSlideComponent,
			watermark,
			config,
		} = this.props;

		const { swiper, activeId } = this.state;

		return (
			<div className={classnames(styles.slider, className)}>
				<Swiper
					slidesPerView={1}
					loop
					pagination={{
						el: '.swiper-pagination',
						clickable: true,
					}}
					paginationCustomizedClass={styles.pagination}
					ref={node => {
						// 若抓到Swiper的DOM node 且 swiper這個state是空的，就把swiper的node setSwiper()
						if (node && !swiper) {
							this.setSwiper(node.swiper);
						}
					}}
					{...config}
				>
					{slides.map(slide => (
						<div
							key={slide.id}
							role="button"
							tabIndex="0"
							onClick={() => {
								this.onClickSlide(slide.id);
							}}
							onKeyPress={() => {
								this.onClickSlide(slide.id);
							}}
						>
							<SlideComponent slide={slide} active={slide.id === activeId} />
						</div>
					))}
				</Swiper>
				{/* watermark是一個物件內有Component跟className屬性 */}
				{watermark && (
					<WatermarkContainer
						Component={watermark.Component}
						className={watermark.className}
						{...watermark.props}
					/>
				)}
			</div>
		);
	}
}

export default enhanceWithClickOutside(Select);
