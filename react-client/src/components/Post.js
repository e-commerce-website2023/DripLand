import React from 'react'

const Post = ({product}) => {
  return (
    <div>
        <li key={product.id}>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
          </li>
    </div>
  )
}

export default Post