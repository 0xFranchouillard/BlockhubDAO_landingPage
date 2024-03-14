import React, { useState, useEffect, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import config from '../../../config.js';
import { HomeStyle } from './Style';
import MobileDrawer from './Mobiledrawer';

export default function ButtonAppBar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [navMarginTop, setNavMarginTop] = useState('10%');
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            if (navRef.current) {
                const newMarginTop = window.scrollY > 80 ? '5%' : (navRef.current.offsetHeight + 10) + 'px';
                setNavMarginTop(newMarginTop);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HomeStyle>
            <Hidden mdDown>
                <div className='nav-position'>
                    <Container>
                        <AppBar position="static" className='Appbar-setting '>
                            <Toolbar>
                                <Grid container>
                                    <Grid item xs={5} sm={6} style={{
                                    display: "flex", 
                                    alignItems: "center"
                                }}>
                                        <List className='nav-list-bg-rounded'>
                                            <Hidden mdDown>
                                                <ListItem>
                                                    <Link legacyBehavior href="#">
                                                        <a>
                                                            <Box component="img" alt='' src="/images/logoImgLight-64.svg" className='logo aNavbar'/>
                                                        </a>
                                                    </Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Button className='nav-btn' href='#portfolio'>Portfolio</Button>
                                                </ListItem>
                                                <ListItem>
                                                    <Button className='nav-btn' href='#thesis'>Thesis</Button>
                                                </ListItem>
                                                <ListItem>
                                                    <Button className='nav-btn' href='#news'>News</Button>
                                                </ListItem>
                                                <ListItem>
                                                    <Button className='nav-btn' href='#faq'>FAQ</Button>
                                                </ListItem>
                                            </Hidden>
                                        </List>
                                    </Grid>
                                    <Grid item xs={7} sm={6}>
                                        <div className='right-nav'>
                                            <List>
                                                <Hidden mdDown>
                                                    <ListItem>
                                                        <a href={config.twitter} target="_blank" rel="noopener noreferrer" className='aNavbar'>
                                                            <Box component="img" src="/images/Twitter.svg" className='navButton'/>
                                                        </a>
                                                    </ListItem>
                                                    <ListItem>
                                                        <a href={config.mirror} target="_blank" rel="noopener noreferrer" className='aNavbar'>
                                                            <Box component="img" src="/images/Mirror.svg" className='navButton'/>
                                                        </a>
                                                    </ListItem>
                                                    <ListItem>
                                                        <a href={config.github} target="_blank" rel="noopener noreferrer" className='aNavbar'>
                                                            <Box component="img" src="/images/Git.svg" className='navButton'/>
                                                        </a>
                                                    </ListItem>
                                                </Hidden>
                                                <ListItem>
                                                    <a href={config.mail}>
                                                        <Button variant="contained" color="primary" className='aplybtn'> 
                                                            <img src="/images/button.svg "/>
                                                            <Typography sx={{fontFamily:'PlusJakartaSans-Bold', textTransform:'capitalize', fontSize:14}}>Apply now</Typography>
                                                        </Button>
                                                    </a>
                                                </ListItem>
                                            </List>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </Container>
                </div>
            </Hidden>
            <Hidden mdUp>
                {/* Mobile Navbar */}
                <div className='nav-position'>
                    <Container ref={navRef}>
                        <AppBar className='Appbar-setting nav-position'>
                            <Toolbar>
                                <Grid container>
                                    <Grid item xs={5} sm={6}>
                                        <List className='nav-list-bg-rounded'>
                                            <Hidden mdUp>
                                                <ListItem>
                                                    <Box component="img" alt='' src="/images/Mobilelogo.svg" className='logo-2'/>
                                                </ListItem>
                                            </Hidden>
                                        </List>
                                    </Grid>
                                    <Grid item xs={7} sm={6}>
                                        <div className='right-nav'>
                                            <List>
                                                <Hidden mdDown>
                                                    <ListItem>
                                                        <a href={config.twitter} target="_blank" rel="noopener noreferrer" className='aNavbar'>
                                                            <Box component="img" src="/images/Twitter.svg" className='navButton'/>
                                                        </a>
                                                    </ListItem>
                                                    <ListItem>
                                                        <a href={config.mirror} target="_blank" rel="noopener noreferrer" className='aNavbar'>
                                                            <Box component="img" src="/images/Mirror.svg" className='navButton'/>
                                                        </a>
                                                    </ListItem>
                                                    <ListItem>
                                                        <a href={config.github} target="_blank" rel="noopener noreferrer" className='aNavbar'>
                                                            <Box component="img" src="/images/Git.svg" className='navButton'/>
                                                        </a>
                                                    </ListItem>
                                                </Hidden>
                                                <ListItem>
                                                    <a href={config.mail}>
                                                        <Button variant="contained" color="primary" className='aplybtn'> 
                                                            <img src="/images/button.svg "/>
                                                            <Typography sx={{fontFamily:'PlusJakartaSans-Bold', textTransform:'capitalize', fontSize:14}}>Apply now</Typography>
                                                        </Button>
                                                    </a>
                                                </ListItem>
                                            </List>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </Container>
                </div>
                {/* Responsive Navbar */}
                <div className='nav-position' id="navbar-responsive">
                    <Container>
                        <AppBar className='Appbar-setting' >
                            <Toolbar style={{ padding: '12px 12px 12px 12px', background: 'rgba(22, 22, 22, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(16px)', borderRadius: '1000px', width: '95%', marginTop: navMarginTop, marginRight: 'auto', marginLeft: 'auto', transition: 'margin-top 0.2s ease'}}>
                                <List style={{ width: '90%', position: "fixed"}}>
                                    <Hidden mdUp>
                                        <ListItem>
                                            <Link legacyBehavior href="#">
                                                <a>
                                                    <Box component="img" alt='' src="/images/logo.png" className='logo aNavbar'/>
                                                </a>
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Button className='nav-btn' href='#portfolio'>Portfolio</Button>
                                        </ListItem>
                                        <ListItem>
                                            <Button className='nav-btn' href='#thesis'>Thesis</Button>
                                        </ListItem>
                                        <ListItem>
                                            <Button className='nav-btn' href='#news'>News</Button>
                                        </ListItem>
                                        <ListItem>
                                            <Button className='nav-btn' href='#faq'>FAQ</Button>
                                        </ListItem>
                                    </Hidden>
                                </List>
                            </Toolbar>
                        </AppBar>
                    </Container>
                </div>
            </Hidden>
        </HomeStyle>
    );
}
