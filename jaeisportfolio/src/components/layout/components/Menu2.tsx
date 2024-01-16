import { Container } from "../../common/box/Container";
import { LinkTab } from "./Tab";
// img
import github from "../../../assests/img/github.png";
import gmail from "../../../assests/img/gmail.png";

function Menu2() {
  const goGithub = () => {
    window.open("https://github.com/freedomDobby", "_blank");
  };

  return (
    <Container height="15%" flexDirection="column" style={{ overflow: "none" }}>
      <LinkTab
        color="black"
        fontSize="1.0em"
        onClick={goGithub}
        menu={"github"}
        backgroundImage={github}
      />
      <LinkTab
        color="black"
        fontSize="1.0em"
        backgroundImage={gmail}
        menu={"dobbykim0320@gmail.com"}
      />
    </Container>
  );
}

export default Menu2;
