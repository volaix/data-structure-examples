//Description:
//The following initialState was used in redux for button state
//It's purpose was a bit redundant and so I refactored to a better data structure

//initial code
const initialState = [
  {
    title: 'Philosophy',
    toggle: true,
  },
  {
    title: 'Music',
    toggle: true,
  },
  {
    title: 'Travelling',
    toggle: false,
  },
  {
    title: 'Sport',
    toggle: true,
  },
  {
    title: 'Soccer',
    toggle: false,
  },
  {
    title: `Rock'n'Roll`,
    toggle: false,
  },
  {
    title: `Swimming`,
    toggle: false,
  },
  {
    title: `Radiohead`,
    toggle: false,
  },
  {
    title: `Dog`,
    toggle: true,
  },
  {
    title: `Religion`,
    toggle: true,
  },
  {
    title: `Michael Jackson`,
    toggle: true,
  },
  {
    title: `France`,
    toggle: true,
  }
]

//transforming code
const reducer = (accum, button) => {
  const buttonTitle = button.title
  accum[buttonTitle] = button.toggle
  return accum
}
const singleObject = initialState.reduce(reducer, {})

//result of transformation
const resultState = {
  Philosophy: true,
  Music: true,
  Travelling: false,
  Sport: true,
  Soccer: false,
  'Rock\'n\'Roll': false,
  Swimming: false,
  Radiohead: false,
  Dog: true,
  Religion: true,
  'Michael Jackson': true,
  France: true
}

console.log(singleObject)