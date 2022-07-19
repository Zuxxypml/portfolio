import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello 👋, I am <br />
          Adebisi Akinade
        </SectionTitle>
        <SectionText>
          I am a Developer from Nigeria. I love Exploring, Testing, and Using
          new Technologies to Build Scalable Applications. I'm Currently
          Exploring the World of Web Technologies... 🚀
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
