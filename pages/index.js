import React from "react";
import { useState } from "react";
import { client } from "../lib/client";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineLine } from "react-icons/ai";
import {
  HeroBanner,
  Card,
  Anime,
  Cartoonic,
  Product,
  FooterBanner,
  Popup,
} from "../components";
import { IoIosArrowForward } from "react-icons/io";

// import Product from '../components/Product'
// import FooterBanner from '../components/FooterBanner'
// import HeroBanner from '../components/HeroBanner'

const Home = ({ products, bannerData, animes, cartoonics }) => {
  const [activeDiv, setActiveDiv] = useState(1);
  
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {/* {console.log(bannerData)} */}

      <div className="products-heading">
        <h2>Collections </h2>
        {/* <button type="button">
          View all products
          <IoIosArrowForward />
        </button> */}
        {/* <p>Speakers of many variations</p> */}
      </div>
      <div className="products-category">
        <div className="crd" onClick={() => setActiveDiv(1)}>
          <Card
            title="Anime"
            imageUrl="Anime.jpeg"
          />
          {activeDiv === 1 && <div className="active-btn">
            <button>
              <AiOutlineLine size={'2em'} />
            </button>         
            </div>
          }
        </div>
        <div className="crd" onClick={() => setActiveDiv(2)}>
          <Card
            title="Cartoonic"
            imageUrl="Cartoonic.jpeg"
          />
          {activeDiv === 2 && <div className="active-btn">
            <button>
              <AiOutlineLine size={'2em'} />
            </button>         
            </div>
          }
        </div>

        <div className="crd" onClick={() => setActiveDiv(3)}>
          <Card
            title="Basics"
            imageUrl="Basic.jpeg"
          />
          {activeDiv === 3 && <div className="active-btn">
            <button>
              <AiOutlineLine size={'2em'} />
            </button>         
            </div>
          }
        </div>
      </div>

      <div className="products-container">
      {activeDiv === 1 && <p>{animes?.map((anime) => (
          <Anime key={anime._id} anime={anime} />
        ))}</p>}
        
        {activeDiv === 2 && <p>{cartoonics.map((cartoonic) => (
            <Cartoonic key={cartoonic._id} cartoonic={cartoonic} />
          ))}</p>}
          
        {activeDiv === 3 && <p>{products.map((product) => (
          <Product key={product._id} product={product} />
        ))}</p>}
        

      </div>
      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
      <div className="aboutUs">
        <div className="aboutUsTitle">
          <p>About Us</p>
        </div>
        <div className="aboutUsContent">
          <p>Welcome to Kicksthetic, where we specialize in creating one-of-a-kind, hand-painted sneakers. Our skilled artists use only the best paints and materials to ensure that your custom sneakers not only look great but are also durable.
              We offer a wide range of custom painting options for all types of sneakers, from classic brands to niche styles.
              In addition to our customization services, we also prioritize customer satisfaction and easy online shopping experience. Our website is optimized for search engines and easy to navigate.
              Choose from our pre-made designs or contact us to create a custom design that expresses your individuality. To Shop now at Kicksthetic, dm us on our <a className="social-ins" href="https://www.instagram.com/_kicksthetic/" target="_blank">Instagram</a>.</p>
        </div>
        <div className="aboutUsImg">
        <img src={'aboutus.jpeg'} alt='' />
        </div>
      </div>
      <Popup />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const anime = '*[_type == "anime"]';
  const animes = await client.fetch(anime);

  const cartoonic = '*[_type == "cartoonic"]';
  const cartoonics = await client.fetch(cartoonic);

  return {
    props: { products, bannerData, animes, cartoonics },
  };
};

export default Home;
