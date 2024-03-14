import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { HomeStyle } from './Style'
import config from "../../../config";
import Link from "next/link";
import ImageSlicer from "./ImageSlicer";
import hydnlogo from "../../../public/images/hydnlogo.svg";
import moondaylogo from "../../../public/images/moondaylogo-white.svg";
import Image from 'next/image';
import { Brightness1 } from '@mui/icons-material';

export default function Hero() {
    return (
        <HomeStyle sx={{zIndex:10}} className='hero vectors4-hero' >
            <Box className=''>
                <Container className='internal-hero'>
                    <Typography variant="h4" gutterBottom className="Genius-text">
                        Where Genius and Memes Collide
                    </Typography>
                    <Grid container justifyContent="center" >
                        <Grid md={10} lg={9} item>
                            <Typography variant="h3" gutterBottom className='Blockhub-text'>
                                Welcome to Blockhub DAO - a powerhouse of 60+ chosen chads, primed to stir up another storm in the next cycle!
                                We aren't just your average VC DAO, we're an ecclectic mix of Web 3.0 investment gurus, meme magicians, and masterful trolls
                            </Typography>
                            <Box textAlign="center" >
                                <Link legacyBehavior href={config.mail}>
                                    <a >
                                        <Button variant="contained" color="primary" className='geniusbtn'>
                                            <img src="/images/button.svg " />
                                            <Typography sx={{fontFamily:'PlusJakartaSans-Bold', textTransform:'capitalize', fontSize:14}}>Apply now</Typography>
                                            </Button>
                                    </a>
                                </Link>
                                <ImageSlicer />
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', gap: 4, flexDirection: 'column', marginTop:8, zIndex:10 }}>
                        <Typography variant='p' className='Blockhub-text'>In partnership with</Typography>
                        <Box sx={{ display: 'flex', gap: 8, flexDirection: 'row', flexWrap: 'wrap', alignItems:'center', justifyContent:'center' }}>
                            <Link href='https://hydnsec.com/' underline="none" target="_blank" className="partners">
                                <Image src={hydnlogo} />
                            </Link>
                            <Link href='https://moonday.design/' underline="none" target="_blank" className="partners">
                                <Image src={moondaylogo} />
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </HomeStyle>
    )
}
