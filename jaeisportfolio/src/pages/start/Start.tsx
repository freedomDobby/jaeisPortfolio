// React-router
import { useNavigate } from "react-router-dom";
//Component
import { Backbody } from "../../components/common/box/body";
//Assests
import startPage from "../../assests/img/copy.png";
import { Container } from "../../components/common/box/Container";

function Start() {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/main");
  };
  return (
    <Backbody onClick={goMain}>
      <Container
        style={{
          backgroundImage: `url(${startPage})`,
          backgroundSize: "cover", // 이미지를 가득 채우도록 설정
          backgroundRepeat: "no-repeat", // 반복 없음
          backgroundPosition: "center", // 중앙에 배치
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
        onClick={goMain}
      />
    </Backbody>
  );
}

export default Start;
