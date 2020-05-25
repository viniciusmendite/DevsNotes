import React, {useLayoutEffect} from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import NoteItem from '../../components/NoteItem';
import {
  Container,
  AddButton,
  AddButtonImage,
  NotesList,
  NoNotes,
  NoNotesImage,
  NoNotesText,
} from './styles';

export default () => {
  const navigation = useNavigation();
  //const list = useSelector(state => state.notes.list);
  const list = [];
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Sua notas',
      headerRight: () => (
        <AddButton
          underlayColor="transparent"
          onPress={() => navigation.navigate('EditNote')}>
          <AddButtonImage source={require('../../assets/more.png')} />
        </AddButton>
      ),
    });
  }, [navigation]);

  const handleNotePress = index => {
    navigation.navigate('EditNote', {
      key: index,
    });
  };

  return (
    <Container>
      <StatusBar backgroundColor="#cc9e83" barStyle="light-content" />
      {list.length > 0 && (
        <NotesList
          data={list}
          renderItem={({item, index}) => (
            <NoteItem data={item} index={index} onPress={handleNotePress} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      {list.length === 0 && (
        <NoNotes>
          <NoNotesImage source={require('../../assets/noNotes.png')} />
          <NoNotesText>Nenhuma anotação</NoNotesText>
        </NoNotes>
      )}
    </Container>
  );
};
