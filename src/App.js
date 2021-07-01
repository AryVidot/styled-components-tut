// import { StyledButton , ButtonLabel } from './components/Button.style'
import { StyledButton } from './components/Button.style';
import { AppContainer } from './components/Container.style'

import {GlobalStyles} from './components/GlobalStyles.style'

function App() {
  return (
    <AppContainer>
      <GlobalStyles/>
      {/* <StyledButton backgroundColor="red"><ButtonLabel> Click this button</ButtonLabel></StyledButton> */}
      {/* <StyledButton backgroundColor="yellow">Click this button</StyledButton>
      <StyledButton backgroundColor="lightblue">Click this button</StyledButton> */}
      <StyledButton buttonLabel="Click there" backgroundColor="white"></StyledButton>
    </AppContainer>
  );
}

export default App;
