import React, { FC, ReactNode, useCallback, useState } from "react";
import { darkTheme, lightTheme } from "../theme";
import { syntheticTest } from "../utils/synthetic";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "../styles";

// theme managing wrappers

// wrapper for styled components
export const StyledThemeWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)
  const [syntheticCount, setSyntheticCount] = useState(0)

  const toggleTheme = useCallback(() => setTheme(prev => prev.THEME_NAME === 'light' ? darkTheme : lightTheme), [])
  const synthetic = useCallback(() => syntheticTest(toggleTheme, setSyntheticCount), [toggleTheme])

  return (
    <>
      <button onClick={toggleTheme}>toggle</button>
      <button onClick={synthetic}>synthetic</button>
      <h3>Synthetic count: {syntheticCount} by 5 seconds</h3>
      <ThemeProvider theme={theme}>
        <Wrapper className={theme.THEME_NAME}>
          {children}
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

// wrapper for css vars components (styled components with theme managing by css vars)
export const VarThemeWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [syntheticCount, setSyntheticCount] = useState(0)

  const toggleTheme = useCallback(() => setTheme(prev => prev === 'light' ? 'dark' : 'light'), [])
  const synthetic = useCallback(() => syntheticTest(toggleTheme, setSyntheticCount), [toggleTheme])

  return (
    <>
      <button onClick={toggleTheme}>toggle</button>
      <button onClick={synthetic}>synthetic</button>
      <h3>Synthetic count: {syntheticCount} by 5 seconds</h3>
      <Wrapper className={theme}>
        {children}
      </Wrapper>
    </>
  );
}
