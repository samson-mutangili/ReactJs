import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import Counter from './Counter.jsx';

function App() {

  const fruits = [
                    {id: 1, name: "Apple", calories: 95}, 
                    {id: 2, name: "Orange", calories: 45}, 
                    {id: 3, name: "Banana", calories: 30}, 
                    {id: 4, name: "Watermelon", calories: 70},
                ]

  const vegetables = [
                  {id: 5, name: "Cabbage", calories: 75}, 
                  {id: 6, name: "Spinach", calories: 145}, 
                  {id: 7, name: "Potatoes", calories: 110}, 
                  {id: 8, name: "Carrots", calories: 25},
              ]

  return(
    <>
      <Header/>
      {/* <Food/> */}
      <Card/>
      <br></br>
      <Button/>
      <Counter/>
      {/* <UserGreeting isLoggedIn={true} username="Samson"/>
      <Student name="Samson" age={27} profession="Software Engineer" hasMasters={true}/>
      <Student name="Justus" age={28} profession="Chef" hasMasters={false}/>
      <Student name="Brian" age={23} profession="Teacher" hasMasters={true}/>
      <Student/> */}

      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}

      <Footer/>
    </>
  );
}

export default App
