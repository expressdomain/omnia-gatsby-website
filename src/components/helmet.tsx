import React from 'react'
import { Helmet } from 'react-helmet'

const AutoHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Omnia Consultancy</title>
      <meta name="description" content="Informatie, communicate & technologie. Optimaal, begrijpelijk en menselijk toegepast." />
    </Helmet>
  )
}

export default AutoHelmet