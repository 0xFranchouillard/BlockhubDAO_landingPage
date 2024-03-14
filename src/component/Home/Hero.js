import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { HomeStyle } from './Style';
import config from "../../../config";
import Link from "next/link";
import ImageSlicer from "./ImageSlicer";
import hydnlogo from "../../../public/images/hydnlogo.svg";
import moondaylogo from "../../../public/images/moondaylogo-white.svg";
import Image from 'next/image';

export default function Hero() {
    return (
        <HomeStyle sx={{ zIndex: 10 }} className='hero vectors4-hero'>
            <Box className=''>
                <Container className='internal-hero'>
                    <Typography variant="h4" gutterBottom className="Genius-text">
                        Where Genius and Memes Collide
                    </Typography>
                    <Grid container justifyContent="center">
                        <Grid item md={10} lg={9}>
                            <Typography variant="h3" gutterBottom className='Blockhub-text'>
                                Welcome to Blockhub DAO - a powerhouse of 60+ chosen chads, primed to stir up another storm in the next cycle!
                                We aren't just your average VC DAO, we're an eclectic mix of Web 3.0 investment gurus, meme magicians, and masterful trolls
                            </Typography>
                            <Box textAlign="center">
                                <Link legacyBehavior href={config.mail}>
                                    <Button variant="contained" color="primary" className='geniusbtn'>
                                        <img src="/images/button.svg" />
                                        <Typography sx={{ fontFamily: 'PlusJakartaSans-Bold', textTransform: 'capitalize', fontSize: 14 }}>Apply now</Typography>
                                    </Button>
                                </Link>
                                <ImageSlicer />
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 8, zIndex: 10 }}>
                        <Typography variant='p' className='Blockhub-text'>In partnership with</Typography>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 4, sm: 8 }, alignItems: 'center', justifyContent: 'center' }}>
                            <Link href='https://hydnsec.com/' underline="none" target="_blank">
                                <Image src={hydnlogo} />
                            </Link>
                            <Link href='https://moonday.design/' underline="none" target="_blank">
                                <Image src={moondaylogo} />
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </HomeStyle>
    );
}
