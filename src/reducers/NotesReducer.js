const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  let newList = [...state.list];

  switch (action) {
    case 'ADD_NOTE':
      newList.push({
        title: action.payload.title,
        body: action.payload.body,
      });
      break;
  }

  return {...state, list: newList};
};
