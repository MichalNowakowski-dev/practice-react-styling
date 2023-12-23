import React from "react";
import {
	StyledCard,
	StyledCardImg,
	StyledCardBody,
	StyledCardTitle,
	StyledCardText,
} from "./Card.styled";

const Card = (props) => {
	return <StyledCard style={props.style}>{props.children}</StyledCard>;
};
const CardImg = (props) => {
	console.log(props);
	return (
		<StyledCardImg
			variant={props.variant}
			src={props.src}
		></StyledCardImg>
	);
};

const CardBody = (props) => {
	return <StyledCardBody>{props.children}</StyledCardBody>;
};
const CardTitle = (props) => {
	return <StyledCardTitle>{props.children}</StyledCardTitle>;
};
const CardText = (props) => {
	return <StyledCardText>{props.children}</StyledCardText>;
};

Object.assign(Card, {
	Img: CardImg,
	Body: CardBody,
	Title: CardTitle,
	Text: CardText,
});

export default Card;
