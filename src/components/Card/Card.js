import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MyCard(props) {
  return (
    <div className="myCard">
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{textAlign: 'left' }}>
            - {props.point1}
          </Card.Text>
          <Card.Text style={{textAlign: 'left' }}>
            - {props.point2}
          </Card.Text>
          <Button variant="info">Book Free Consultation</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
