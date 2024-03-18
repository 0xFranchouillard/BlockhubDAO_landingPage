import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { HomeStyle } from './Style';

export default function Investment() {
    return (
        <HomeStyle className='div-element'>
            <Box py={10} id='news'>
                <Container>
                    <Typography variant="h4" gutterBottom className='thesis'>
                        Our latest news
                    </Typography>
                    <Box my={5}>
                        <Grid container spacing={4} justifyContent="center">
                            {newsData.map((newsItem, index) => (
                                <Grid item xs={12} sm={8} md={6} lg={4} key={index}>
                                    <div className='news-card'>
                                        <Link href={newsItem.link} underline="none" target="_blank">
                                            <Box component="img" src={newsItem.imageSrc} width="100%" className='shutter-img'/>
                                            <div className='shtrpadign'>
                                                <Typography variant="h4" gutterBottom className='Asset-text'>
                                                    {newsItem.title}
                                                </Typography>
                                                <Typography variant="h4" gutterBottom className='Apparently-text'>
                                                    {newsItem.description}
                                                </Typography>
                                                <Typography variant="h4" gutterBottom className='March-text'>
                                                    {newsItem.date}
                                                </Typography>
                                            </div>
                                        </Link>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </HomeStyle>
    );
}

const newsData = [
    {
        title: 'STYLE Protocol: One Asset, Many Worlds',
        description: "It’s not a secret: people love to talk about the Metaverse, but very few actually build it. That’s why there is a significant disparity between the concept of Metaverse and the practical reality of how it operates. This is where STYLE Protocol steps in.",
        date: 'March 10th, 2023',
        link: 'https://mirror.xyz/0xb69d053fA14F0CEAD7ec9C3D3153EcFF235E7aCD/CaaYqqi_qlqKPQ6ztzwGpxfTQehyrxaJzvFF2S2RNQI',
        imageSrc: '/images/worlds.svg'
    },
    {
        title: 'Convergence: Inside the New Governance Black Hole',
        description: "We are pleased to share that we have recently invested in Convergence. With their upcoming Sagittarius 0x* ignition on the horizon, we invite you to discover the potential of this promising protocol together.",
        date: 'March 4th, 2023',
        link: 'https://mirror.xyz/0xb69d053fA14F0CEAD7ec9C3D3153EcFF235E7aCD/dt_SFenAicQ8RcjFxyAI3arZEjSxTbuxg-t-vlzOR_Q',
        imageSrc: '/images/Convergence-new.svg'
    },
    {
        title: 'TOP 7: Narratives On Our Watch List',
        description: "2022 was a big year for crypto but three major implosions in the industry (Terra-Luna, 3AC and FTX) lead to a bearish market. Even if liquidity issues and insolvencies will likely continue to be discovered in both CeFi and Defi services.",
        date: 'March 10th, 2023',
        link: 'https://mirror.xyz/0xb69d053fA14F0CEAD7ec9C3D3153EcFF235E7aCD/8HVX8540RQSqih-3gqMiyAaiH5KamjWxo_RTgsPTRFQ',
        imageSrc: '/images/Frage.svg'
    }
];
