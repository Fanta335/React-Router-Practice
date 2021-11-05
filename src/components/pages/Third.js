import { useEffect } from "react";
import HomeButton from "../HomeButton";

const Third = () => {
  const pageTitle = 'Third | TestApp'
  useEffect(()=>{
    document.title=pageTitle;
  });

  return (
    <div>
      <h1>Thirdページです</h1>
      <p>ページタイトル：{pageTitle}</p>
      <HomeButton />
    </div>
  );
};

export default Third;
