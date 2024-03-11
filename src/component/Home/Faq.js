import React from 'react'
import {Box, Button, Container, Grid, Typography} from '@mui/material';
import {HomeStyle} from './Style'
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function Investment() {
    const [open, setOpen] = React.useState({
        colapse1: false,
        colapse2: false,
        colapse3: false,
        colapse4: false,
    });

    return (
        <HomeStyle className='div-element' >
            <Box paddingBottom={30} paddingTop={10} className='vector5-faq'>
                <Container >
                    <Typography variant="h4" gutterBottom className='thesis' id='faq'>
                        FAQ
                    </Typography>
                    <Box my={5} >
                        <Grid container justifyContent="center">
                            <Grid item xs={11} sm={10} md={8}>



                                <div className='colapse-bg'>
                                    <Button variant="contained" onClick={() => {
                                        setOpen({...open, colapse1: !open.colapse1})
                                    }} className='colapsebtn' color="secondary" fullWidth>What is BlockHub
                                        DAO? {open.colapse1 ? <ExpandLess/> : <ExpandMore/>}</Button>
                                    <Collapse in={open.colapse1} timeout="auto" unmountOnExit>
                                        <div className='colapse-inner-pd'>
                                            <Typography variant="h4" gutterBottom className='Apparently-text'>
                                                BlockHubDAO is a VC DAO composed of seasoned professionals with deep
                                                roots in the blockchain industry. Our diverse team of over 60 members
                                                boasts expertise in finance, marketing, IT, and software engineering.
                                                Many of us hold leadership positions in or work for prominent firms
                                                within the crypto ecosystem.
                                            </Typography>
                                            <Typography variant="h4" gutterBottom className='Apparently-text' mt={2}>
                                                Having carefully cultivated our community for over five years, we
                                                established BlockHubDAO to leverage our collective network, knowledge,
                                                and resources for a more substantial impact on the industry. Our goal is
                                                to provide support and guidance to the most promising up-and-coming
                                                projects.
                                            </Typography>
                                            <Typography variant="h4" gutterBottom className='Apparently-text' mt={2}>
                                                As true crypto natives, we have grown alongside the Web 3.0 landscape,
                                                fully embracing its principles and nuances. Our members possess a
                                                profound understanding of the digital world's evolution, allowing us to
                                                stay ahead of the curve and drive innovation within the sector.
                                            </Typography>
                                            <Typography variant="h4" gutterBottom className='Apparently-text' mt={2}>
                                                We're not just about funding projects; we're dedicated to actively
                                                engaging with our community. Our passion for cryptocurrency drives us to
                                                strive for constant improvement and innovation within the space, one day
                                                at a time.
                                            </Typography>
                                        </div>
                                    </Collapse>
                                </div>
                                <Box my={2}>
                                    <div className='colapse-bg'>
                                        <Button variant="contained" onClick={() => {
                                            setOpen({...open, colapse2: !open.colapse2})
                                        }} className='colapsebtn' color="secondary" fullWidth>How does Blockhub DAO
                                            operate ? {open.colapse2 ? <ExpandLess/> : <ExpandMore/>}</Button>
                                        <Collapse in={open.colapse2} timeout="auto" unmountOnExit>
                                            <div className='colapse-inner-pd'>
                                                <Typography variant="h4" gutterBottom className='Apparently-text'>
                                                    The governance of BlockHubDAO is driven by the BHDAO token, which
                                                    represents a share in our multisig treasury. Projects that capture
                                                    our members' interest enter our rigorous investment process.The deal
                                                    initiator presents a comprehensive overview of the project, after
                                                    which a soft vote is conducted to determine if we wish to proceed
                                                    with a call involving the project team and our members.
                                                </Typography>
                                                <Typography variant="h4" gutterBottom className='Apparently-text'
                                                            mt={2}>
                                                    This in-depth discussion allows us to thoroughly assess the
                                                    project's potential.
                                                </Typography>
                                                <Typography variant="h4" gutterBottom className='Apparently-text'
                                                            mt={2}>
                                                    Subsequently, our DAO conducts a two-step voting process using
                                                    snapshot votes. The first vote determines whether we, as a
                                                    collective, want to invest in the project. If the outcome is
                                                    positive, a second vote establishes the amount we wish to invest.
                                                    This structured approach ensures that our decision-making process
                                                    remains transparent and is driven by the expertise and insights of
                                                    our knowledgeable crypto native members.
                                                </Typography>
                                            </div>
                                        </Collapse>
                                    </div>
                                </Box>

                                <Box my={2}>

                                    <div className='colapse-bg'>

                                        <Button variant="contained" onClick={() => {
                                            setOpen({...open, colapse3: !open.colapse3})
                                        }} className='colapsebtn' color="secondary" fullWidth>What kind of projects are
                                            you interested in ? {open.colapse3 ? <ExpandLess/> : <ExpandMore/>}</Button>
                                        <Collapse in={open.colapse3} timeout="auto" unmountOnExit>
                                            <div className='colapse-inner-pd'>
                                                <Typography variant="h4" gutterBottom className='Apparently-text'>
                                                    Our many years as cryptocurrency investors have led us to a crucial
                                                    realization: It's impossible to adhere to a rigid and predetermined
                                                    thesis in a space that is constantly changing and evolving at an
                                                    incredible pace. We seek serious projects that address real needs
                                                    and are at the forefront of innovation. We remain open to all
                                                    sectors, ensuring that we can identify and support the most
                                                    promising opportunities in the dynamic world of blockchain and Web
                                                    3.0.
                                                </Typography>


                                            </div>
                                        </Collapse>
                                    </div>
                                </Box>

                                <Box my={2}>

                                    <div className='colapse-bg'>

                                        <Button variant="contained" onClick={() => {
                                            setOpen({...open, colapse4: !open.colapse4})
                                        }} className='colapsebtn' color="secondary" fullWidth>How to Join the
                                            Elite? {open.colapse4 ? <ExpandLess/> : <ExpandMore/>}</Button>
                                        <Collapse in={open.colapse4} timeout="auto" unmountOnExit>
                                            <div className='colapse-inner-pd'>
                                                <Typography variant="h4" gutterBottom className='Apparently-text'>
                                                    Blockhub DAO is a French-speaking DAO, and to become a member, one
                                                    must go through an application process on the Blockhub Discord
                                                    server. Access to this server is possible only through an invitation
                                                    from an existing member. We seek individuals with extensive
                                                    cryptocurrency experience and a desire to share and grow with the
                                                    community.
                                                </Typography>
                                                <Typography variant="h4" gutterBottom className='Apparently-text'
                                                            mt={2}>
                                                    If an application is approved by the majority of DAO members, the
                                                    applicant automatically becomes a member, provided they hold at
                                                    least 500 BHDAO tokens. The sale of BHDAO tokens is open to
                                                    everyone; however, only validated members will gain access to the
                                                    DAO section of our Discord server and be considered as one of its
                                                    members.
                                                </Typography>

                                            </div>
                                        </Collapse>
                                    </div>
                                </Box>
                            </Grid>

                        </Grid>
                    </Box>

                </Container>
            </Box>
        </HomeStyle>
    )
}
