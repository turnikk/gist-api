import logo from './logo.svg';
import './App.css';
import 'file-icon-vectors/dist/file-icon-square-o.min.css';
import GistContainer from './components/GistContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter a Github username to get user's Gists.
        </p>
        <section>
            <GistContainer/>
        </section>
      </header>
    </div>
  );
}

export default App;
