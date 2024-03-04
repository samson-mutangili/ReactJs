import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';

function App() {

  return(
    <>
      <Header/>
      {/* <Food/> */}
      <Card/>
      <br></br>
      {/* <Button/>
      <UserGreeting isLoggedIn={true} username="Samson"/>
      <Student name="Samson" age={27} profession="Software Engineer" hasMasters={true}/>
      <Student name="Justus" age={28} profession="Chef" hasMasters={false}/>
      <Student name="Brian" age={23} profession="Teacher" hasMasters={true}/>
      <Student/> */}

      <List/>

      <Footer/>
    </>
  );
}

export default App
