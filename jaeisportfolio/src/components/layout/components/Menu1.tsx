// React-router
import { useNavigate } from "react-router-dom";
// Components
import { Container } from "../../common/box/Container";
import { SideTab } from "./Tab";

function Menu1() {
  const navigate = useNavigate();
  const goSkill = () => {
    navigate("/skill");
  };

  const goMain = () => {
    navigate("/main");
  };

  const goProject = () => {
    navigate("/project");
  };

  return (
    <Container height="85%" flexDirection="column">
      <SideTab menu={"About me"} onClick={goMain} />
      <SideTab menu={"Skill"} onClick={goSkill} />
      <SideTab menu={"Project"} onClick={goProject} />
    </Container>
  );
}

export default Menu1;
