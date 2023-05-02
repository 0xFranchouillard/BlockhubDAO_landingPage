import React from 'react'
import {Box, Button, Container, Grid, Hidden, List, ListItem, Typography} from '@mui/material';
import {HomeStyle} from './Style'
import Link from "next/link";
import config from '../../../config.js';

export default function Footer() {
    return (
        <HomeStyle>
            <center>
            <div className='fotterbg'>
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={4} md={4}>
                            <Typography variant="h4" gutterBottom className='gettouch'>
                                Get in touch
                            </Typography>
                            <Typography variant="h4" gutterBottom className='Apparently-text'>
                                Are you a game-changing project looking for funding? Apply now to join our community of
                                visionaries.
                            </Typography>
                            <Box>
                                <Link legacyBehavior href={config.mail}
                                      target="_blank">
                                    <a>
                                        <Button variant="contained" color="primary" className='ftraply'> Apply now </Button>
                                    </a>
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
                        <Grid item xs={12} sm={4} md={4}>
                            <Typography variant="h4" gutterBottom className='gettouch emailmob '>
                                Email
                            </Typography>
                            <Typography variant="h4" gutterBottom className='Apparently-text email '>
                                contact@blockhubdao.com
                            </Typography>
                            <Box mt={3}>
                                <Typography variant="h4" gutterBottom className='gettouch'>
                                    Socials
                                </Typography>
                                <div className=' ftrlist '>
                                    <List>
                                        <ListItem>
                                            <Link legacyBehavior href={config.discord} target="_blank">
                                                <a>
                                                    <Box component="img" src="/images/Discord.svg" className='ftricon'/>
                                                </a>
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link legacyBehavior href={config.twitter} target="_blank">
                                                <a>
                                                    <Box component="img" src="/images/Twitter.svg" className='ftricon'/>
                                                </a>
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link legacyBehavior
                                                  href={config.mirror}
                                                  target="_blank">
                                                <a>
                                                    <Box component="img" src="/images/Mirror.svg" className='ftricon'/>
                                                </a>
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link legacyBehavior href={config.github} target="_blank">
                                                <a>
                                                    <Box component="img" src="/images/Git.svg" className='ftricon'/>
                                                </a>
                                            </Link>
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
    )
}
