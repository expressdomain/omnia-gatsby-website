import React from 'react'

const Category = ({ catData, selected }) => {
  return (
    <div className={`category_option ${selected === catData.name ? 'option--selected' : ''}`}>
      {catData.name}
    </div>
  )
}

export default Category
