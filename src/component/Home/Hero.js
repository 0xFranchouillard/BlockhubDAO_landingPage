import React from 'react'
import {Box, Button, Container, Grid, Typography} from '@mui/material';
import {HomeStyle} from './Style'
import config from "../../../config";
import Link from "next/link";
import ImageSlicer from "./ImageSlicer";
export default function Hero() {
    return (
        <HomeStyle className='hero vectors4-hero' >
            <Box   className=''>
            <Container className='internal-hero'>
                <Typography variant="h4" gutterBottom className="Genius-text">
                    Where Genius and Memes Collide
                </Typography>
                <Grid container justifyContent="center" >
                    <Grid md={10} lg={9}>
                        <Typography variant="h3" gutterBottom className='Blockhub-text'>
                            Welcome to Blockhub DAO - a powerhouse of 60+ chosen chads, primed to stir up another storm in the next cycle!
                            We aren't just your average VC DAO, we're an ecclectic mix of Web 3.0 investment gurus, meme magicians, and masterful trolls
                        </Typography>
                        <Box textAlign="center" >
                            <Link legacyBehavior href={config.mail}>
                                <a >
                                    <Button variant="contained" color="primary" className='geniusbtn'> 
                                            <img src="/images/button.svg "/>                             
                                    Apply
                                        now 
                                        
                                        </Button>
                                </a>
                            </Link>
                            <ImageSlicer/>
                            <Link href="https://hydnsec.com/" target="_blank">
                            </Link>
                        </Box>
                    </Grid>
                                                <Box component="img" src="/images/partnership.svg" width="100%" my={15}/>

                </Grid>
            </Container>    
            </Box>
        </HomeStyle>
    )
}
