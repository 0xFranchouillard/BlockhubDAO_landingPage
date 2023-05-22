import React from 'react'
import {Box, Container, Grid, Link, Typography} from '@mui/material';
import {HomeStyle} from './Style'

export default function Investment() {
    return (
        <HomeStyle>
            <Box py={10}>
                <Container>
                    <Typography variant="h4" gutterBottom className='thesis' id='news'>
                        Our latest news
                    </Typography>
                    <Box my={5}>
                        <Grid container spacing={4} justifyContent="center">
                            <Grid item xs={12} sm={8} md={6} lg={4}>

                                <div className='news-card'>
                                    <Link href="https://mirror.xyz/0xb69d053fA14F0CEAD7ec9C3D3153EcFF235E7aCD/CaaYqqi_qlqKPQ6ztzwGpxfTQehyrxaJzvFF2S2RNQI" underline ="none" target="_blank">
                                    <Box component="img" src="/images/worlds.svg" width="100%" className='shutter-img'/>
                                    <div className='shtrpadign'>
                                        <Typography variant="h4" gutterBottom className='Asset-text'>
                                            STYLE Protocol: One Asset, Many Worlds
                                        </Typography>
                                        <Typography variant="h4" gutterBottom className='Apparently-text'>
                                            It’s not a secret: people love to talk about the Metaverse, but very few
                                            actually build it. That’s why there is a significant disparity between the
                                            concept of Metaverse and the practical reality of how it operates.
                                            This is where STYLE Protocol steps in.
                                        </Typography>
                                        <Typography variant="h4" gutterBottom className='March-text'>
                                            March 10th, 2023
                                        </Typography>
                                    </div>
                                    </Link>
                                </div>

                            </Grid>
                            <Grid item xs={12} sm={8} md={6} lg={4}>

                                <div className='news-card'>
                                    <Link href="https://mirror.xyz/0xb69d053fA14F0CEAD7ec9C3D3153EcFF235E7aCD/dt_SFenAicQ8RcjFxyAI3arZEjSxTbuxg-t-vlzOR_Q" underline ="none" target="_blank">
                                    <Box component="img" src="/images/Convergence-new.svg" width="100%"
                                         className='shutter-img'/>
                                    <div className='shtrpadign'>
                                        <Typography variant="h4" gutterBottom className='Asset-text'>
                                            Convergence: Inside the New Governance Black Hole
                                        </Typography>
                                        <Typography variant="h4" gutterBottom className='Apparently-text'>
                                            We are pleased to share that we have recently invested in Convergence.
                                            With their upcoming Sagittarius 0x* ignition on the horizon, we invite you
                                            to discover the potential of this promising protocol together.

                                        </Typography>
                                        <Typography variant="h4" gutterBottom className='March-text'>
                                            March 4th, 2023
                                        </Typography>
                                    </div>
                                    </Link>
                                </div>

                            </Grid>
                            <Grid item xs={12} sm={8} md={6} lg={4}>

                                <div className='news-card'>
                                    <Link href="https://mirror.xyz/0xb69d053fA14F0CEAD7ec9C3D3153EcFF235E7aCD/8HVX8540RQSqih-3gqMiyAaiH5KamjWxo_RTgsPTRFQ" underline ="none" target="_blank">
                                    <Box component="img" src="/images/Frage.svg" width="100%" className='shutter-img'/>
                                    <div className='shtrpadign'>
                                        <Typography variant="h4" gutterBottom className='Asset-text'>
                                            TOP 7: Narratives On Our Watch List
                                        </Typography>
                                        <Typography variant="h4" gutterBottom className='Apparently-text'>
                                            2022 was a big year for crypto but three major implosions in the industry
                                            (Terra-Luna, 3AC and FTX) lead to a bearish market. Even if liquidity issues
                                            and insolvencies will likely continue to be discovered in both CeFi and Defi
                                            services,
                                        </Typography>
                                        <Typography variant="h4" gutterBottom className='March-text'>
                                            March 10th, 2023
                                        </Typography>
                                    </div>
                                    </Link>
                                </div>

                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </HomeStyle>
    )
}
