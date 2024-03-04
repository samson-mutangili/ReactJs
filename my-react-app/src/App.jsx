import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';

function App() {

  return(
    <>
      <Header/>
      <Food/>
      <Card/>
      <Card/>
      <br></br>
      <Button/>
      <Student name="Samson" age={27} profession="Software Engineer" hasMasters={true}/>
      <Student name="Justus" age={28} profession="Chef" hasMasters={false}/>
      <Student name="Brian" age={23} profession="Teacher" hasMasters={true}/>
      <Student/>

      <Footer/>
    </>
  );
}

export default App
