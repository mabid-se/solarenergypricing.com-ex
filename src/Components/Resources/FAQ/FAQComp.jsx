import React, { useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQComp = () => {
    const faqList = [
        {
            qNo: "faq1",
            question: "how does SolarEnergyPricing work?",
            answer: "After you enter your unique home information into our secure system, we’ll analyze your roof specs, sun exposure ratings specific to your neighborhood, and your local utility rate schedule. Our proprietary technology completes these tasks within minutes, matching you with fully certified, pre-screened solar installation companies in your area. These installers will offer bids on a solar system custom designed for your home, giving you multiple options to choose from. No high pressure sales; just a streamlined, simple platform for you to install your solar system at the lowest possible cost. Because when solar companies compete for your business, you come out on top.",
        },
        {
            qNo: "faq2",
            question: "What makes you different from the other solar guys?",
            answer: "If you go directly to any solar installer, you’re going to get one offer. With us, you instantly get multiple offers, giving you the negotiating leverage you need to secure the best deal. By providing side by side installation quote comparisons, including all rebates and incentives, along with long term solar energy rates, you can make an informed decision before committing to a solar installer.",
        },
        {
            qNo: "faq3",
            question: "Which states is SolarEnergyPricing in?",
            answer: "We’re in every state. Our solar installation partners have all been pre-screened, ensuring our homeowners that any company they contract through us will be properly certified, licensed, bonded and insured.",
        },
        {
            qNo: "faq4",
            question: "Does SolarEnergyPricing install solar panels?",
            answer: "No, SolarEnergyPricing is not a solar system installer. We’re a platform providing a marketplace for over 500 solar companies nationwide who all compete for homeowner business. The installers, manufacturers, and finance companies you’ll find on SolarEnergyPricing all go through a rigorous vetting process to ensure they’re qualified to service you, the end user. Ultimately, one of our pre-screened and approved solar installers will design and implement your system. We specifically set our company up this way to provide homeowners with an unbiased resource to go solar - it doesn’t matter to us who you end up choosing, we just want you to choose what’s best for you. Using our site is absolutely, 100% free and there is zero obligation for you to go to contract with any installer you find here.",
        },
        {
            qNo: "faq5",
            question: "Will SolarEnergyPricing evaluate the solar quotes I’ve already received?",
            answer: "Yes. Our network of partners can look at your current quote, and in most cases they will beat it. They joined our platform to win your business after all. After you’ve compared your current bid against the ones you received here, you can gauge our value in terms of quality and cost to make the most informed decision possible.",
        },
        {
            qNo: "faq6",
            question: "How much does SolarEnergyPricing charge?",
            answer: "SolarEnergyPricing is a 100% free service. We will never charge homeowners to use our platform.",
        },
        {
            qNo: "faq7",
            question: "So how does SolarEnergyPricing make money?",
            answer: "Solar Installers have long had to pay very large marketing costs to reach consumers and go to contract with homeowners. Our platform eliminates those costs for our partners, and, in turn, our solar partners pay us a small fee to use our site. This allows us to provide our service free of charge to homeowners nationwide.",
        },
        {
            qNo: "faq8",
            question: "How does SolarEnergyPricing remain unbiased?",
            answer: "All of our solar providers pay the same fee to use our platform, giving them each an equal opportunity to win homeowners’ business. The value we provide is in unbiased choice - without this, we simply wouldn’t exist. Meaning we gain more traffic and more users by positive word of mouth marketing - homeowners who are happy with our platform typically tell neighbors, family and friends about us, allowing us to grow. So it’s in our own best interest to provide unbiased, transparent choice to our site users.",
        },
        {
            qNo: "faq9",
            question: "What kinds of equipment do your solar partners use?",
            answer: "Part of our initial pre-screening and vetting process is zeroing in on quality of equipment used by our licensed, bonded and insured solar partners. Some of the most common equipment brands are Enphase, SolarWorld, LG, and Solaredge, along with quite a few others.",
        },
        {
            qNo: "faq10",
            question: "Does SolarEnergyPricing offer lease and purchase options?",
            answer: "Our solar installer partners provide every option out there, and will be happy to go through them all with you to ensure maximum savings.",
        },
        {
            qNo: "faq11",
            question: "How will my solar installer know which financing option is right for me?",
            answer: "Our solar partners will walk you through all options, and the choice is ultimately yours to make. That said, based on your income, credit score, and DTI (debt to income ratio), the solar installer you choose should be able to guide you into the most cost effective and sensible option to get your system up and running. Solar loans (and leases as well) are very popular, as you’ll have the option to install your system with zero out of pocket.",
        },
        {
            qNo: "faq12",
            question: "So I can go solar with $0 down?",
            answer: "100%. We’ll walk you through this process, but rest assured that many homeowners using SolarEnergyPricing get their entire solar system installed without paying anything upfront.",
        },
        {
            qNo: "faq13",
            question: "Will I qualify for rebates, incentives and tax credits?",
            answer: "Most homeowners do, and SolarEnergyPricing is EXTREMELY good at getting these benefits into your hands. Our solar partners’ extensive experience with rebates, incentives, and tax credits will be immediately apparent upon your first contact with them.",
        },
        {
            qNo: "faq14",
            question: "Will you cater to my home’s specific solar needs?",
            answer: "Yes. Our wide network of partners have custom designed and installed solar systems for every type of home imaginable. No matter what your home’s specs are, we’ll be able to accommodate them.",
        },
        {
            qNo: "faq15",
            question: "Do I sign a contract with SolarEnergyPricing?",
            answer: "No - you’ll sign your contract with the solar installer you end up choosing. Think of us as a liaison between you and the solar companies; we’re here to help you match up with the provider who makes the most sense for you and your home, that’s it!",
        },
    ];

    const [expanded, setExpanded] = useState();

    const faqSectChangeHandler = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    };

    return (
        <>
            <Typography variant="h6" fontStyle="bold" textTransform="capitalize" marginY={1}>
                frequently asked questions
            </Typography>

            {
                Object.entries(faqList).map(
                    ([key, value]) => {
                        return (
                            <Accordion expanded={expanded === value.qNo} onChange={faqSectChangeHandler(value.qNo)}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="${qNo}-content" id="${qNo}-header">
                                    <Typography variant="subtitle1" fontWeight={700} textTransform="capitalize">
                                        {
                                            value.question
                                        }
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography variant="body1">
                                        {value.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        );
                    }
                )
            }
        </>
    );
};

export default FAQComp;
