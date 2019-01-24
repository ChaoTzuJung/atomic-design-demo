import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Slider from 'components/atoms/Slider';

import backgroundImage from 'images/home/background.png';
import backgroundImage2 from 'images/home/background2.jpg';
import backgroundImage3 from 'images/home/background3.jpg';
import Logo104 from 'images/icon/hrdic-logo-white.inline.svg';

import { storiesOf, action } from 'util/facade';

const stories = storiesOf('Commons|atoms/[ Sliders ]/Slider', module);

stories.addDecorator(withKnobs);

const slides = [
	{
		id: 0,
		image: backgroundImage,
	},
	{
		id: 1,
		image: backgroundImage2,
	},
	{
		id: 2,
		image: backgroundImage3,
	},
];

/* --- default --- */
stories.add('with default', () => {
	const slider = (
		<div>
			<Slider slides={slides} />
		</div>
	);

	return slider;
});

/* --- default --- */
stories.add('with default', () => {
	const slider = (
		<div>
			<Slider slides={slides} />
		</div>
	);

	return slider;
});

/* --- with config --- */
const config = {
	slidesPerView: 1, 	// 預設顯示第一張圖片
	loop: true,			// 播放時， 1->2->3->1..
	autoplay: {
		delay: 2500,	// 若設定自動輪播時， 每2.5s換一張圖
		disableOnInteraction: false, // 手動滑動圖片設定無效
	},
	noSwiping: true, // Able swiping by condition (original props)
	pagination: { 	// Swiper上的三個點點
		// el: '.swiper-pagination', (no change)
		// type: 'bullets',  (option)
		// clickable: true,  (option)
	},
};

stories.add('with config', () => {
	const slider = (
		<div>
			<Slider slides={slides} config={config} />
		</div>
	);

	return slider;
});

/* --- with watermark --- */
const watermark = {
	Component: () => <Logo104 viewBox="0 0 283 45" width="100%" height="100%" />,
	className: 'className',
};

stories.add('with watermark', () => {
	const slider = (
		<div>
			<Slider slides={slides} watermark={watermark} />
		</div>
	);

	return slider;
});

/* --- with SlideComponent --- */
const SlideComponent = ({ slide }) => (
	<div>
		<img src={slide.image} alt="slide" width="100%" />
		<div>custom slide component</div>
	</div>
);

stories.add('with SlideComponent', () => {
	const slider = (
		<div>
			<Slider slides={slides} SlideComponent={SlideComponent} />
		</div>
	);

	return slider;
});

/* --- with setSwiper --- */
/* get swiper object to control swiper */
stories.add('with setSwiper', () => {
	const slider = (
		<div>
			<Slider
				slides={slides}
				setSwiper={swiperElement => {
					console.log(swiperElement);
				}}
			/>
		</div>
	);

	return slider;
});

/* --- with setSwiper --- */
/* get slide id when slide is clicked */
stories.add('with onClickSlide', () => {
	// There are still some bug when loop is set to true TODO:
	const slider = (
		<div>
			<Slider slides={slides} onClickSlide={action('onClickSlide')} />
		</div>
	);

	return slider;
});
