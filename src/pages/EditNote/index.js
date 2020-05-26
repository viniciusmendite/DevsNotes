import React, {useState, useEffect, useLayoutEffect} from 'react';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  Container,
  TitleInput,
  BodyInput,
  CloseButton,
  CloseButtonImage,
  SaveButton,
  SaveButtonImage,
} from './styles';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector(state => state.notes.list);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('new');

  useEffect(() => {
    if (route.params?.key !== undefined && list[route.params.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: status === 'new' ? 'Nova Anotação' : 'Editar Anotação',
      headerLeft: () => (
        <CloseButton onPress={handleCloseButton} underlayColor="transparent">
          <CloseButtonImage source={require('../../assets/close.png')} />
        </CloseButton>
      ),
      headerRight: () => (
        <SaveButton onPress={handleSaveButton} underlayColor="transparent">
          <SaveButtonImage source={require('../../assets/save.png')} />
        </SaveButton>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, title, body, navigation]);

  const handleCloseButton = () => {
    navigation.goBack();
  };
  const handleSaveButton = () => {
    if (title !== '' && body !== '') {
      if (status === 'edit') {
      } else {
        dispatch({
          type: 'ADD_NOTE',
          payload: {
            title,
            body,
          },
        });
      }
      navigation.goBack();
    } else {
      Alert.alert('Aviso', 'Preencha título e corpo da anotação');
    }
  };

  return (
    <Container>
      <TitleInput
        value={title}
        onChangeText={t => setTitle(t)}
        placeholder="Digite o título da anotação"
        placeholderTextColor="#eee"
        autoFocus={true}
      />
      <BodyInput
        value={body}
        onChangeText={t => setBody(t)}
        placeholder="Digite o corpo da anotação"
        placeholderTextColor="#eee"
        multiline={true}
        textAlignVertical="top"
      />
    </Container>
  );
};
