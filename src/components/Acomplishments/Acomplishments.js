import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 10, text: "Open Source Projects" },
  { number: 2, text: "Awards" },
  { number: 100, text: "Hours of Work" },
  { number: 9, text: "Happy Clients" },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider divider />
    <SectionTitle>Achievements ✨</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider colorAlt />
  </Section>
);

export default Acomplishments;
