import { DataProvider } from './Context/context';
import Router from './router';

function App() {
  return (
    <div className="App">
      {/* welcome */}
      
      <DataProvider>
        <Router/>
      </DataProvider>
    </div>
  );
}

export default App;