import dayjs from 'dayjs';

export const initialState = [
  {
    item: 'Buy it',
    completed: false,
    id: 0,
    completed_on: null
  },
  {
    item: 'Use it',
    completed: false,
    id: 1,
    completed_on: null
  },
  {
    item: 'Break it',
    completed: false,
    id: 2,
    completed_on: null
  },
  {
    item: 'Fix it',
    completed: false,
    id: 3,
    completed_on: null
  },
  {
    item: 'Trash it',
    completed: false,
    id: 4,
    completed_on: null
  },
  {
    item: 'Change it',
    completed: false,
    id: 5,
    completed_on: null
  },
  {
    item: 'Mail',
    completed: false,
    id: 6,
    completed_on: null
  },
  {
    item: 'Upgrade it',
    completed: false,
    id: 7,
    completed_on: null
  }
];

export const taskReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, {
        item: action.payload,
        completed: false,
        id: Date.now(),
        completed_on: null
      }];

    case 'TOGGLE_COMPLETED':
      return state.map(todo => {
        if (todo.id === action.payload) {
          if (!todo.completed) return {...todo, completed: true, completed_on: dayjs().format('M/D/YYYY')}
          else return {...todo, completed: false, completed_on: null}
        } else return todo;
      });

    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);

    default:
      return state;
  }
};