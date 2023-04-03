import React, { useEffect, useState } from "react";
import { REACT_APP_GIPHY_API_KEY } from "../../utils/envs.js";
import { giphyApi } from "../../Providers/api";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const [ giphys, setGiphys ] = useState();

  useEffect(() => {
    async function getGiphys(){
      try{
        const giphys = await giphyApi.get(`/v1/gifs/trending?api_key=${REACT_APP_GIPHY_API_KEY}`)
        setGiphys(giphys.data.data)
        console.log(giphys)
      } catch (err) {
        console.log(err)
      }
    }
    getGiphys();
  }, [])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      alignContent: 'center',
    }}>
      { giphys && 
        <Carousel>
          {giphys?.map((gif) =>
          <div>
            <img src={gif.images.original.url} alt="gif"/>
          </div>
          )}
        </Carousel>
      }
    </div>
  );
}

export default Home;
