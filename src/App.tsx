import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { ReactComponent as Logo } from 'assets/favicon.svg';

function App() {
  return (
    <div className="App bg-blue-100 justify-center">
      <Header title="hola" />
      <Logo height={100} width={100} />
      <Button onClick={() => alert('hola')}>Heyo</Button>
    </div>
  );
}

export default App;
