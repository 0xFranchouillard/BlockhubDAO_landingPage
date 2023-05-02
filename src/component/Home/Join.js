import React from 'react'
import { Container, Grid, List, ListItem, Hidden, Typography, Box, Button } from '@mui/material';
import { HomeStyle } from './Style'
export default function Hero() {
  return (
    <HomeStyle>
      <div className='join-bg ' >
        <Container>
          <Grid container justifyContent="center" >
            <Grid xs={12} md={9} lg={6} >

              <Typography variant="h4" gutterBottom className='Revolution'  >
                Join the Blockhub Revolution
              </Typography>
              <Typography variant="h3" gutterBottom className='thrilled-text'  >
                Got a fresh new ponzi scheme to share? We'd be thrilled to give it a read someday
              </Typography>
              <Box textAlign="center" paddingBottom={5} >
                <Button variant="contained" color="primary" className='geniusbtn'  > Apply now </Button>
              </Box>

            </Grid>
          </Grid>

        </Container>
      </div>
    </HomeStyle>
  )
}
