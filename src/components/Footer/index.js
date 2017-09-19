import glamorous from 'glamorous';

import colors from '../../styles/colors';
import typography from '../../styles/typography';
import spacing from '../../styles/spacing';

export default glamorous.nav({
  boxSizing: 'border-box',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: `0 72px 12px`,
  zIndex: 2,

  '@media(max-width: 1023px)': {
    padding: `24px 24px`,
  }
});
