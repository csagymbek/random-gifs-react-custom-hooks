import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

export const Tag = () => {
  const [tag, setTag] = useState("cat");
  const [gif, setGif] = useState("");

  const fetchGifs = async (tag) => {
    const {
      data: { data },
    } = await axios
      .get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`)
      .catch((er) => console.log(er.message));
    const imageSrc = data?.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGifs(tag);
  }, [tag]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGifs(tag);
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <h1>Random {tag} Gif</h1>
        <img src={gif} alt="Random Gif" width="500" />
        <br />
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
};
