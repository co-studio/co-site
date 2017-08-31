import glamorous from 'glamorous';

import colors from '../../styles/colors';
import typography from '../../styles/typography';
import spacing from '../../styles/spacing';

export default glamorous.p({
  marginTop: spacing.regular,
  marginBottom: spacing.regular,
  color: colors.black,
  fontWeight: typography.fontWeight.bold,
  fontSize: typography.fontSize.small,
  lineHeight: '1.35',
  letterSpacing: '1.25'
});
