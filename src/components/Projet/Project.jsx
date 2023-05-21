import React from 'react'
import {PaddingContainner, Heading, BlueText, FlexContainer} from "../../styled/Global.styled";
import {ProjetDetail} from "../../utils/Data";
import Projectlayout from "../layouts/Projectlayout";
import {motion} from "framer-motion";
import {fadeInRightVariant, fadeInTopVariant} from "../../utils/Variant";

function Project() {
    return (
        <PaddingContainner top="5%" bottom="5%" id="project" responsiveRight="1rem" responsiveLeft="1rem"
                           responsiveTop="20%">
            <Heading as={motion.h4} size="h4"
                     variants={fadeInTopVariant}
                     initial="hidden"
                     whileInView="visible">
                My Project
            </Heading>
            <Heading as={motion.h2}
                     variants={fadeInTopVariant}
                     initial="hidden"
                     whileInView="visible" size="h2">
                What <BlueText>I have build</BlueText>
            </Heading>
            {
                ProjetDetail.map((projet) => (
                    <PaddingContainner key={projet.id} top="5rem" bottom="5rem">
                        <Projectlayout data={projet}/>
                    </PaddingContainner>
                ))
            }
        </PaddingContainner>
    )
}

export default Project