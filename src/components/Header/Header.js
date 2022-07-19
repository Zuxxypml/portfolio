import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiAppcelerator } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            gap: "10px",
            fontSize: "2rem",
          }}
        >
          <DiAppcelerator size="4rem" /> <span>Akinade</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.github.com/Zuxxypml">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/adebisi-akinade-648775232">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.twitter.com/Zuxxypml">
        <AiFillTwitterSquare size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
