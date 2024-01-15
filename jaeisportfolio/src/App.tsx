import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
//Pages
import Layout from "./components/layout/Layout";
import Start from "./pages/start/Start";
import Main from "./pages/main/Main";
import Skill from "./pages/skill/Skill";
import Project from "./pages/project/Project";
//etc
import theme from "./components/common/theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="main" element={<Main />} />
            <Route path="skill" element={<Skill />} />
            <Route path="project" element={<Project />} />
          </Route>
          <Route path="/" element={<Start />} />
        </Routes>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
