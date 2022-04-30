import React, { FC, ReactNode, useCallback, useState } from 'react';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { UsualStyledDiv, UsualVarDiv, Wrapper } from "./styles";

const oneThousandElements = new Array(1000).fill(0).map((_, i) => i)

function someCalculations() {
  let multi = 1
  for (let i = 2; i < 200; i++) {
    multi = multi * i
  }
  return multi
}

function App() {
  return (
    <>
      <ThemeWrapper>
        {oneThousandElements.map(item => (
          <BlockWrapper key={item}>
            <UsualVarDiv className={item % 2 === 0 ? 'even' : 'odd'}/>
            <UsualVarDiv className={item % 2 === 0 ? 'even' : 'odd'}/>
            <UsualVarDiv className={item % 2 === 0 ? 'even' : 'odd'}/>
            <UsualVarDiv className={item % 2 === 0 ? 'even' : 'odd'}/>
            <UsualVarDiv className={item % 2 === 0 ? 'even' : 'odd'}/>
          </BlockWrapper>
        ))}
      </ThemeWrapper>
      <ThemeWrapper>
        {oneThousandElements.map(item => (
          <BlockWrapper key={item}>
            <UsualStyledDiv isEven={item % 2 === 0}/>
            <UsualStyledDiv isEven={item % 2 === 0}/>
            <UsualStyledDiv isEven={item % 2 === 0}/>
            <UsualStyledDiv isEven={item % 2 === 0}/>
            <UsualStyledDiv isEven={item % 2 === 0}/>
          </BlockWrapper>
        ))}
      </ThemeWrapper>
      <ThemeWrapper>
        {oneThousandElements.map(item => (
          <UsualVarDiv key={item} className={item % 2 === 0 ? 'even' : 'odd'}>
            <BlockWrapper/>
            <BlockWrapper/>
            <BlockWrapper/>
            <BlockWrapper/>
            <BlockWrapper/>
          </UsualVarDiv>
        ))}
      </ThemeWrapper>
      <ThemeWrapper>
        {oneThousandElements.map(item => (
          <UsualStyledDiv key={item} isEven={item % 2 === 0}>
            <BlockWrapper/>
            <BlockWrapper/>
            <BlockWrapper/>
            <BlockWrapper/>
            <BlockWrapper/>
          </UsualStyledDiv>
        ))}
      </ThemeWrapper>
    </>
  );
}

const BlockWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
  someCalculations()

  return <>{children}</>
}

const ThemeWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = useCallback(() => setTheme(prev => prev.THEME_NAME === 'light' ? darkTheme : lightTheme), [])

  const synthetic = useCallback(() => {
    let counter = 0
    const startTime = Date.now()
    const trigger = () => {
      if (Date.now() - startTime < 5000) {
        setTimeout(() => {
          counter++
          toggleTheme()
          trigger()
        })
      } else {
        console.log({ counter })
      }
    }
    trigger()
  }, [toggleTheme])

  return (
    <>
      <button onClick={toggleTheme}>toggle</button>
      <button onClick={synthetic}>synthetic</button>
      <ThemeProvider theme={theme}>
        <Wrapper className={theme.THEME_NAME}>
          {children}
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
