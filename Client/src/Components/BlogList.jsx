import React from 'react'
import blogCategories from '../assets/assets.js'

function BlogList() {
  return (
    <div>
      <div>
          {blogCategories.map((item) => {
            <div key={item} className='relative'>
              <button></button>
            </div>
          })}
      </div>
    </div>
  )
}

export default BlogList
