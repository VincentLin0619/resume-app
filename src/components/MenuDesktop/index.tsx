import { HashRouter } from "react-router-dom";
import styled from "styled-components";

const SideNav = styled.nav`
  align-items: center;
  display: inline-flex;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #111;
  /* overflow-x: hidden; */
  padding-top: 20px;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const SideLink = styled.a`
  padding: 6px 10px 6px 30px;
  margin: auto;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  &:hover {
    color: #f1f1f1;
  }
`;

const MenuDesktop = () => {
  return (
    <HashRouter>
      <SideNav>
        <div>
          <SideLink>Home</SideLink>
          <SideLink>Info</SideLink>
          <SideLink>Project</SideLink>
          <SideLink>About</SideLink>
        </div>
      </SideNav>
    </HashRouter>
  );
};

export default MenuDesktop;
