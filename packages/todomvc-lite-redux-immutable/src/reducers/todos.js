import { Map, fromJS } from 'immutable'

const intialState = fromJS([
  { id: 1, text: 'Star Tina.js', completed: false },
  { id: 2, text: 'Star Tina-Redux', completed: true },
  { id: 3, text: 'Build a mini-program with Tina.js', completed: false },
  { id: 4, text: 'Add to Showcase of Tina.js', completed: false },
])

const todos = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.push(new Map({
        id: action.id,
        text: action.text,
        completed: false
      }))
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.get('id') === action.id
          ? todo.set('completed', !todo.get('completed'))
          : todo
      )
    case 'CLEAR_COMPLETED_TODOS':
      return state.filter(todo => !todo.get('completed'))
    default:
      return state
  }
}

export default todos
