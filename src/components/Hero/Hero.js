import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {
  LeftSection,
  SkillItem,
  SkillsContainer,
  SkillsWrapper,
} from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello 👋, I am <br />
          Adebisi Akinade
        </SectionTitle>
        <SkillsContainer>
          <SkillsWrapper>
            <SkillItem>Developer</SkillItem>
            <SkillItem>Photographer</SkillItem>
            <SkillItem>Gamer</SkillItem>
            <SkillItem>Designer</SkillItem>
          </SkillsWrapper>
        </SkillsContainer>
        <SectionText>
          I am a Developer from Nigeria. I love Exploring, Testing, and Using
          new Technologies to Build Scalable Applications. I'm Currently
          Exploring the World of Web Technologies... 🚀
        </SectionText>
        <Button href="../../../public/cv/Resume-Adebisi-Akinade.pdf" download>
          Download CV
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
