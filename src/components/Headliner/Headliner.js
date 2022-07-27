import React from 'react'
import Feature from '../Feature/Feature';
import Headline from '../Headline/Headline';
import './Headliner.css'

export default function Headliner() {
  return (
    <div className="headliner">
      <div className="left-headliner">
        <Headline class={"exam-prep"} headline={"Complete Exam Prep"} />
        <Headline class={"online-tutoring"} headline={"Online Tutoring From Top Math/Science Instructor"} />
        <Feature/>
      </div>
      <div className="right-headliner">
        <img src="https://avatars.githubusercontent.com/u/39384193?v=4" alt=""/>
      </div>
    </div>
  )
}
