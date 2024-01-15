import styled from "styled-components";
// img
// import github from "../../../assests/img/github.png";

interface LinkTabProps {
  menu?: string;
  color?: string;
  fontSize?: string;
  backgroundImage?: string;
  onClick?: () => void;
}

interface TabProps {
  color?: string;
  fontSize?: string;
}

interface TabBoxProps {
  width: string;
  backgroundImage?: string;
}

export const Tab = styled.div<TabProps>`
  // border: 1px solid red;
  width: 100%;
  margin: 5%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.5em")};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  transition: color 0.3s;
  &:hover {
    border-bottom: 1px solid #ff0000;
  }
`;

const TabBox = styled.div<TabBoxProps>`
  // border: 1px solid green;
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: 150%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 3%;
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
  background-size: 100% 100%;
`;

export function SideTab(props: LinkTabProps) {
  const { menu, onClick } = props;
  return <Tab onClick={onClick}>{menu}</Tab>;
}

export function LinkTab(props: LinkTabProps) {
  const { menu, color, fontSize, onClick, backgroundImage } = props;

  return (
    <Tab color={color} fontSize={fontSize} onClick={onClick}>
      <TabBox width="15%" backgroundImage={backgroundImage}></TabBox>{" "}
      {/* 이미지 경로 전달 */}
      <TabBox width="85%">{menu}</TabBox>
    </Tab>
  );
}
