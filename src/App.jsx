import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {


  function handleClick(){
    alert('button 1 clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h2>React core concepts 2</h2>


      <Friends></Friends>

      <Users></Users>

      <Team></Team>
      
      <Counter></Counter>
      {/* normal html */}
      {/* <button onclick='handleClick()'>Click me</button> */}

      <button onClick={handleClick}>Button 1</button>
      <button onClick={handleClick2}>Button 2</button>
      <button onClick={() => {alert('button 3 clicked')}}>Button 3</button>
      
      {/* arrow function এর ভিতরে () => addToFive(5) এইভাবে call করে দিতে হয় */}
      <button onClick={() => addToFive(5)}>Button 4</button>
    </>
  )
}

export default App
