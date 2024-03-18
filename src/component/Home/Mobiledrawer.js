import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { HomeStyle } from './Style';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import config from "../../../config";

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    return (
        <HomeStyle>
            <React.Fragment key='left'>
                <Button onClick={toggleDrawer('left', true)}>
                    <MenuIcon fontSize='large' color="menu-setting"/>
                </Button>
                <Drawer
                    anchor='left'
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            background: "rgba(22, 22, 22, 0.8)",
                        },
                    }}
                >
                    <Box
                        sx={{ width: 'auto' }}
                        role="presentation"
                        onClick={toggleDrawer('left', false)}
                        onKeyDown={toggleDrawer('left', false)}
                    >
                        <div className='mob-draw'>
                            <List>
                                <ListItem>
                                    <ListItemButton className='nav-btn' sx={{ color: "white" }} href='#portfolio'>
                                        Portfolio
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton className='nav-btn' sx={{ color: "white" }} href='#thesis'>
                                        Thesis
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton className='nav-btn' sx={{ color: "white" }} href='#news'>
                                        News
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton className='nav-btn' sx={{ color: "white" }} href='#faq'>
                                        FAQ
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <a href={config.twitter} target="_blank">
                                        <Box component="img" src="/images/Twitter.svg" className='github'/>
                                    </a>
                                </ListItem>
                                <ListItem>
                                    <a href={config.mirror} target="_blank">
                                        <Box component="img" src="/images/Mirror.svg" className='github'/>
                                    </a>
                                </ListItem>
                                <ListItem>
                                    <a href={config.github} target="_blank">
                                        <Box component="img" src="/images/Git.svg" className='github'/>
                                    </a>
                                </ListItem>
                            </List>
                        </div>
                    </Box>
                </Drawer>
            </React.Fragment>
        </HomeStyle>
    );
}
