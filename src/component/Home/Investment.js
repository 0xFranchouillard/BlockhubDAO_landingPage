import React from 'react';
import { Box, Container, Grid, ListItem,List, Typography } from '@mui/material';
import { HomeStyle } from './Style';

const investmentItems = [
    {
        title: 'Ponzi',
        description: "If it's not a ponzi, how are we supposed to make money, right?"
    },
    {
        title: 'HODL Forever',
        description: "It's not about ethics; we just can't figure out our multisig."
    },
    {
        title: 'Buzzwords Bonanza',
        description: 'Web 3.0, NFT, Dogecoins, Play 2 Earn, Metaverse – the more you use, the more likely we\'ll invest.'
    },
    {
        title: 'Anime Girls',
        description: "Our members dig 'em. So, sprinkle some in your project and pitch deck to pique our interest."
    },
    {
        title: 'elkmar.eth',
        description: 'Just sharing it in case you want me to read your pitch deck a little bit quicker'
    },
    {
        title: 'Memes Galore',
        description: 'A project isn\'t complete without a healthy dose of memes. Show us your dankest, and we\'ll be all ears.'
    }
];

export default function Investment() {
    return (
        <HomeStyle>
            <div className='vectors4-investment' id='thesis'>
                <Box py={10}>
                    <Container>
                        <Typography variant="h4" gutterBottom className='thesis'>
                            Our investment thesis
                        </Typography>
                        <Grid container justifyContent="center">
                            <Grid item lg={11}>
                                <Box my={5}>
                                    <Grid container>
                                        {investmentItems.map((item, index) => (
                                            <Grid item xs={12} md={6} key={index}>
                                                <List className='list-investment'>
                                                <ListItem >
                                                    <Box component="img" alt='' src="/images/Tick.svg" />
                                                    </ListItem>
                                                    <ListItem>
                                                    <div>
                                                        <Typography variant="h4" gutterBottom className='Ponzi'>
                                                            {item.title}
                                                        </Typography>
                                                        <Typography variant="h5" gutterBottom className='thrilled-text-2'>
                                                            {item.description}
                                                        </Typography>
                                                    </div>
                                                </ListItem>
                                                </List>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
        </HomeStyle>
    );
}
