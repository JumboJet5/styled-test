import React from 'react';
import { UsualStyledDiv, UsualVarDiv, Wrapper } from "./styles";
import { oneHundredElements } from "./utils/synthetic";
import { SomeSmartComponent } from "./components/someSmartComponent";
import { StyledThemeWrapper, VarThemeWrapper } from "./components/themeWrappers";

const smallStackOfItems = new Array(5).fill(0).map((_, i) => i)

function App() {
  return (
    <>
      <h2>Only CSS vars</h2>
      <VarThemeWrapper>
        {oneHundredElements.map(item => (
          <SomeSmartComponent key={item}>
            <Wrapper>
              <Wrapper>
                {smallStackOfItems.map(subItem => (
                  <SomeSmartComponent key={subItem}>
                    <UsualVarDiv className={item % 2 === 0 ? 'even' : 'odd'}/>
                  </SomeSmartComponent>
                ))}
              </Wrapper>
              <Wrapper>
                {smallStackOfItems.map(subItem => (
                  <SomeSmartComponent key={subItem}>
                    <UsualVarDiv className={item % 2 === 0 ? 'even' : 'odd'}/>
                  </SomeSmartComponent>
                ))}
              </Wrapper>
            </Wrapper>
          </SomeSmartComponent>
        ))}
      </VarThemeWrapper>
      <hr/>
      <h2>CSS vars with styled theme wrapper</h2>
      <StyledThemeWrapper>
        {oneHundredElements.map(item => (
          <SomeSmartComponent key={item}>
            <Wrapper>
              <Wrapper>
                {smallStackOfItems.map(subItem => (
                  <SomeSmartComponent key={subItem}>
                    <UsualVarDiv className={item % 2 === 0 ? 'even' : 'odd'}/>
                  </SomeSmartComponent>
                ))}
              </Wrapper>
              <Wrapper>
                {smallStackOfItems.map(subItem => (
                  <SomeSmartComponent key={subItem}>
                    <UsualVarDiv className={item % 2 === 0 ? 'even' : 'odd'}/>
                  </SomeSmartComponent>
                ))}
              </Wrapper>
            </Wrapper>
          </SomeSmartComponent>
        ))}
      </StyledThemeWrapper>
      <hr/>
      <h2>Only styled theme wrapper</h2>
      <StyledThemeWrapper>
        {oneHundredElements.map(item => (
          <SomeSmartComponent key={item}>
            <Wrapper>
              <Wrapper>
                {smallStackOfItems.map(subItem => (
                  <SomeSmartComponent key={subItem}>
                    <UsualStyledDiv isEven={item % 2 === 0}/>
                  </SomeSmartComponent>
                ))}
              </Wrapper>
              <Wrapper>
                {smallStackOfItems.map(subItem => (
                  <SomeSmartComponent key={subItem}>
                    <UsualStyledDiv isEven={item % 2 === 0}/>
                  </SomeSmartComponent>
                ))}
              </Wrapper>
            </Wrapper>
          </SomeSmartComponent>
        ))}
      </StyledThemeWrapper>
    </>
  );
}

export default App;
