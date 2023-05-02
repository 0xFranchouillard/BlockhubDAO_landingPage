import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Container, Grid, Hidden, List, ListItem} from '@mui/material';
import {HomeStyle} from './Style'
import MobileDrawer from './Mobiledrawer'
import Link from "next/link";
import config from '../../../config.js';
export default function ButtonAppBar() {
    return (
        <HomeStyle>
            <div className='nav-position'>
                <Container>
                    <AppBar position="static" className='Appbar-setting'>
                        <Toolbar>
                            <Grid container>
                                <Grid item xs={5} sm={6}>

                                    <List className='nav-list-bg-rounded'>
                                        <Hidden mdDown>
                                            <ListItem>
                                                <Link legacyBehavior href="#">
                                                    <a>
                                                        <Box component="img" alt='' src="/images/logo.png"
                                                             className='logo'/>
                                                    </a>
                                                </Link>
                                            </ListItem>
                                            <ListItem>
                                                <Button className='nav-btn' href='#portfolio'>
                                                    Portfolio
                                                </Button>
                                            </ListItem>
                                            <ListItem>
                                                <Button className='nav-btn' href='#thesis'>
                                                    Thesis
                                                </Button>
                                            </ListItem>
                                            <ListItem>
                                                <Button className='nav-btn' href='#news'>
                                                    News
                                                </Button>
                                            </ListItem>
                                            <ListItem>
                                                <Button className='nav-btn' href='#faq'>
                                                    FAQ
                                                </Button>
                                            </ListItem>
                                        </Hidden>
                                        <Hidden mdUp>
                                            <ListItem>
                                                <Box component="img" alt='' src="/images/Mobilelogo.svg"
                                                     className='logo-2'/>
                                            </ListItem>
                                        </Hidden>
                                    </List>

                                </Grid>
                                <Grid item xs={7} sm={6}>
                                    <div className='right-nav'>
                                        <List>
                                            <Hidden mdDown>
                                                <ListItem>
                                                    <Link legacyBehavior href={config.discord} target="_blank">
                                                        <a>
                                                            <Box component="img" src="/images/Discord.svg"
                                                                 className='github'/>
                                                        </a>
                                                    </Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Link legacyBehavior href={config.twitter}
                                                          target="_blank">
                                                        <a>
                                                            <Box component="img" src="/images/Twitter.svg"
                                                                 className='github'/>
                                                        </a>
                                                    </Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Link legacyBehavior href={config.mirror}
                                                          target="_blank">
                                                        <a>
                                                            <Box component="img" src="/images/Mirror.svg"
                                                                 className='github'/>
                                                        </a>
                                                    </Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Link legacyBehavior href={config.github}
                                                          target="_blank">
                                                        <a>
                                                            <Box component="img" src="/images/Git.svg"
                                                                 className='github'/>
                                                        </a>
                                                    </Link>
                                                </ListItem>
                                            </Hidden>
                                            <ListItem>
                                                <Link legacyBehavior href={config.mail}>
                                                    <a>
                                                        <Button variant="contained" color="primary" className='aplybtn'> Apply
                                                            now </Button>
                                                    </a>
                                                </Link>
                                            </ListItem>
                                            <Hidden mdUp>
                                                <ListItem>
                                                    <MobileDrawer/>
                                                </ListItem>
                                            </Hidden>
                                        </List>
                                    </div>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Container>
            </div>
        </HomeStyle>
);
}

