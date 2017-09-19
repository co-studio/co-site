import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import spacing from '../../styles/spacing';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

const Option = glamorous.option({
  padding: `${spacing.regular} ${spacing.small}`,
  fontFamily: typography.fontFamily,
  fontSize: typography.fontSize.xxsmall,
  color: colors.black,
});

const renderOption = ({ value, label, onChange }, index) => (
  <Option
    value={value}
    key={index}
    onChange={onChange}
  >
    {label}
  </Option>
);

const Select = glamorous.select({
  height: '57px',
  marginTop: '4px',
  fontFamily: typography.fontFamily,
  fontSize: typography.fontSize.xxsmall,
  color: colors.black,
  outline: 'none',
  borderRadius: '2px',
  background: colors.white,
});

export default ({ options, ...props }) => (
  <Select {...props}>
    {options.map(renderOption)}
  </Select>
)
