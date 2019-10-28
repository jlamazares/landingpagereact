import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export const Cards = () => {
	return (
		<Card style={{ width: "16rem" }}>
			<Card.Img variant="top" src="https://via.placeholder.com/250x150.png?text=500x325 " />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.
				</Card.Text>
				<Button variant="primary">Find Out More!</Button>
			</Card.Body>
		</Card>
	);
};
