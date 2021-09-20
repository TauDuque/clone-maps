import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantImg } from './styles';

const RestaurantCard = ({ restaurant, onclick }) => {
  const [imageLoad, setImageLoad] = useState(false);

  return (
    <Restaurant onclick={onclick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf edit={false} value={restaurant.rating} activeColor="#E7711C" />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantImg
        imageLoad={imageLoad}
        src={restaurant.photo ? restaurant.photos[0].getUr() : restaurante}
        onload={() => setImageLoad(true)}
        alt="Foto do restaurante"
      />
      {!imageLoad && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;
