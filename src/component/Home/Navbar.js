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
            <Hidden mdDown>
            <div className='nav-position'>
                <Container>
                   
                    <AppBar position="static" className='Appbar-setting '>
                        <Toolbar>
                            <Grid container>
                                <Grid item xs={5} sm={6}
                                
                                style={{
                                    display: "flex", 
                                    alignItems: "center"
                                }}
                                                    
                                >
                                    <List className='nav-list-bg-rounded'>
                                        <Hidden mdDown>
                                            <ListItem>
                                                <Link legacyBehavior href="#">
                                                    <a>
                                                        <Box component="img" alt='' src="/images/logo.png"
                                                             className='logo aNavbar'/>
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
                                      
                                    </List>
                                </Grid>
                               <Grid item xs={7} sm={6}>
                                    <div className='right-nav'>
                                        <List>
                                            <Hidden mdDown>

                                                <ListItem>
                                                    <a href={config.twitter} target="_blank" rel="noopener noreferrer" className='aNavbar'>
                                                            <Box component="img" src="/images/Twitter.svg"
                                                                 className='navButton'/>
                                                    </a>
                                                </ListItem>
                                                <ListItem >
                                                    <a href={config.mirror}
                                                          target="_blank" rel="noopener noreferrer" className='aNavbar'>
                                                            <Box component="img" src="/images/Mirror.svg"
                                                                 className='navButton'/>
                                                    </a>
                                                </ListItem>
                                                <ListItem
                                                
                                                >
                                                    <a href={config.github}
                                                          target="_blank" rel="noopener noreferrer"
                                                          className='aNavbar'
                                                          >
                                                            <Box component="img" src="/images/Git.svg"
                                                                 className='navButton'
                                                                 />
                                                    </a>
                                                </ListItem>
                                            </Hidden>
                                            <ListItem>
                                                <a href={config.mail}>
                                                        <Button variant="contained" color="primary" className='aplybtn'> 
                                                        <img src="/images/button.svg "/>   
                                                        Apply
                                                            now </Button>
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
<div className='nav-position'>
    <Container>
<AppBar className='Appbar-setting nav-position'>
    <Toolbar>
        <Grid container>
            <Grid item xs={5} sm={6}
            
            style={{
                display: "flex", 
                alignItems: "center"
            }}
                                
            >
                <List className='nav-list-bg-rounded'>
                   
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
                                <a href={config.twitter} target="_blank" rel="noopener noreferrer" className='aNavbar'>
                                        <Box component="img" src="/images/Twitter.svg"
                                             className='navButton'/>
                                </a>
                            </ListItem>
                            <ListItem >
                                <a href={config.mirror}
                                      target="_blank" rel="noopener noreferrer" className='aNavbar'>
                                        <Box component="img" src="/images/Mirror.svg"
                                             className='navButton'/>
                                </a>
                            </ListItem>
                            <ListItem
                            
                            >
                                <a href={config.github}
                                      target="_blank" rel="noopener noreferrer"
                                      className='aNavbar'
                                      >
                                        <Box component="img" src="/images/Git.svg"
                                             className='navButton'
                                             />
                                </a>
                            </ListItem>
                        </Hidden>
                        <ListItem>
                            <a href={config.mail}>
                                    <Button variant="contained" color="primary" className='aplybtn'> 
                                    <img src="/images/button.svg "/>   
                                    Apply
                                        now </Button>
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
<div className='nav-position' style={{

}}>
    <Container>
<AppBar className='Appbar-setting' style={{
    marginTop: '20%',
    background: 'rgba(22, 22, 22, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(16px)',
    borderRadius: '1000px',

}}>
    <Toolbar>
            <List style={{

               
               

               
            }}>
            <Hidden mdUp>
                        <ListItem>
                            <Link legacyBehavior href="#">
                                <a>
                                    <Box component="img" alt='' src="/images/logo.png"
                                         className='logo aNavbar'/>
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
            </List>
 
    </Toolbar>
</AppBar>
</Container>
<Container>
    <AppBar className='Appbar-setting' style={{
    marginTop: '40%',
    padding: '0',
   
}}>
    <Toolbar style={{
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
 flexDirection: 'column'
}}>
            <List style={{

                position: "fixed",
               

               
            }}>
            <Hidden mdUp>
            <ListItem>
                                                    <a href={config.twitter} target="_blank" rel="noopener noreferrer" className='aNavbar'>
                                                            <Box component="img" src="/images/Twitter.svg"
                                                                 className='navButton'/>
                                                    </a>
                                                </ListItem>
                                                <ListItem >
                                                    <a href={config.mirror}
                                                          target="_blank" rel="noopener noreferrer" className='aNavbar'>
                                                            <Box component="img" src="/images/Mirror.svg"
                                                                 className='navButton'/>
                                                    </a>
                                                </ListItem>
                                                <ListItem
                                                
                                                >
                                                    <a href={config.github}
                                                          target="_blank" rel="noopener noreferrer"
                                                          className='aNavbar'
                                                          >
                                                            <Box component="img" src="/images/Git.svg"
                                                                 className='navButton'
                                                                 />
                                                    </a>
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



