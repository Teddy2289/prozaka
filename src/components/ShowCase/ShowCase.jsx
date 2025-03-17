import React from "react";
import {
  Heading,
  PaddingContainner,
  ParaText,
  FlexContainer,
  BlueText,
  IconContainer,
} from "../../styled/Global.styled";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

import {
  ShowCaseImageCard,
  ShowCaseParticleContainer,
  Particle,
} from "../../styled/ShowCase.styled/ShowCase.styled";

import teddy from "../../assets/teddy.jpg";
import background1 from "../../assets/triangle.png";
import background from "../../assets/technologique.png";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variant";

function ShowCase() {
  return (
    <PaddingContainner
      id="Home"
      left="3%"
      right="10%"
      top="18%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem">
      <FlexContainer align="start" fullWidthChild>
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible">
          <Heading as="h4" size="h4">
            Hello
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            I'm <BlueText>Teddy Rinah</BlueText>
          </Heading>
          <Heading as="h3" size="h3" top="0.5rem" bottom="1rem">
            I'm a <BlueText>Developers</BlueText>
          </Heading>
          <ParaText as="p" top="2rem" bottom="4rem">
            I'm a developer web with 2 years of experience in creating and
            designing user-friendly websites and web application
          </ParaText>
          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="white" size="1.5rem">
              <BsLinkedin />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <BsFacebook />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <BsInstagram />
            </IconContainer>
          </FlexContainer>
        </motion.div>

        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          justify="flex-end">
          <ShowCaseParticleContainer>
            <ShowCaseImageCard>
              <img src={teddy} alt="teddy" />
            </ShowCaseImageCard>
            <Particle
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={background}
              top="-80px"
              left="20px"
              rotate="60deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
              }}
              src={background1}
              top="50px"
              right="-70px"
              rotate="0deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, -100, 0],
                rotate: 360,
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
              }}
              src={background}
              bottom="10px"
              left="-70px"
              rotate="50deg"
            />
          </ShowCaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainner>
  );
}

export default ShowCase;
