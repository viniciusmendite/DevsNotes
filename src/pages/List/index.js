import React, {useLayoutEffect, useState} from 'react';
import {StatusBar, Modal} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import NoteItem from '../../components/NoteItem';
import {
  Container,
  AddButton,
  AddButtonImage,
  NotesList,
  NoNotes,
  NoNotesImage,
  NoNotesText,
  MenuModal,
  MenuModalBody,
  ModalButtonDelete,
  ModalButtonDeleteText,
  ModalButtonCancel,
  ModalButtonCancelText,
} from './styles';

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const list = useSelector(state => state.notes.list);

  const [modalVisible, setModalVisible] = useState(false);
  const [indexDelete, setIndexDelete] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Suas notas',
      headerTitleStyle: {
        fontSize: 20,
      },
      headerTitleAlign: 'center',
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

  const handleActionPress = index => {
    setModalVisible(true);
    setIndexDelete(index);
  };

  const handleDelete = () => {
    dispatch({
      type: 'DEL_NOTE',
      payload: {
        key: indexDelete,
      },
    });
    setModalVisible(false);
  };

  return (
    <Container>
      <StatusBar backgroundColor="#cc9e83" barStyle="light-content" />
      {list.length > 0 && (
        <NotesList
          data={list}
          renderItem={({item, index}) => (
            <NoteItem
              data={item}
              index={index}
              onPress={handleNotePress}
              onLongPress={handleActionPress}
            />
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

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        animationType="fade">
        <MenuModal>
          <MenuModalBody>
            <ModalButtonDelete onPress={handleDelete}>
              <ModalButtonDeleteText>Excluir</ModalButtonDeleteText>
            </ModalButtonDelete>

            <ModalButtonCancel onPress={() => setModalVisible(false)}>
              <ModalButtonCancelText>Cancelar</ModalButtonCancelText>
            </ModalButtonCancel>
          </MenuModalBody>
        </MenuModal>
      </Modal>
    </Container>
  );
};
