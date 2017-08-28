import glamorous from 'glamorous';

import colors from '../../styles/colors';
import typography from '../../styles/typography';
import spacing from '../../styles/spacing';

export default glamorous.h1({
  marginTop: '0',
  marginBottom: spacing.regular,
  color: colors.black,
  fontWeight: typography.fontSize.heavy,
  fontStyle: 'italic',
  fontSize: typography.fontSize.large,
  lineHeight: '1',
  letterSpacing: '1px',
  textTransform: 'uppercase',
});
