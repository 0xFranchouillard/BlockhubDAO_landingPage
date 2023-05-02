import React from 'react'
import { Container, Grid, List, ListItem, Hidden, Typography, Box, Button } from '@mui/material';
import { HomeStyle } from './Style'
export default function Hero() {
  return (
    <HomeStyle>
      <Container>

        <Typography variant="h4" gutterBottom className="Genius-text"  >
          Where Genius and Memes Collide
        </Typography>
        <Grid container justifyContent="center" >
          <Grid md={9} lg={8} >


            <Typography variant="h3" gutterBottom className='Blockhub-text'  >
              Welcome to Blockhub DAO, your go-to VC DAO for Web 3.0 investments and meme mastery! We're a tight-knit crew of blockchain buffs with a passion for memes, trolling, and everything that makes internet delightfully quirky.
            </Typography>
            <Box textAlign="center" >
              <Button variant="contained" color="primary" className='geniusbtn'  > Apply now </Button>
              <Box component="img" src="/images/PepeMidPurple.svg" width="100%" height="460px" my={3} />
              <Box component="img" src="/images/partnership.svg" width="100%" my={3} />

            </Box>

          </Grid>
        </Grid>

      </Container>

    </HomeStyle>
  )
}
