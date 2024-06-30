import { getProductPage } from './pdp.js';
import { getHomePage } from './home.js';

export function rampingVus() {
    getProductPage();
    getHomePage();
}

export function constantArrivalRate() {
    getProductPage();
    getHomePage();
}
