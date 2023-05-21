import React from "react";
import {
    Heading,
    PaddingContainner,
    ParaText,
    FlexContainer,
    BlueText,
    IconContainer,
} from "../../styled/Global.styled";
import {
    SkilsCardContainer,
    SkylsCard,
} from "../../styled/Myskils.styled/Myskils.styled";
import {Skyls} from "../../utils/Data";
import {motion} from "framer-motion";
import {fadeInLeftVariant, fadeInRightVariant} from "../../utils/Variant";

function MySkils() {
    return (
        <PaddingContainner id="skils" top="10%" bottom="10%"
                           responsiveRight="1rem"
                           responsiveLeft="1rem">
            <FlexContainer responsiveFlex
                           fullWidthChild
                           responsiveDirection="column-reverse">
                <SkilsCardContainer as={motion.div} variants={fadeInLeftVariant}
                                    initial="hidden"
                                    whileInView="visible">
                    {Skyls.map((skyle) => (
                        <SkylsCard>
                            <IconContainer size="5rem" color="blue">
                                {skyle.icon}
                            </IconContainer>
                            <Heading as="h4" size="h4">
                                {skyle.tech}
                            </Heading>
                        </SkylsCard>
                    ))}
                </SkilsCardContainer>
                <motion.div variants={fadeInRightVariant}
                            initial="hidden"
                            whileInView="visible">
                    <Heading as="h4" size="h4">
                        My skills
                    </Heading>
                    <Heading as="h2" size="h2" top="0.5rem">
                        What <BlueText> I can do</BlueText>
                    </Heading>
                    <ParaText>
                        As a Developer, I have a wide range of experience in front-end and
                        back-end developement. I am proficient in Php ,Laravel , Reactjs,
                        Vuejs and Html to Css.I have some experience in frontend but it is
                        in the backend that I acquired more experience by making several web
                        applications
                    </ParaText>
                </motion.div>
            </FlexContainer>
        </PaddingContainner>
    );
}

export default MySkils;
