import P from './P';

export default function App() {
  const texts = ['hello', 'world'].map((text, idx) => (
    <P key={idx} children={text} />
  ))

  return  <div children={texts} />
}
