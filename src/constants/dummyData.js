import images from './images';
import icons from './icons';

const Category = [
  {label: 'Body'},
  {label: 'Face'},
  {label: 'Hair'},
  {label: 'Facial'},
  // {'label': 'Massage'},
  // {'label': 'Relaxing'},
];

const tags = [
  {image: icons.vegan},
  {image: icons.natural1},
  {image: icons.natural},
];

const Products = [
  {
    id: 1,
    title: 'Facial Cleanser',
    description: 'Oil balancing moisture',
    price: '$9.99',
    image: images.Product1,
    size: '125ml',
    star: 4,
    reviews: 35,
    // tags: [
    //     {image: icons.vegan},
    //     {image: icons.natural1},
    //     {image: icons.natural},
    // ]
  },
  {
    id: 2,
    title: 'Moisturiser',
    description: 'Oil balancing moisture',
    price: '$7.89',
    image: images.Product2,
    size: '250ml',
    star: 4,
    reviews: 35,
    // tags: [
    //   {image: icons.vegan},
    //   {image: icons.natural1},
    //   {image: icons.natural},
    // ]
  },
  {
    id: 3,
    title: 'Body Wash',
    description: 'Oil balancing moisture',
    price: '$24.99',
    image: images.Product3,
    size: '50ml',
    star: 4,
    reviews: 35,
    // tags: [
    //   {image: icons.vegan},
    //   {image: icons.natural1},
    //   {image: icons.natural},
    // ]
  },
  {
    id: 4,
    title: 'Peeloff Mask',
    description: 'Oil balancing moisture',
    price: '$12.99',
    image: images.Product4,
    size: '100ml',
    star: 4,
    reviews: 35,
    // tags: [
    //   {image: icons.vegan},
    //   {image: icons.natural1},
    //   {image: icons.natural},
    // ]
  },
  {
    id: 5,
    title: 'Perfume',
    description: 'Oil balancing moisture',
    price: '$29.99',
    image: images.Product6,
    size: '75ml',
    star: 4,
    reviews: 35,
    // tags: [
    //     {image: icons.vegan},
    //     {image: icons.natural1},
    //     {image: icons.natural},
    // ]
  },
  {
    id: 6,
    title: 'Shampoo',
    description: 'Oil balancing moisture',
    price: '$19.99',
    image: images.Product5,
    size: '150ml',
    star: 4,
    reviews: 35,
    // tags: [
    //     {image: icons.vegan},
    //     {image: icons.natural1},
    //     {image: icons.natural},
    // ]
  },
];

export default {
  Products,
  Category,
  tags,
};
