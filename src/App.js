import "./App.css";
import { Random } from "./components/Random";
import { Tag } from "./components/Tag";
import { Tag_V2 } from "./components/Tag_V2";
import { Random_V2 } from "./components/Random_V2";

export const App = () => (
  <div>
    <h1>GIF GENERATOR</h1>
    <div className="main-container">
      <Random_V2 />
      <Tag_V2 />
    </div>
  </div>
);
