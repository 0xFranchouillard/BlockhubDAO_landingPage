import React from 'react';
import { Box, Button, Container, Grid, Hidden, List, ListItem, Typography } from '@mui/material';
import { HomeStyle } from './Style';
import Link from "next/link";
import config from '../../../config.js';

export default function Footer() {
    return (
        <HomeStyle>
            <center>
                <div className='fotterbg'>
                    <Container>
                        <Grid container>
                            <Grid item xs={12} sm={4} md={4} style={{ display: "flex", justifyContent: "flex-start", flexDirection: 'column' }} align="left" gap={2}>
                                <Typography variant="h4" gutterBottom className='gettouch'>
                                    Get in touch
                                </Typography>
                                <Typography variant="h4" gutterBottom className='Apparently-text'>
                                    Are you a game-changing project looking for funding? Contact us at contact@blockhubdao.com
                                </Typography>
                                <Box>
                                    <Link legacyBehavior href={config.mail} target="_blank">
                                        <Button variant="contained" color="primary" className='aplybtn'>
                                            <img src="/images/button.svg" /> Apply now
                                        </Button>
                                    </Link>
                                </Box>
                            </Grid>
                            <Hidden smDown>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Typography variant="h4" gutterBottom className='copy-text'>
                                        Copyright Blockhub DAO 2023
                                    </Typography>
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} sm={4} md={4} paddingLeft={3} className='footer-border' style={{ display: "flex", justifyContent: "flex-start", flexDirection: 'column' }} align="left">
                                <Typography variant="h4" gutterBottom className='gettouch emailmob'>
                                    Email
                                </Typography>
                                <Typography variant="h4" gutterBottom className='Apparently-text email'>
                                    contact@blockhubdao.com
                                </Typography>
                                <Box mt={3}>
                                    <Typography variant="h4" gutterBottom className='gettouch'>
                                        Socials
                                    </Typography>
                                    <div className=' ftrlist '>
                                        <List>
                                            {/*<ListItem>
                                                <a href={config.discord} target="_blank">
                                                    <Box component="img" src="/images/Discord.svg" className='ftricon'/>
                                                </a>
                                            </ListItem>*/}
                                            <ListItem>
                                                <a href={config.twitter} target="_blank">
                                                    <Box component="img" src="/images/Twitter.svg" className='ftricon'/>
                                                </a>
                                            </ListItem>
                                            <ListItem>
                                                <a href={config.mirror} target="_blank">
                                                    <Box component="img" src="/images/Mirror.svg" className='ftricon'/>
                                                </a>
                                            </ListItem>
                                            <ListItem>
                                                <a href={config.github} target="_blank">
                                                    <Box component="img" src="/images/Git.svg" className='ftricon'/>
                                                </a>
                                            </ListItem>
                                        </List>
                                    </div>
                                </Box>
                            </Grid>
                            <Hidden smUp>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Typography variant="h4" gutterBottom className='copy-text'>
                                        Copyright Blockhub DAO 2023
                                    </Typography>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Container>
                </div>
            </center>
        </HomeStyle>
    );
}
