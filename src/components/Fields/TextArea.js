import glamorous from 'glamorous';

import spacing from '../../styles/spacing';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

export default glamorous.textarea({
  boxSizing: 'border-box',
  height: '57px',
  marginTop: '4px',
  padding: spacing.small,
  resize: 'vertical',
  outline: 'none',
  fontSize: typography.fontSize.xxsmall,
  fontFamily: typography.fontFamily,
  borderRadius: '2px',
  border: 'none',
  '@media(max-width: 1023px)': {
    fontSize: '18px'
  }
});
