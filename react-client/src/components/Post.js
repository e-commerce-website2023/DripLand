import React from 'react'

const Post = ({product}) => {
  return (
    <div>
         <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
    </div>
  )
}

export default Post