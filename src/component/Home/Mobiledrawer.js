import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {HomeStyle} from './Style'
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import config from "../../../config";

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };


    return (
        <HomeStyle>
            {['left',].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon fontSize='large'
                                                                           color="menu-setting"/></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        sx={{
                            '& .MuiDrawer-paper': {
                                background: "rgba(22, 22, 22, 0.8)",
                            },
                        }}
                    >
                        <Box
                            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
                            role="presentation"
                            onClick={toggleDrawer(anchor, false)}
                            onKeyDown={toggleDrawer(anchor, false)}
                        >
                            <div className='mob-draw'>
                                <List>
                                    <ListItem>
                                        <ListItemButton className='nav-btn' sx={{color: "white"}} href='#portfolio'>

                                            Portfolio
                                        </ListItemButton>

                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton className='nav-btn' sx={{color: "white"}} href='#thesis'>
                                            Thesis
                                        </ListItemButton>

                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton className='nav-btn' sx={{color: "white"}} href='#news'>

                                            News
                                        </ListItemButton>

                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton className='nav-btn' sx={{color: "white"}} href='#faq'>
                                            FAQ
                                        </ListItemButton>

                                    </ListItem>
                                    {/*<ListItem>
                                        <Link legacyBehavior href={config.discord}
                                              target="_blank">
                                            <a>
                                                <Box component="img" src="/images/Discord.svg"
                                                     className='github'/>
                                            </a>
                                        </Link>
                                    </ListItem>*/}
                                    <ListItem>
                                        <a href={config.twitter}
                                              target="_blank">
                                            <a>
                                                <Box component="img" src="/images/Twitter.svg"
                                                     className='github'/>
                                            </a>
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                    <a
                                          href={config.mirror}
                                          target="_blank">
                                        <a>
                                            <Box component="img" src="/images/Mirror.svg"
                                                 className='github'/>
                                        </a>
                                    </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href={config.github}
                                              target="_blank">
                                            <a>
                                                <Box component="img" src="/images/Git.svg"
                                                     className='github'/>
                                            </a>
                                        </a>
                                    </ListItem>


                                </List>
                            </div>
                        </Box>
                    </Drawer>
                </React.Fragment>
            ))}
        </HomeStyle>
    );
}
