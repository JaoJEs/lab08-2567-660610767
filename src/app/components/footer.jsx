import React from 'react'

export default function footer(props) {
  return (
    <div className="mt-3">
    <p className="text-secondary text-center">
      copyright © {props.year} {props.fullName}{props.studentId}
    </p>
  </div>

  )
}
