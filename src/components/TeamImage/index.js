import React from 'react';
import glamorous from 'glamorous';

import colors from '../../styles/colors';
import typography from '../../styles/typography';
import spacing from '../../styles/spacing';

const Container = glamorous.div({
  boxSizing: 'border-box',
  width: '33%',
  margin: `${spacing.xsmall} 0`,
  padding: `0 ${spacing.xsmall}`,
  position: 'relative',

  '@media(max-width: 1023px)': {
    width: '50%'
  }
});

const Image = glamorous.img({
  width: '100%',
});

const Name = glamorous.p({
  position: 'absolute',
  bottom: 0,
  padding: '6px 12px',
  margin: 0,
  textTransform: 'uppercase',
  fontSize: typography.fontSize.xsmall,
  color: colors.purple,
  background: colors.black
});

export default ({ src, name }) => (
  <Container>
    <Image src={src} alt="" />
    <Name>{name}</Name>
  </Container>
);
