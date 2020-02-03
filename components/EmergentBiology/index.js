// @flow
import * as React from 'react';
import {
  Wrapper,
  Container,
  EmergentBiologyInner,
  SectionSubTitle,
  SectionTitle,
  SectionDescription,
  BiologyDescription
} from './styles';

const EmergentBiology = () => (
  <Wrapper>
    <Container>
      <EmergentBiologyInner>
        <SectionSubTitle>Welcome</SectionSubTitle>
        <SectionTitle>Emergent Dynamics Generates Tomorrow</SectionTitle>
        <SectionDescription>
          We’re a biomedical think tank specializing in reinforcement learning
          for biological process simulation.
        </SectionDescription>
        <BiologyDescription>
          Emergent Dynamics aims to reduce time and cost to market for drug
          discovery and research. Using Multi-Agent Reinforcement learning and
          extensive data, we are building repeatable in silico models.
        </BiologyDescription>
      </EmergentBiologyInner>
    </Container>
  </Wrapper>
);

export default EmergentBiology;
