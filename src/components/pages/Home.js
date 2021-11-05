import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const pageTitle = 'Home | TestApp';
  useEffect(()=>{
    document.title = pageTitle;
  })

  return (
    <div>
      <h1>Homeです</h1>
      <p>ページタイトル：{pageTitle}</p>
      <button>
        <Link to="/second">Secondへ</Link>
      </button>
      <button>
      <Link to="/third">Thirdへ</Link>
      </button>
    </div>
  );
};

export default Home;
