import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Memecard = (props) => {
    const navigate = useNavigate();
    return (
        <Card className="mb-4 card">
            <Card.Img variant="top" src={props.img} className="card-image" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button onClick={() => navigate(`/edit?url=${props.img}`)} variant="primary">Edit</Button>
            </Card.Body>
        </Card>
    )
}

export default Memecard;
