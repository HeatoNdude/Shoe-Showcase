import React from 'react'
import { useState } from 'react';
import Link from "next/link";
import { urlFor } from "../lib/client";
import { AiOutlineLine } from "react-icons/ai";

function Card({title,imageUrl}) {
  const [activeCard, setActiveCard] = useState(null);
  return (
    <div className="card-container">
        <div className="image-container">
            <img src={imageUrl} alt='' />
        </div>
        <div className="card-title">
            <h3>{title}</h3>
        </div>
        <div className="card-btn">
        <button>
            <AiOutlineLine size={'2em'} />
          </button>         
        </div>
    </div>
  )
}

export default Card


