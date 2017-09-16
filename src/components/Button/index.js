import glamorous from 'glamorous';

import colors from '../../styles/colors';
import typography from '../../styles/typography';
import spacing from '../../styles/spacing';

const SECONDARY = {
  background: 'transparent',
  color: colors.purple
};

const BLACK = {
  marginTop: spacing.regular,
  background: colors.black,
  borderColor: colors.black,
  color: colors.purple,

  ':hover': {
    background: 'transparent',
    borderColor: colors.black,
    color: colors.black
  }
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
    border: `3px solid ${colors.purple}`,
    transition: 'all 0.1s cubic-bezier(0, 0, .7, 1)',
    cursor: 'pointer',

    ':hover': {
      background: 'transparent',
      color: colors.purple
    }
  },
  ({ secondary }) => (
    secondary ? SECONDARY : null
  ),
  ({ black }) => (
    black ? BLACK : null
  ),
);
