import styled from "styled-components";

export const UsualVarDiv = styled.div`
  width: 10px;
  height: 10px;
  box-sizing: border-box;

  &.even {
    background-color: var(--evenBackgroundColor, #1bcc58);
  }

  &.odd {
    background-color: var(--oddBackgroundColor, #d81a70);
    border: 1px var(--evenBackgroundColor, #1bcc58) solid
  }
`

export const UsualStyledDiv = styled.div<{ isEven: boolean }>`
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  background-color: ${(props) => props.isEven ? props.theme.evenBackgroundColor : props.theme.oddBackgroundColor};
  border: ${(props) => !props.isEven ? `1px ${props.theme.evenBackgroundColor} solid` : ''}
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 10px);
  grid-gap: 1px;

  &.light {
    --evenBackgroundColor: #1bcc58;
    --oddBackgroundColor: #d81a70;
  }

  &.dark {
    --evenBackgroundColor: #d81a70;
    --oddBackgroundColor: #1bcc58;
  }
`
