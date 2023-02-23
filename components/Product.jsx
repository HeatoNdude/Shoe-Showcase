import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, details } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={190}
            height={200}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-details">{details}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product