import { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeButton from "../HomeButton";

const Second = ({ selectedAnimal }) => {
  const pageTitle = "Second | TestApp";
  useEffect(() => {
    document.title = pageTitle;
  });

  return (
    <div>
      <h1>Secondページです</h1>
      {selectedAnimal ? <h3>{selectedAnimal}が選択されています</h3> : <h3>選択されていません！</h3>}
      <p>ページタイトル：{pageTitle}</p>
      <HomeButton />
      <button>
        <Link to="/third">Thirdへ</Link>
      </button>
    </div>
  );
};

export default Second;
