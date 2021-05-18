import { createMuiTheme } from '@material-ui/core/styles'
import { red, common } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5251D1',
      contrastText: '#fff'
    },
    secondary: {
      main: '#FD5CFA'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: 'Kanit, sans-serif'
  }
})

export default theme
