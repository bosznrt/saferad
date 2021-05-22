import Image from 'next/image'
import { Link } from 'react-scroll'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
  return {
    toobar: {
      display: 'flex',
      justifyContent: 'center'
    },
    menu: {
      margin: '0 36px'
    },
    landing: {
      backgroundColor: theme.palette.primary.main,
      height: 575,
      position: 'relative',
      overflowX: 'hidden',
      '& > .curve': {
        position: 'absolute',
        left: '50%',
        bottom: 0,
        width: '120%',
        height: '100px',
        background: '#fff',
        borderRadius: '50% / 100%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transform: 'translateX(-50%)'
      }
    },
    landingTitle: {
      fontSize: '50px',
      fontWeight: '500',
      color: '#fff',
      lineHeight: 1.2
    },
    landingContent: {
      fontSize: '30px',
      fontWeight: '300',
      color: '#fff',
      margin: '25px 0'
    },
    gridCenter: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
      // alignItems: 'center'
    },
    buyButton: {
      width: '202px',
      height: '40px',
      background: 'linear-gradient(90deg, #F6AA44 2.27%, #E03D82 32.3%, #8E3BB5 100%), #5251D1',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '20px',
      color: '#fff',
      fontSize: '21px'
    },
    mainChaContainer: {
      position: 'relative',
      width: '374px',
      height: '374px',
      borderRadius: '50%',
      background: '#FD5CFA',
      alignSelf: 'center',
      '& > div': {
        position: 'absolute',
        right: '-15px',
        top: '-65px'
      }
    },
    cha01Container: {
      position: 'relative',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: 'rgba(82, 81, 209, 0.2)',
      alignSelf: 'center',
      '& > div': {
        position: 'absolute',
        top: '-55px',
        right: '20px'
      }
    },
    cha02Container: {
      position: 'relative',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: 'rgba(82, 81, 209, 0.2)',
      alignSelf: 'center',
      '& > div': {
        position: 'absolute',
        top: '-65px',
        right: '11px'
      }
    },
    cha03Container: {
      position: 'relative',
      width: '162px',
      height: '162px',
      borderRadius: '50%',
      background: 'rgba(253, 92, 250, 0.2)',
      alignSelf: 'center',
      '& > div': {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
      }
    },
    subTitle: {
      fontWeight: 500
    },
    footer: {
      backgroundColor: theme.palette.primary.main,
      // height: '300px',
      position: 'relative',
      overflowX: 'hidden',
      '& > .curve': {
        position: 'absolute',
        left: '50%',
        top: 0,
        width: '120%',
        height: '100px',
        background: '#fff',
        borderRadius: '50% / 100%',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        transform: 'translateX(-50%)'
      }
    },
    iconGroup: {
      display: 'flex',
      marginTop: '20px',
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  }
})

const Index = () => {
  const classes = useStyles()

  const menus = [
    {
      label: 'Home',
      to: 'home'
    },
    {
      label: 'About Us',
      to: 'about_saferad'
    },
    {
      label: 'Tokenomics',
      to: 'tokenomics'
    },
    {
      label: 'Roadmap',
      to: 'roadmaps'
    },
    {
      label: 'FAQ',
      to: 'faq'
    }
  ]

  return (
    <Container maxWidth={false} disableGutters>
      <AppBar position="sticky" color="default">
        <Toolbar className={classes.toobar}>
          <Image src="/logo.png" width={120} height={70} alt="logo" />
          {menus.map((menu) => (
            <Link spy={true} smooth={true} to={menu.to} key={menu.label} offset={-150}>
              <Button className={classes.menu}>{menu.label}</Button>
            </Link>
          ))}
        </Toolbar>
      </AppBar>

      <Box className={classes.landing} id="home">
        <Grid container justify="center" alignItems="center">
          <Grid item md={5} className={classes.gridCenter}>
            <img src="/title_main.svg" height="80px" style={{ alignSelf: 'flex-start', flex: 1 }} />
            <span className={classes.landingContent}>
              created to
              <span style={{ color: '#FD5CFA', margin: '0 7px' }}>support</span>
              Amazing-Blockchain project we trust !!
            </span>
            <Button className={classes.buyButton}>get saferad</Button>
          </Grid>
          <Grid item md={5} className={classes.gridCenter} style={{ alignItems: 'center' }}>
            <img src="/main_cha.svg" width={430} height={430} alt="main_cha" />
          </Grid>
        </Grid>
        <div className="curve" />
      </Box>

      <Box id="about_saferad">
        <Grid container justify="center" alignItems="center">
          <Grid item md={4} className={classes.gridCenter}>
            <div className={classes.cha01Container}>
              <div>
                <img src="/cha_01.png" width={287} height={381} alt="cha_01" />
              </div>
            </div>
          </Grid>
          <Grid item md={6} className={classes.gridCenter}>
            <img
              src="/title_01.svg"
              height="47px"
              style={{ alignSelf: 'flex-start', marginBottom: '16px' }}
            />
            <Typography variant="body1" style={{ fontWeight: 300 }}>
              <span style={{ fontWeight: '500' }}>SafeRad</span> is community driven token launch on
              Binance Smart Chain created to support RAD community.Our team has same vision that we
              want to make everyone aware of growth potential of RAD. In our opinion RAD valuation
              can reach 10,000,000,000$ comparing with current valuation we still have such a long
              way to go. Due to market situation ,so many new token launching and moon, These may
              distract investor from fabulous project with an world-disrupting concepts so we decide
              to create SafeRAD to support RAD community
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container justify="center" alignItems="center">
          <Grid item md={6} className={classes.gridCenter}>
            <img
              src="/title_02.svg"
              height="47px"
              style={{ alignSelf: 'flex-start', marginBottom: '16px' }}
            />
            <Typography variant="body1" style={{ fontWeight: 300 }}>
              <span style={{ fontWeight: '500' }}>Radicle</span> is a decentralized code
              collaboration network built on open protocols. Developers can collaborate on code
              without relying on a centralized repository hosting service. Radicle uses a
              peer-to-peer data replication protocol for developers to share code. Complete
              transparency is provided through a top to bottom open source stack. A closed source
              centralized example would be services like Github and GitLab.
            </Typography>
          </Grid>
          <Grid item md={4} className={classes.gridCenter}>
            <div className={classes.cha02Container}>
              <div>
                <img src="/cha_02.png" width={287} height={345} alt="cha_02" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box py={8} id="tokenomics">
        <Grid container justify="center" alignItems="center">
          <Grid item md={10} className={classes.gridCenter}>
            <Box
              style={{
                background: 'rgba(82, 81, 209, 0.1)',
                borderRadius: '10px',
                padding: '32px'
              }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  marginBottom: '32px'
                }}>
                <img src="/title_03.svg" height="47px" style={{ marginBottom: '16px' }} />
                <Typography variant="body2" style={{ fontSize: '21px' }}>
                  total supply 1,000,000,000,000 SafeRAD
                </Typography>
              </div>
              <Grid container justify="space-around" alignItems="center">
                <Grid item md={5} className={classes.gridCenter}>
                  <Card style={{ background: '#fff' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '16px 32px'
                      }}>
                      <div className={classes.cha03Container}>
                        <div>
                          <img src="/cha_031.png" width={200} height={160} alt="cha_031" />
                        </div>
                      </div>
                      <Typography
                        color="primary"
                        style={{ fontSize: '21px', fontWeight: 500, margin: '16px' }}>
                        Tax
                      </Typography>
                      <Typography variant="body1" component={'span'} style={{ fontWeight: 300 }}>
                        <span style={{ fontWeight: '500', color: '#FD5CFA' }}>10%</span> tax of
                        every transaction will be deduct as tax and distribute to SafeRad holders as
                        follow.
                        <ul style={{ paddingInline: '21px' }}>
                          <li>
                            <span style={{ fontWeight: '500', color: '#FD5CFA' }}>5%</span> Will be
                            automatically generate SafeRAD-BNB liquidity pool to increase liquidity
                            as well as minimize price fluctuation.
                          </li>
                          <li>
                            <span style={{ fontWeight: '500', color: '#FD5CFA' }}>5%</span> will
                            remunerate to all SafeRAD holders as dividend from holding SafeRAD.
                          </li>
                        </ul>
                      </Typography>
                    </div>
                  </Card>
                </Grid>
                <Grid item md={5} className={classes.gridCenter}>
                  <Card style={{ background: '#fff' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '16px 32px',
                        minHeight: 457
                      }}>
                      <div className={classes.cha03Container}>
                        <div>
                          <img src="/cha_032.png" width={230} height={146} alt="cha_032" />
                        </div>
                      </div>
                      <Typography
                        color="primary"
                        style={{ fontSize: '21px', fontWeight: 500, margin: '16px' }}>
                        Anti-Whale mechanism
                      </Typography>
                      <Typography variant="body1" component={'span'} style={{ fontWeight: 300 }}>
                        <ul style={{ paddingInline: '21px' }}>
                          <li>
                            Transaction limit was set at{' '}
                            <span style={{ fontWeight: '500', color: '#FD5CFA' }}>
                              5,000,000,000
                            </span>{' '}
                            SafeRAD tokens per transaction to protect our holders from pump and dump
                            (0.05% of total SafeRAD supply)
                          </li>
                          <li>
                            will SafeRAD LP will initially start with{' '}
                            <span style={{ fontWeight: '500', color: '#FD5CFA' }}>20 bnb</span>{' '}
                            makes SafeRAD evade from whale
                          </li>
                        </ul>
                      </Typography>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box id="roadmaps">
        <Grid container justify="center" alignItems="center">
          <Grid item md={10} className={classes.gridCenter}>
            <img
              src="/title_04.svg"
              height="80px"
              style={{ alignSelf: 'flex-start', marginBottom: '32px' }}
            />
            <img src="/roadmap.svg" />
          </Grid>
        </Grid>
      </Box>

      <Box className={classes.footer}>
        <div className="curve" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '120px'
          }}>
          <Image src="/logo.png" width={120} height={70} alt="logo" />
          <div className={classes.iconGroup}>
            <a href="https://t.me/saferad" target="_blank">
              <Avatar alt="telegram" src="/telegram.webp" />
            </a>
            <a href="https://twitter.com/saferadofficial" target="_blank">
              <Avatar alt="twitter" src="/twitter.webp" />
            </a>
            <a href="https://medium.com/saferad-official" target="_blank">
              <Avatar alt="medium" src="/medium.webp" />
            </a>
          </div>
          <Typography
            variant="body1"
            style={{ fontWeight: 300, color: '#fff', fontSize: '14px', marginTop: 20 }}>
            Copyright © 2021 SafeRad | All Rights Reserved
          </Typography>
        </div>
      </Box>
    </Container>
  )
}

export default Index
