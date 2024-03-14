<<<<<<< HEAD
import React from 'react';
import { Box, Button, Container, Grid, Hidden, List, ListItem, Typography } from '@mui/material';
import { HomeStyle } from './Style';
=======
import React from 'react'
import { Box, Button, Container, Grid, Hidden, List, ListItem, Typography } from '@mui/material';
import { HomeStyle } from './Style'
>>>>>>> 0509969636f20079b06e4b80e71c4ca23bf713e6
import Link from "next/link";
import config from '../../../config.js';

export default function Footer() {
    return (
        <HomeStyle>
            <center>
                <div className='fotterbg'>
                    <Container>
<<<<<<< HEAD
                        <Grid container>
                            <Grid item xs={12} sm={4} md={4} style={{ display: "flex", justifyContent: "flex-start", flexDirection: 'column' }} align="left" gap={2}>
=======
                        <Grid container >
                            <Grid item xs={12} sm={4} md={4}
                                style={{ display: "flex", justifyContent: "flex-start", flexDirection: 'column' }}
                                align="left"
                                gap={2}
                            >
>>>>>>> 0509969636f20079b06e4b80e71c4ca23bf713e6
                                <Typography variant="h4" gutterBottom className='gettouch'>
                                    Get in touch
                                </Typography>
                                <Typography variant="h4" gutterBottom className='Apparently-text'>
                                    Are you a game-changing project looking for funding? Contact us at contact@blockhubdao.com
                                </Typography>
                                <Box>
<<<<<<< HEAD
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
=======
                                    <Link legacyBehavior href={config.mail}
                                        target="_blank">
                                        <a>
                                            <Button variant="contained" color="primary" className='aplybtn'>

                                                <img src="/images/button.svg " />
                                                <Typography sx={{ fontFamily: 'PlusJakartaSans-Bold', textTransform: 'capitalize', fontSize: 14 }}>Apply now</Typography>
                                            </Button>
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
                            <Grid item xs={12} sm={4} md={4} paddingLeft={3}
                                className='footer-border'
                                style={{
                                    display: "flex", justifyContent: "flex-start", flexDirection: 'column',

                                }}


                                align="left"
                            >
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
                                            {/*<ListItem>
                                            <a href={config.discord} target="_blank">
                                                    <Box component="img" src="/images/Discord.svg" className='ftricon'/>
                                            </a>
                                        </ListItem>*/}
                                            <ListItem>
                                                <a href={config.twitter} target="_blank">
                                                    <Box component="img" src="/images/Twitter.svg" className='ftricon' />
                                                </a>
                                            </ListItem>
                                            <ListItem>
                                                <a href={config.mirror} target="_blank">
                                                    <Box component="img" src="/images/Mirror.svg" className='ftricon' />
                                                </a>
                                            </ListItem>
                                            <ListItem>
                                                <a href={config.github} target="_blank">
                                                    <Box component="img" src="/images/Git.svg" className='ftricon' />
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

>>>>>>> 0509969636f20079b06e4b80e71c4ca23bf713e6
                    </Container>
                </div>
            </center>
        </HomeStyle>
    );
}
