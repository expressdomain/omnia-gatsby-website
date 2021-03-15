import React from 'react'
import { Helmet } from 'react-helmet'

const AutoHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Omnia Consultancy</title>
    </Helmet>
  )
}

export default AutoHelmet
