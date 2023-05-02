import React from 'react'
import {Box, Container, Grid, List, ListItem, Typography} from '@mui/material';
import {HomeStyle} from './Style'

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
                                        <Grid item xs={12} md={6}>
                                            <List className='list-investment'>
                                                <ListItem>
                                                    <Box component="img" alt='' src="/images/Tick.svg"/>
                                                </ListItem>
                                                <ListItem>
                                                    <div>
                                                        <Typography variant="h4" gutterBottom className='Ponzi'>
                                                            Ponzi
                                                        </Typography>


                                                        <Typography variant="h5" gutterBottom
                                                                    className='thrilled-text-2'>
                                                            If it's not a ponzi, how are we supposed to make money,
                                                            right?
                                                        </Typography>
                                                    </div>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                        {/* started */}
                                        <Grid item xs={12} md={6}>
                                            <List className='list-investment'>
                                                <ListItem>
                                                    <Box component="img" alt='' src="/images/Tick.svg"/>
                                                </ListItem>
                                                <ListItem>
                                                    <div>
                                                        <Typography variant="h4" gutterBottom className='Ponzi'>
                                                            HODL Forever
                                                        </Typography>


                                                        <Typography variant="h5" gutterBottom
                                                                    className='thrilled-text-2'>
                                                            It's not about ethics; we just can't figure out our
                                                            multisig.
                                                        </Typography>
                                                    </div>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                        {/* ended */}
                                        {/* started */}
                                        <Grid item xs={12} md={6}>
                                            <List className='list-investment'>
                                                <ListItem>
                                                    <Box component="img" alt='' src="/images/Tick.svg"/>
                                                </ListItem>
                                                <ListItem>
                                                    <div>
                                                        <Typography variant="h4" gutterBottom className='Ponzi'>
                                                            Buzzwords Bonanza
                                                        </Typography>


                                                        <Typography variant="h5" gutterBottom
                                                                    className='thrilled-text-2'>
                                                            Web 3.0, NFT, Dogecoins, Play 2 Earn, Metaverse – the more
                                                            you use, the more likely we'll invest.
                                                        </Typography>
                                                    </div>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                        {/* ended */}
                                        {/* started */}
                                        <Grid item xs={12} md={6}>
                                            <List className='list-investment'>
                                                <ListItem>
                                                    <Box component="img" alt='' src="/images/Tick.svg"/>
                                                </ListItem>
                                                <ListItem>
                                                    <div>
                                                        <Typography variant="h4" gutterBottom className='Ponzi'>
                                                            Anime Girls
                                                        </Typography>


                                                        <Typography variant="h5" gutterBottom
                                                                    className='thrilled-text-2'>
                                                            Our members dig 'em. So, sprinkle some in your project and
                                                            pitch deck to pique our interest.
                                                        </Typography>
                                                    </div>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                        {/* ended */}
                                        {/* started */}
                                        <Grid item xs={12} md={6}>
                                            <List className='list-investment'>
                                                <ListItem>
                                                    <Box component="img" alt='' src="/images/Tick.svg"/>
                                                </ListItem>
                                                <ListItem>
                                                    <div>
                                                        <Typography variant="h4" gutterBottom className='Ponzi'>
                                                            elkmar.eth
                                                        </Typography>


                                                        <Typography variant="h5" gutterBottom
                                                                    className='thrilled-text-2'>
                                                            Just sharing it in case you want me to read your pitch deck
                                                            a little bit quicker
                                                        </Typography>
                                                    </div>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                        {/* ended */}
                                        {/* started */}
                                        <Grid item xs={12} md={6}>
                                            <List className='list-investment'>
                                                <ListItem>
                                                    <Box component="img" alt='' src="/images/Tick.svg"/>
                                                </ListItem>
                                                <ListItem>
                                                    <div>
                                                        <Typography variant="h4" gutterBottom className='Ponzi'>
                                                            Memes Galore
                                                        </Typography>


                                                        <Typography variant="h5" gutterBottom
                                                                    className='thrilled-text-2'>
                                                            A project isn't complete without a healthy dose of memes.
                                                            Show us your dankest, and we'll be all ears.
                                                        </Typography>
                                                    </div>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                        {/* ended */}

                                    </Grid>

                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
        </HomeStyle>
    )
}
