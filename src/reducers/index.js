export const initialState = [
  {
    item: 'Buy it',
    completed: false,
    id: 0,
  },
  {
    item: 'Use it',
    completed: false,
    id: 1
  },
  {
    item: 'Break it',
    completed: false,
    id: 2
  },
  {
    item: 'Fix it',
    completed: false,
    id: 3
  },
  {
    item: 'Trash it',
    completed: false,
    id: 4
  },
  {
    item: 'Change it',
    completed: false,
    id: 5
  },
  {
    item: 'Mail',
    completed: false,
    id: 6
  },
  {
    item: 'Upgrade it',
    completed: false,
    id: 7
  }
];

export const taskReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, {
        item: action.payload,
        completed: false,
        id: Date.now()
      }];

      case 'TOGGLE_COMPLETE':
        return state.map(todo => {
          if (todo.id === action.payload) return {...todo, completed: !todo.completed}
          else return todo;
        });

    default:
      return state;
  }
};