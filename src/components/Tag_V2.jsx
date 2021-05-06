import { useState } from "react";
import { useGif } from "../hooks/useGif";

export const Tag_V2 = () => {
  const [tag, setTag] = useState("cat");
  const { gif, fetchGifs } = useGif(tag);

  return (
    <div className="container">
      <form
        action=""
        onsubmit={(e) => {
          e.preventDefault();
          fetchGifs(tag);
        }}
      >
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
