import {Provider} from 'react-redux'
import Players from './components/Players';
import TeamSelected from './components/TeamSelected';
import store from './store';

function App() {
  return (
    <Provider 
      store = {store}
    >

      <main>
        <h1>Football Players Manager</h1>
        <Players />
        <TeamSelected />
      </main>

    </Provider>
  );
}

export default App;
