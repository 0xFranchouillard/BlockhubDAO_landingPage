import React from 'react'
import { Container, Grid, List, ListItem, Hidden, Typography, Box, Button } from '@mui/material';
import { HomeStyle } from './Style'
import Link from "next/link";

export default function Footer() {
  return (
    <HomeStyle>
      <div className='fotterbg' >
        <Container>
          <Grid container >
            <Grid item xs={12} sm={4} md={4} >
              <Typography variant="h4" gutterBottom className='gettouch'  >
                Get in touch
              </Typography>
              <Typography variant="h4" gutterBottom className='Apparently-text'  >
                Are you a game-changing project looking for funding? Apply now to join our community of visionaries.
              </Typography>
              <Box  >
                <Button variant="contained" color="primary" className='ftraply'  > Apply now </Button>
              </Box>
            </Grid>
            <Hidden smDown >
              <Grid item xs={12} sm={4} md={4} >

                <Typography variant="h4" gutterBottom className='copy-text'  >
                  Copyright Blockhub DAO 2023
                </Typography>

              </Grid>
            </Hidden>
            <Grid item xs={12} sm={4} md={4} >
              <Typography variant="h4" gutterBottom className='gettouch emailmob '  >
                Email
              </Typography>
              <Typography variant="h4" gutterBottom className='Apparently-text email '  >
                contact@blockhubdao.com
              </Typography>
              <Box mt={3} >
                <Typography variant="h4" gutterBottom className='gettouch'  >
                  Socials
                </Typography>
                <div className=' ftrlist ' >
                  <List>
                    <ListItem>
                      <Link legacyBehavior href="https://discord.com/blockhubdao" target="_blank">
                        <a>
                          <Box component="img" src="/images/Discord.svg" className='ftricon' />
                        </a>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link legacyBehavior href="https://twitter.com/blockhubdao" target="_blank">
                        <a>
                          <Box component="img" src="/images/Twitter.svg" className='ftricon' />
                        </a>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link legacyBehavior href="https://mirror.xyz/0xb69d053fA14F0CEAD7ec9C3D3153EcFF235E7aCD" target="_blank">
                        <a>
                          <Box component="img" src="/images/Mirror.svg" className='ftricon' />
                        </a>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link legacyBehavior href="https://github.com/BlockHubDefi" target="_blank">
                        <a>
                          <Box component="img" src="/images/Git.svg" className='ftricon'/>
                        </a>
                      </Link>
                    </ListItem>
                  </List>
                </div>
              </Box>
            </Grid>
            <Hidden smUp >
              <Grid item xs={12} sm={4} md={4} >

                <Typography variant="h4" gutterBottom className='copy-text'  >
                  Copyright Blockhub DAO 2023
                </Typography>

              </Grid>
            </Hidden>
          </Grid>

        </Container>
      </div>
    </HomeStyle>
  )
}
