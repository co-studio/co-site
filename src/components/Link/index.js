import glamorous from 'glamorous';

import colors from '../../styles/colors';
import typography from '../../styles/typography';

export default glamorous.a({
  // display: 'block',
  fontSize: typography.fontSize.regular,
  color: colors.grayLight,
  cursor: 'pointer',
  // lineHeight: 'initial',

  ':hover': {
    color: colors.white,
    borderColor: colors.white,
  }
});
