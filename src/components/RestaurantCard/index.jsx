import React from "react";
import ReactStars from "react-rating-stars-component";

import {Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto} from "./style"
import restaurante from "../../assets/restaurante-fake.png"

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome</Title>
            <ReactStars count={5} edit={false} value={4} isHalf activeColor="#e7711c" />
            <Address>Rua do canário, 150</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurante} alt="Foto do restaurante" />
    </Restaurant>);

export default RestaurantCard;