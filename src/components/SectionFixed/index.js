import glamorous from 'glamorous';

import Section from '../Section';

export default glamorous(Section)(
  {
    position: 'fixed',
    height: 'calc(100vh - 24px)',
    width: 'calc(100% - 48px)',
    zIndex: 0,
  },
  ({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  })
);
