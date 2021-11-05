import { useNavigate } from "react-router";

const HomeButton = () => {
  const navigate = useNavigate();
  const redirectToHome = () => navigate("/");

  return <button onClick={redirectToHome}>Homeへ</button>;
};

export default HomeButton;
