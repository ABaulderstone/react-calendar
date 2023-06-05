import tw from 'twin.macro';
const Heading = tw.h1`text-red-500`;

function App() {
  return (
    <>
      <Heading>Hello world</Heading>
      <h2 tw='text-blue-500'>Test</h2>
    </>
  );
}

export default App;
