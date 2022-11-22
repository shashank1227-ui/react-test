import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const property=[{
    title:"string"
  }];
  return (
    <div>
   <h2> lets get started</h2>
   <ExpenseItem proper={property}></ExpenseItem>
  </div>
  );
}

export default App;
