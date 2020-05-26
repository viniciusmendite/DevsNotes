import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #debeab;
`;

export const TitleInput = styled.TextInput`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 15px;
`;

export const BodyInput = styled.TextInput`
  flex: 1;
  font-size: 15px;
  color: #fff;
  padding: 16px;
`;

export const CloseButton = styled.TouchableHighlight`
  margin-left: 15px;
`;

export const CloseButtonImage = styled.Image`
  width: 20px;
  height: 20px;
`;
export const SaveButton = styled.TouchableHighlight`
  margin-right: 15px;
`;

export const SaveButtonImage = styled.Image`
  width: 24px;
  height: 24px;
`;
