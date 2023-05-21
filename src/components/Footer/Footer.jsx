import React from "react";
import {PaddingContainner, FlexContainer, Heading, Button, BlueText} from "../../styled/Global.styled";
import {ContactForm, FormInput, FormLabel} from "../../styled/Footer.styled/Footer.styled";
import {motion} from "framer-motion";
import {fadeInBottomVariant} from "../../utils/Variant";

function Footer() {
    return (
        <PaddingContainner id="contact" top="5%" bottom="10%">
            <Heading align="center" as={motion.h4}
                     variants={fadeInBottomVariant}
                     initial="hidden"
                     whileInView="visible" size="h4">
                Contact
            </Heading>
            <Heading align="center" as={motion.h2}
                     variants={fadeInBottomVariant}
                     initial="hidden"
                     whileInView="visible"
                     size="h2">
                Contact <BlueText>Me Here</BlueText>
            </Heading>
            <PaddingContainner top="3rem">
                <FlexContainer justify="center">
                    <ContactForm as={motion.div} variants={fadeInBottomVariant}
                                 initial="hidden"
                                 whileInView="visible">
                        <PaddingContainner bottom="2rem">
                            <FormLabel>Name:</FormLabel>
                            <FormInput type="text" placeholder="entry your name"/>
                        </PaddingContainner>
                        <PaddingContainner bottom="2rem">
                            <FormLabel>Email:</FormLabel>
                            <FormInput type="email" placeholder="entry your email"/>
                        </PaddingContainner>
                        <PaddingContainner bottom="2rem">
                            <FormLabel>Message:</FormLabel>
                            <FormInput as="textarea" placeholder="entry your message"/>
                        </PaddingContainner>
                        <FlexContainer justify="center" responsiveFlex>
                            <Button>Send Message</Button>
                        </FlexContainer>
                    </ContactForm>
                </FlexContainer>
            </PaddingContainner>
        </PaddingContainner>
    )
}

export default Footer