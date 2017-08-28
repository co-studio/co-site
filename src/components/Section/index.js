import glamorous from 'glamorous';

import spacing from '../../styles/spacing';

export default glamorous.section(
  {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: spacing.medium,
  },
  ({ color }) => ({ backgroundColor: color })
);
