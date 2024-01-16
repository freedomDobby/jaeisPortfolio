// React
import { Outlet } from "react-router-dom";
// Component
import { Container } from "../common/box/Container";
import { Backbody } from "../common/box/body";
import Menu1 from "./components/Menu1";
// Theme
import Theme from "../common/theme/Theme";
import Menu2 from "./components/Menu2";

function Layout() {
  const containerStyle = {
    height: "100%",
  };

  const sideMenuStyle = {
    width: "20%",
    backgroundColor: Theme.mainBlue,
  };

  return (
    <Backbody>
      {/* 실 내용이 들어갈 Container */}
      <Container style={containerStyle}>
        <Outlet />
      </Container>
      {/* SideMenu */}
      <Container
        flexDirection="column"
        justifyContent="start"
        style={sideMenuStyle}
      >
        <Menu1 />
        <Menu2 />
      </Container>
    </Backbody>
  );
}

export default Layout;
