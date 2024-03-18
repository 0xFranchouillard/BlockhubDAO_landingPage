import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { HomeStyle } from './Style';

// Composant pour une carte de portfolio
const PortfolioCard = ({ href, imageSrc, title, description }) => (
    <Grid item xs={12} sm={6}>
        <div className='port-card'>
            <Link href={href} underline="none" target="_blank">
                <Box component="img" src={imageSrc} width="100%" className='shutter-img' />
                <div className='shtrpadign'>
                    <Typography variant="h4" gutterBottom className='Network-text'>
                        {title}
                    </Typography>
                    <Typography variant="h4" gutterBottom className='Apparently-text'>
                        {description}
                    </Typography>
                </div>
            </Link>
        </div>
    </Grid>
);

export default function Sickportfolio() {
    return (
        <HomeStyle className='div-element'>
            <Box paddingTop={20} id='portfolio'>
                <Container>
                    {/* Titre et description */}
                    <Typography variant="h4" gutterBottom className='portfolio-text'>
                        Our sick portfolio
                    </Typography>
                    <Typography variant="h5" gutterBottom className='meme'>
                        We're not your run-of-the-mill venture capital DAO; we fuel the next wave of Web 3.0 evolution.
                        Our portfolio stands as a testament to our savvy expertise and our ambitious vision for the future.
                        We handpick the most promising projects, always on the hunt for that next game-changer.
                        Scope out our portfolio and discover why we're the undisputed top dogs in the crypto playground.
                    </Typography>

                    {/* Liste des cartes de portfolio */}
                    <Box my={5} className='marginPortFolio'>
                        <Grid container spacing={4}>
                            <PortfolioCard
                                href='https://shutter.network/'
                                imageSrc='/images/Shutter.svg'
                                title='Shutter Network'
                                description="Apparently, it's about this 'MEV' thing. We're not sure what it is, but it sounded cool."
                            />
                            <PortfolioCard
                                href='https://www.raremind.com/'
                                imageSrc='/images/RareMind.svg'
                                title='RareMind'
                                description="Chess, or 'échecs' in French, also means failure. As connoisseurs of the latter, it was our duty to invest in this gem."
                            />
                            <PortfolioCard
                                href='https://www.hashup.it/'
                                imageSrc='/images/hashup.svg'
                                title='Hash up'
                                description="Steam-As-A-Service, minus the banhammer. We've been booted off Steam for bot overload, so we figured a decentralized version couldn't hurt."
                            />
                            <PortfolioCard
                                href='https://www.kairos.loan/'
                                imageSrc='/images/Kairos.svg'
                                title='Kairos'
                                description="Our admin is drowning in NFTs, and since there's no liquidity, they're stuck. At least they can get a loan before getting liquidated, thanks to Kairos."
                            />
                            <PortfolioCard
                                href='https://www.protocol.style/'
                                imageSrc='/images/stylepro.svg'
                                title='STYLE Protocol'
                                description="Making NFTs slightly more useful by teleporting them into other voids filled with empty people."
                            />
                            <PortfolioCard
                                href='https://cvg.finance/'
                                imageSrc='/images/Convergence.svg'
                                title='Convergence'
                                description="We grasped about 10% of their pitch, but it sounded fancy. Fingers crossed they make us rich!"
                            />
                            <PortfolioCard
                                href='https://www.entangle.fi/'
                                imageSrc='/images/Entangle.svg'
                                title='Entangle'
                                description="Layer0, transforming everything into LSD, or something like that. We were sold on the trippy part, so here we are!"
                            />
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </HomeStyle>
    );
}
