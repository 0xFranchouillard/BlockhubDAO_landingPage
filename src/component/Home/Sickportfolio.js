import React from 'react'
import {Box, Container, Grid, Typography, Link} from '@mui/material';
import {HomeStyle} from './Style'

export default function Sickportfolio() {
    return (
        <HomeStyle className='div-element'>
            <Container>
                <Typography variant="h4" gutterBottom className='portfolio-text' id='portfolio'>
                    Our sick portfolio
                </Typography>

                <Typography variant="h5" gutterBottom className='meme'>
                    We're not your run-of-the-mill venture capital DAO; we fuel the next wave of Web 3.0 evolution.
                    Our portfolio stands as a testament to our savvy expertise and our ambitious vision for the future.
                    We handpick the most promising projects, always on the hunt for that next game-changer.
                    Scope out our portfolio and discover why we're the undisputed top dogs in the crypto playground.
                </Typography>
                <Box my={5} className='marginPortFolio'>
                    
                    <Grid container spacing={4} >
                        <Grid item xs={12} sm={6}>
                            <div className='port-card'>
                                <Link href={'https://shutter.network/'} underline="none" target="_blank">
                                <Box component="img" src="/images/Shutter.svg" width="100%" className='shutter-img'/>
                                <div className='shtrpadign'>
                                    <Typography variant="h4" gutterBottom className='Network-text'>
                                        Shutter Network
                                    </Typography>

                                    <Typography variant="h4" gutterBottom className='Apparently-text'>
                                        Apparently, it's about this "MEV" thing. We're not sure what it is, but it
                                        sounded cool
                                    </Typography>
                                </div>
                                </Link>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <div className='port-card'>
                                <Link href={'https://www.raremind.com/'} underline="none" target="_blank">
                                <Box component="img" src="/images/RareMind.svg" width="100%" className='shutter-img'/>
                                <div className='shtrpadign'>
                                    <Typography variant="h4" gutterBottom className='Network-text'>
                                        RareMind
                                    </Typography>

                                    <Typography variant="h4" gutterBottom className='Apparently-text'>
                                        Chess, or "échecs" in French, also means failure. As connoisseurs of the latter,
                                        it was our duty to invest in this gem.
                                    </Typography>
                                </div>
                                </Link>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <div className='port-card'>
                                <Link href={'https://www.hashup.it/'} underline="none" target="_blank">
                                <Box component="img" src="/images/hashup.svg" width="100%" className='shutter-img'/>
                                <div className='shtrpadign'>
                                    <Typography variant="h4" gutterBottom className='Network-text'>
                                        Hash up
                                    </Typography>

                                    <Typography variant="h4" gutterBottom className='Apparently-text'>
                                        Steam-As-A-Service, minus the banhammer. We've been booted off Steam for bot
                                        overload, so we figured a decentralized version couldn't hurt
                                    </Typography>
                                </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className='port-card'>
                                <Link href={'https://www.kairos.loan/'} underline="none" target="_blank">
                                <Box component="img" src="/images/Kairos.svg" width="100%" className='shutter-img'/>
                                <div className='shtrpadign'>
                                    <Typography variant="h4" gutterBottom className='Network-text'>
                                        Kairos
                                    </Typography>

                                    <Typography variant="h4" gutterBottom className='Apparently-text'>
                                        Our admin is drowning in NFTs, and since there's no liquidity, they're stuck. At
                                        least they can get a loan before getting liquidated, thanks to Kairos.
                                    </Typography>
                                </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className='port-card'>
                                <Link href={'https://www.protocol.style/'} underline="none" target="_blank">
                                <Box component="img" src="/images/stylepro.svg" width="100%" className='shutter-img'/>
                                <div className='shtrpadign'>
                                    <Typography variant="h4" gutterBottom className='Network-text'>
                                        STYLE Protocol
                                    </Typography>
                                    <Typography variant="h4" gutterBottom className='Apparently-text'>
                                        Making NFTs slightly more useful by teleporting them into other voids filled
                                        with empty people.
                                    </Typography>
                                </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className='port-card'>
                                <Link href={'https://cvg.finance/'} underline="none" target="_blank">
                                <Box component="img" src="/images/Convergence.svg" width="100%"
                                     className='shutter-img'/>
                                <div className='shtrpadign'>
                                    <Typography variant="h4" gutterBottom className='Network-text'>
                                        Convergence
                                    </Typography>
                                    <Typography variant="h4" gutterBottom className='Apparently-text'>
                                        We grasped about 10% of their pitch, but it sounded fancy. Fingers crossed they
                                        make us rich!
                                    </Typography>
                                </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className='port-card'>
                                <Link href={'https://www.entangle.fi/'} underline="none" target="_blank">
                                    <Box component="img" src="/images/Entangle.svg" width="100%" className='shutter-img'/>
                                    <div className='shtrpadign'>
                                        <Typography variant="h4" gutterBottom className='Network-text'>
                                            Entangle
                                        </Typography>
                                        <Typography variant="h4" gutterBottom className='Apparently-text'>
                                            Layer0, transforming everything into LSD, or something like that. We were sold
                                            on the trippy part, so here we are!
                                        </Typography>
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>

                    {/* card section ended */}
                </Box>
            </Container>
        </HomeStyle>
    )
}
