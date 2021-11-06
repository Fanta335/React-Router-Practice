import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ handleChangeAnimal }) => {
  const pageTitle = "Home | TestApp";
  useEffect(() => {
    document.title = pageTitle;
  });

  return (
    <div>
      <div>
        <h1>Homeページです</h1>
        <p>ページタイトル：{pageTitle}</p>
        <label htmlFor="animal-select">選択してからSecondへ</label>
        <select name="animals" id="animal-select" onChange={handleChangeAnimal}>
          <option value="">Choose an option</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </select>
      </div>
      <div>
        <button>
          <Link to="/second">Secondへ</Link>
        </button>
        <button>
          <Link to="/third">Thirdへ</Link>
        </button>
        <Fourth />
      </div>
    </div>
  );
};

export default Home;
