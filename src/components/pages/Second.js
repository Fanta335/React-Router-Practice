import { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeButton from "../HomeButton";

const Second = () => {
  const pageTitle = 'Second | TestApp';
  useEffect(()=>{
    document.title=pageTitle;
  });

  return (
    <div>
      <h1>Secondです</h1>
      <p>ページタイトル：{pageTitle}</p>
      <HomeButton />
      <button>
        <Link to="/third">Thirdへ</Link>
      </button>
    </div>
  );
};

export default Second;
