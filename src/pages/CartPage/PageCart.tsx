import React from 'react';
import CartItem from '../../components/CartItem/CartItem.tsx';
import CartTotalAmount from '../../components/CartTotalAmount/CartTotalAmount.tsx';
import Icon from '../../components/Icon/Icon.tsx';
import { IconType } from '../../components/Icon/Icon.ts';
import StyledCartPage from './StyledCartPage.ts';
import { Phone } from '../../types/types.ts';
import { useAppDispatch, useAppSelector } from '../../context/hooks.ts';
import { incrementTotalPrice } from '../../context/cartContext/cartSlice.ts';

export const nada: Phone[] = [
  {
    id: 'apple-iphone-11-128gb-black',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB Black',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'black',
    images: [
      'img/phones/apple-iphone-11/black/00.webp',
      'img/phones/apple-iphone-11/black/01.webp',
      'img/phones/apple-iphone-11/black/02.webp',
      'img/phones/apple-iphone-11/black/03.webp',
      'img/phones/apple-iphone-11/black/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-128gb-green',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB Green',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'green',
    images: [
      'img/phones/apple-iphone-11/green/00.webp',
      'img/phones/apple-iphone-11/green/01.webp',
      'img/phones/apple-iphone-11/green/02.webp',
      'img/phones/apple-iphone-11/green/03.webp',
      'img/phones/apple-iphone-11/green/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-128gb-purple',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB Purple',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'purple',
    images: [
      'img/phones/apple-iphone-11/purple/00.webp',
      'img/phones/apple-iphone-11/purple/01.webp',
      'img/phones/apple-iphone-11/purple/02.webp',
      'img/phones/apple-iphone-11/purple/03.webp',
      'img/phones/apple-iphone-11/purple/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
];

function PageCart() {

  const {phones: productsData, quantity } = useAppSelector(state => state.cart);

  return (
    <StyledCartPage className="cart-items">
      <button type="button" className="cart-items__btn">
        <Icon icon={IconType.ARROW_LEFT} fill="black" />
        <span className="cart-items__btn-title">Back</span>
      </button>
      <h1 className="cart-item__title">Cart</h1>

      <div className="cart-item__products-wrapper">
        <div className="cart-item__products-content">
          {productsData.map((product, idx) => (
            <CartItem phone={product} quantity={quantity[idx]} />
          ))}
        </div>
        <CartTotalAmount />
      </div>
    </StyledCartPage>
  );
}

export default PageCart;