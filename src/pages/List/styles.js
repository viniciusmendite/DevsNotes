import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #debeab;
`;

export const AddButton = styled.TouchableHighlight`
  margin-right: 15px;
`;

export const AddButtonImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export const NotesList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const NoNotes = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NoNotesImage = styled.Image`
  width: 160px;
  height: 160px;
  margin-bottom: 10px;
`;

export const NoNotesText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
