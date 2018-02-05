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

//to become

const expectedState = {
  Philosophy: true,
  Music: true,
  Travelling: false,
  Sport: true,
  Soccer: false,
  "Rock'n'Roll": false,
  Swimming: false,
  Radiohead: false,
  Dog: true,
  Religion: true,
  Michael Jackson: true,
  France: true,
}
