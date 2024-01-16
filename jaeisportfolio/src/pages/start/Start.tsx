// React-router
import { useNavigate } from "react-router-dom";
//Component
import { Backbody } from "../../components/common/box/body";

function Start() {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/main");
  };
  return (
    <Backbody onClick={goMain} style={{ cursor: "pointer" }}>
      <h1>초기페이지</h1>
    </Backbody>
  );
}

export default Start;
