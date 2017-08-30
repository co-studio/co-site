import glamorous from 'glamorous';

import spacing from '../../styles/spacing';

export default glamorous.section(
  {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: spacing.medium,
    zIndex: 1,
  },
  ({ color }) => ({ backgroundColor: color })
);
