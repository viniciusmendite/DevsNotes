import React from 'react';

import {Box, Title} from './styles';

export default ({data, index, onPress}) => {
  return (
    <Box onPress={() => onPress(index)} underlayColor="rgba(0,0,0,0.1)">
      <Title>{data.title}</Title>
    </Box>
  );
};
