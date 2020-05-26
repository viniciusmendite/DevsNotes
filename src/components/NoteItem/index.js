import React from 'react';

import {Box, Title} from './styles';

export default ({data, index, onPress, onLongPress}) => {
  return (
    <Box
      onPress={() => onPress(index)}
      underlayColor="#ebcbb8"
      onLongPress={() => onLongPress(index)}>
      <Title>{data.title}</Title>
    </Box>
  );
};
