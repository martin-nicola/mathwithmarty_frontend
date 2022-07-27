import React from 'react'
import Button from 'react-bootstrap/Button';
import './Feature.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Feature(props) {
  return (
    <div className="feature">
      <div className="feature-btn-container">
        <Button variant="info">Book Tutoring Session</Button>
        <Button variant="warning">Access Course Materials</Button>
      </div>
    </div>
  )
}
