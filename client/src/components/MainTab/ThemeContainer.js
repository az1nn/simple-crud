import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../../styles/GlobalStyles'

const ThemeContainer = ({ children }) => {

  const [theme, setTheme] = useState("light")

  useEffect(() => {

  }, [theme])

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default ThemeContainer