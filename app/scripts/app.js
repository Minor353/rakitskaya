import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import slickCarousel from 'slick-carousel';

import header from '../blocks/components/header/header';
header();
import prevSection from '../blocks/components/prev-section/prev-section';
prevSection();
import share from '../blocks/components/share/share';
share();
import reviews from '../blocks/components/reviews/reviews';
reviews();

$(() => {
	svg4everybody();
});
