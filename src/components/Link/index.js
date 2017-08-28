import glamorous from 'glamorous';

import colors from '../../styles/colors';
import typography from '../../styles/typography';

export default glamorous.a({
  fontSize: typography.fontSize.regular,
  color: colors.grayLight,

  ':hover': {
    color: colors.white,
    borderColor: colors.white,
  }
});
