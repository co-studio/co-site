import glamorous from 'glamorous';

import typography from '../../styles/typography';
import spacing from '../../styles/spacing';

export default glamorous.div({
    width: '50vw',
    margin: `${spacing.xlarge} 0`,
    fontSize: typography.fontSize.regular,
    fontWeight: typography.fontWeight.bold,
    lineHeight: '1.35'
});
