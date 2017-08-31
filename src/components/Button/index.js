import glamorous from 'glamorous';

import colors from '../../styles/colors';
import typography from '../../styles/typography';
import spacing from '../../styles/spacing';

const SECONDARY = {
  background: 'transparent',
  color: colors.purple
};

export default glamorous.button(
  {
    width: '100%',
    padding: '18px 0',
    background: colors.purple,
    color: colors.black,
    textTransform: 'uppercase',
    fontWeight: typography.fontWeight.heavy,
    fontSize: typography.fontSize.xsmall,
    letterSpacing: '1',
    borderRadius: '4px',
    borderStyle: 'none',
    outline: 'none',
    border: `2px solid ${colors.purple}`,
    transition: 'all 0.1s cubic-bezier(0, 0, .7, 1)',
    cursor: 'pointer',

    ':hover': {
      background: 'transparent',
      borderColor: 'transparent',
      borderBottom: `2px solid ${colors.purple}`,
      color: colors.purple
    }
  },
  ({ secondary }) => (
    secondary ? SECONDARY : null
  ),
);
