import React from 'react'
import { sanitize } from '../../utils/functions'

const SinglePost = (props) => {
  const { data } = props

  return <>{data ? <div>{data.title ? <h2>{data.title}</h2> : null}</div> : 'Loading...'}</>
}

export default SinglePost
