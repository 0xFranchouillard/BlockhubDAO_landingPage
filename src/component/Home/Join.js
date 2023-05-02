import React from 'react'
import {Box, Button, Container, Grid, Typography} from '@mui/material';
import {HomeStyle} from './Style'
import config from "../../../config";
import Link from "next/link";
export default function Hero() {
    return (
        <HomeStyle>
            <div className='join-bg '>
                <Container>
                    <Grid container justifyContent="center">
                        <Grid xs={12} md={9} lg={6}>

                            <Typography variant="h4" gutterBottom className='Revolution'>
                                Join the Blockhub Revolution
                            </Typography>
                            <Typography variant="h3" gutterBottom className='thrilled-text'>
                                Got a fresh new ponzi scheme to share? We'd be thrilled to give it a read someday
                            </Typography>
                            <Link legacyBehavior href={config.mail}>
                                <a>
                                    <Box textAlign="center" paddingBottom={5} >
                                    <Button variant="contained" color="primary" className='geniusbtn'> Apply now </Button>
                                </Box>
                                </a>
                            </Link>
                        </Grid>
                    </Grid>

                </Container>
            </div>
        </HomeStyle>
    )
}
