import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import slickCarousel from 'slick-carousel';

import header from '../blocks/components/header/header';
header();
import nav from '../blocks/components/nav/nav';
nav();
import aboutMain from '../blocks/components/about-main/about-main';
aboutMain();
import prevSection from '../blocks/components/prev-section/prev-section';
prevSection();
import share from '../blocks/components/share/share';
share();
import tabsTable from '../blocks/components/tabs-table/tabs-table';
tabsTable();
import reviews from '../blocks/components/reviews/reviews';
reviews();

$(() => {
	svg4everybody();
});
