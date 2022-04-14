import React, { createContext, useMemo, useState, useContext } from 'react';
import { createMuiTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import { Container } from '@mui/material';

export const ThemeContext = createContext({
  mode: false,
  setMode: (mode) => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeWrapper(props) {
  const { children } = props;
  const { Provider } = ThemeContext;
  const [mode, setMode] = useState(false);

  // Create theme
  const theme = useMemo(() => {
    return createMuiTheme({
      palette: { mode: mode ? 'dark' : 'light', primary: blueGrey },
    });
  }, [mode]);

  const {
    palette: { text, background },
  } = theme;

  // Set base style of theme container
  const style = {
    padding: 24,
    backgroundColor: background.default,
    color: text.primary,
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider value={{ mode, setMode }}>
        <Container style={style} maxWidth={false}>
          {children}
        </Container>
      </Provider>
    </ThemeProvider>
  );
}
