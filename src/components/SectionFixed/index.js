import glamorous from 'glamorous';

export default glamorous.section(
  {
    position: 'fixed',
    height: 'calc(100vh - 24px)',
    width: 'calc(100% - 48px)',
    zIndex: -1,
  },
  ({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  })
);
