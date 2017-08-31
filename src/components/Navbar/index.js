import glamorous from 'glamorous';

import colors from '../../styles/colors';
import typography from '../../styles/typography';
import spacing from '../../styles/spacing';

export default glamorous.nav({
  boxSizing: 'border-box',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  padding: `48px 72px`,
  zIndex: 2,

  '@media(max-width: 1023px)': {
    padding: `24px 24px`,
  }
});
