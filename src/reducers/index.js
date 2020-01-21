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
    default:
      return state;
  }
};