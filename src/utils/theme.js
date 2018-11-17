import { createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0c5cb0',
      main2: '#106cc0',
      main3: '#004d87',
    },
    secondary: pink
  }
});

export default theme;