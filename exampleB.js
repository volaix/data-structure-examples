//to group the object into parts of 3
//get help on this, how to do as FP?

const initialState = {
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

//Creates array with empty objects
const sizeOfColumn = 3
const createArray = (sizeofColumn) => {
  const numberOfObjects = Object.keys(initialState).length / sizeOfColumn
  const accumSetup = [] //[{}, {}, {}, {}]
  for (let i = 1; i <= numberOfObjects; i++) {
    accumSetup.push({})
  }
  return accumSetup
}

//reducer for result
const reducer = (accum, buttonTitle, index) => {
  const group = Math.floor(index/3)
  accum[group][buttonTitle] = initialState[buttonTitle]
  return [
    ...accum,
  ]
}

//the answer
const result = Object.keys(initialState)
  .reduce(reducer, createArray(sizeOfColumn))
console.log(result)

const expectedState = [
  {
    Philosophy: true,
    Music: true,
    Travelling: false,
  },
  {
    Sport: true,
    Soccer: false,
    'Rock\'n\'Roll': false,
  },
  {
    Swimming: false,
    Radiohead: false,
    Dog: true,
  },
  {
    Religion: true,
    'Michael Jackson': true,
    France: true
  }
]