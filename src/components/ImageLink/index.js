import React from 'react';
import glamorous from 'glamorous';

import colors from '../../styles/colors';
import typography from '../../styles/typography';
import spacing from '../../styles/spacing';

const Link = glamorous.a({
  display: 'block',
  padding: '8px',
  lineHeight: '0',
  cursor: 'pointer'
});

const Image = glamorous.img({
  width: '100%',
});

export default ({ href, src }) => (
  <Link href={href} target="_blank">
    <Image src={src} alt="" />
  </Link>
);
