/** @format */

import kopi from './images/pexels-adam-lukac-773958.jpg';
import tomat from './images/pexels-engin-akyurt-2899682.jpg';
import bayam from './images/pexels-eva-bronzini-6824475.jpg';
import selada from './images/pexels-mark-stebnicki-2893639.jpg';
import basil from './images/pexels-monicore-1391505.jpg';
import nanas from './images/pexels-nghia-pm-1206597.jpg';
import kelapa from './images/pexels-nipananlifestylecom-1424457.jpg';
import rempah from './images/pexels-shantanu-pal-2802527.jpg';

const products = [
    {
        title: 'Aromatic coffee beans',
        image: kopi,
        price: 10,
        description: `Discover the rich and flavorful notes of our locally sourced coffee beans, perfect for brewing a cup of aromatic coffee to start your day on a delightful note.`,
        size: '550 gram',
    },
    {
        title: 'Red Ripe Tomatoes',
        image: tomat,
        price: 7,
        description: `Our vine-ripened tomatoes are bursting with juicy flavor, perfect for salads, sandwiches, or homemade pasta sauce.`,
        size: '900 gram',
    },
    {
        title: 'Nutritious Leafy Spinach',
        image: bayam,
        price: 8,
        description: `Packed with essential nutrients, our fresh spinach is versatile and can be used in salads, smoothies, stir-fries, or as a healthy side dish`,
        size: '100 gram',
    },
    {
        title: 'Crisp Green Lettuce',
        image: selada,
        price: 10,
        description: `Enjoy the refreshing crunch of our locally grown lettuce, ideal for creating vibrant salads or adding a fresh touch to your favorite dishes.`,
        size: '200 gram',
    },
    {
        title: 'Fragrant Fresh Herbs',
        image: basil,
        price: 30,
        description: `Elevate your dishes with our selection of aromatic herbs, including basil, mint, and lemongrass, adding a burst of flavor to your culinary adventures.`,
        size: '200 gram',
    },
    {
        title: 'Sweet Tropical Pineapples',
        image: nanas,
        price: 18,
        description: `Indulge in the tropical sweetness of our ripe pineapples, perfect for snacking, desserts, or adding a tangy twist to your culinary creations.`,
        size: 'between 500 gram to 800 gram',
    },
    {
        title: 'Feshly Harvested Coconut',
        image: kelapa,
        price: 20,
        description: ` Quench your thirst with our freshly harvested coconuts, offering hydrating and refreshing coconut water, or indulge in the creamy goodness of coconut meat. Includes both young and ripe coconuts.`,
        size: 'Three fruits. One young, one ripe, and one of either type.',
    },
    {
        title: 'Nusantara Spice Blend',
        image: rempah,
        price: 18,
        description: `Embark on a culinary adventure with our authentic spice blends inspired by the flavors of the Nusantara archipelago, adding depth and complexity to your dishes.`,
        size: '500 gram',
    },
];

export default products;
