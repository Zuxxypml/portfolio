import styled from "styled-components";
import { keyframes } from "styled-components";
const skillsAnimation = keyframes`
0% {
  transform: translateY(0px);
  }
33.3% {
   transform:translateY(-80px); 
}
66.66% {
    transform:translateY(-160px); 
}
99.99% {
    transform:translateY(-240px); 
}

`;
export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const SkillsContainer = styled.div`
  height: 80px;
  overflow: hidden;
`;
export const SkillsWrapper = styled.div`
  height: 100%;
  animation-delay: 2s;
  animation: ${skillsAnimation} 10s ease-in-out infinite;
`;
export const SkillItem = styled.h2`
  color: tomato;
  height: 80px;
  font-size: 50px;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 40px;
  }
`;
