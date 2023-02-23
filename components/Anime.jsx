import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Anime = ({ anime: { image, name, slug, details } }) => {
  return (
    <div className="product-cont">
      <Link href={`/anime/${slug.current}`}>
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

export default Anime