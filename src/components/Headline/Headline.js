import React from 'react'
import "./Headline.css"

export default function Headline(props) {
  return (
    <div className={`headline-${props.class}`}>{props.headline}</div>
  )
}
