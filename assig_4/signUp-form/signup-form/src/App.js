import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import HelloWorld from './components/HelloWorld';
import Notes from './components/Notes';

function App() {
  return (
    <>
      <Navbar title = "Assignment 4" />
      <HelloWorld heading = "Hello World" />
      <Form/> <br />
      <Notes/>
    </>
  );
}

export default App;
