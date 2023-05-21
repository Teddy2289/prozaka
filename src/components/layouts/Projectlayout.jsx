import React from "react";
import {PaddingContainner, FlexContainer, Heading, IconContainer, ParaText, Button} from "../../styled/Global.styled";
import {FaGithub} from "react-icons/fa";
import {TechStackCard, ProjetImgContainer, ProjetImg} from "../../styled/MyProject.styled/MyProject.styled";
import {motion} from "framer-motion";
import {fadeInLeftVariant, fadeInRightVariant} from "../../utils/Variant";

function Projectlayout({data}) {
    return (
        <FlexContainer direction={data.reverse ? 'row-reverse' : false} fullWidthChild>
            <motion.div variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
                        initial="hidden"
                        whileInView="visible">
                <FlexContainer gap="1rem">
                    <Heading as="h3" size="h3" bottom="1rem">
                        {data.projet_name}
                    </Heading>
                    <IconContainer size="2rem" color="blue">
                        <FaGithub/>
                    </IconContainer>
                </FlexContainer>
                <PaddingContainner top="1rem">
                    <FlexContainer gap="1rem">
                        {data.tect_stack.map((stack) => (
                            <TechStackCard>{stack}</TechStackCard>
                        ))}
                    </FlexContainer>
                </PaddingContainner>
                <ParaText top="1.5rem" bottom="2rem">
                    {data.projet_description}
                </ParaText>
                <Button href={data.project_url}>
                    Visite website
                </Button>
            </motion.div>

            <ProjetImgContainer
                as={motion.div}
                variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
                justify={data.reverse ? 'flex-start' : 'flex-end'}>
                <ProjetImg src={data.projet_img} alt={data.projet_name}/>
            </ProjetImgContainer>
        </FlexContainer>
    )
}

export default Projectlayout;