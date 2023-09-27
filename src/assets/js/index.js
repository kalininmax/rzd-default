import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

global.gsap = gsap;

gsap.defaults({
	overwrite: 'auto',
});

class RZD {
	constructor() {
		this.env = require('./utils/env').default;
		this.utils = require('./utils/utils').default;
		this.classes = {
			// Signal: require('./classes/Signal').default,
		};
		this.components = {
			Hero: require('../../includes/hero/hero'),
			Feature: require('../../components/feature/feature'),
		};
		this.helpers = {};
		this.modules = {
			Lottie: require('./modules/Lottie'),
			Animation: require('./modules/Animation'),
		};
		document.addEventListener('DOMContentLoaded', () => {
			document.documentElement.classList.remove('_loading');
		});
	}
}

global.RZD = new RZD();

if (module.hot) {
	module.hot.accept();
}
