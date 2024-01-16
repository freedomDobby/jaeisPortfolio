import { Container } from "../../../components/common/box/Container";
// Theme
// Assests
import nextBtn from "../../../assests/img/nextBtn.png";

function NextBtnBox() {
  return (
    <Container
      width="10%"
      height="100%"
      style={{
        backgroundImage: `url(${nextBtn})`,
        backgroundSize: "20% 5%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        cursor: "pointer",
      }}
    ></Container>
  );
}

export default NextBtnBox;
