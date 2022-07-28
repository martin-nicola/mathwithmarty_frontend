import React from 'react'
import MyCard from '../Card/Card'
import Headline from '../Headline/Headline'
import Button from 'react-bootstrap/Button';
import './Tutoring.css'

export default function Tutoring() {
  return (
    <div className="tutoring">
      <div className="tutoring-main">
        <Headline class={"tutoring"} headline={"Tutoring"}/>
        <Headline class={"tutoring-subheadline"} headline={"We offer a free tutoring session for each new student!"}/>
        <Button variant="info">{"Book Free Session"}</Button>
        <div className="card-section">
          <MyCard title={"Math (Grade 9 & 10)"} point1={"Linear Relations / Geometry"} point2={"Quadratics / Trigonometry"} src={"linear-quadratic.png"} btnInfo={"See Course Info"}/>
          <MyCard title={"Functions (Grade 11)"} point1={"Advanced Quadratic Relations"} point2={"Advanced Trigonometry"} src={"sine.png"} btnInfo={"See Course Info"}/>
          <MyCard title={"Calculus (Grade 12)"} point1={"Intro to Limits"} point2={"Derivatives"} src={"integral.png"} btnInfo={"See Course Info"}/>
        </div>
      </div>
    </div>
  )
}
