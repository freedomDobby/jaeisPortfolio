// Theme
import Theme from "../../components/common/theme/Theme";
// Assests
// Component
import { Container } from "../../components/common/box/Container";
import NextBtnBox from "./component/nextBtn";

function Main() {
  return (
    // 화면 전체  Container
    <Container width="100%" height="100%">
      {/* 왼 사진 Box */}
      <Container width="50%" height="100%">
        {/* 사진 바탕 Container */}
        <Container width="80%" height="80%" backcolor={Theme.subBlue}>
          {/* 진짜 사진 담는 컨테이너 */}

          <Container width="10%" height="100%" />
          <Container width="80%" height="100%">
            사진
          </Container>
          <NextBtnBox />
        </Container>
      </Container>
      {/* 오 소개 Box */}
      <Container width="50%" height="100%">
        <Container width="80%" height="80%">
          소개 Box
        </Container>
      </Container>
    </Container>
  );
}

export default Main;
