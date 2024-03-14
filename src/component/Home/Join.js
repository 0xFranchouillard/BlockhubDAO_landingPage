import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { HomeStyle } from './Style';
import config from '../../../config';
import Link from 'next/link';

export default function Hero() {
    return (
        <HomeStyle>
            <div className='join-bg'>
                <Container>
                    <Grid container justifyContent='center' spacing={2}>
                        <Grid item xs={12} md={9} lg={6}>
                            <Typography variant='h4' gutterBottom className='Revolution'>
                                Join the Blockhub Revolution
                            </Typography>
                            <Typography variant='h3' gutterBottom className='thrilled-text'>
                                Got a fresh new ponzi scheme to share? We'd be thrilled to give it a read someday
                            </Typography>
                            <Box textAlign='center'>
                                <Link href={config.mail} passHref>
                                    <Button variant='contained' color='primary' className='geniusbtn'>
                                        <img src='/images/button.svg' />
                                        <Typography sx={{ fontFamily: 'PlusJakartaSans-Bold', textTransform: 'capitalize', fontSize: 14 }}>
                                            Apply now
                                        </Typography>
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </HomeStyle>
    );
}
