import { useGif } from "../hooks/useGif";

export const Random_V2 = () => {
  const { gif, fetchGifs } = useGif();

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} alt="Random Gif" width="500" />
      <button onClick={fetchGifs}>CLICK FOR NEW</button>
    </div>
  );
};
