import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

export const Random = () => {
  const [gif, setGif] = useState("");

  const fetchGifs = async () => {
    const {
      data: { data },
    } = await axios
      .get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
      .catch((er) => console.log(er.message));
    const imageSrc = data?.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGifs();
  }, []);

  const handleClick = () => {
    fetchGifs();
  };

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} alt="Random Gif" width="500" />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};
