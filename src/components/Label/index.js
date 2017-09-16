import glamorous from 'glamorous';

import colors from '../../styles/colors';
import typography from '../../styles/typography';
import spacing from '../../styles/spacing';

export default glamorous.label({
  display: 'flex',
  flexDirection: 'column',
  marginTop: spacing.regular,
  color: colors.black,
  fontWeight: typography.fontWeight.bold,
  fontSize: typography.fontSize.xxsmall,
  textTransform: 'uppercase',
  letterSpacing: '1.25',

  '@media(max-width: 1023px)': {
    fontSize: '5vw'
  }
});
