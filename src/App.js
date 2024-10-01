import logo from './HIT_logo.png';
import image from './4.jpg'
import './App.css';
import Greeting from './Components/Greetings';
function App() {
return (
<div className=":container xl:mx-auto">
   <div className="lg:grid grid-cols-2 h-screen ">
      <div className="col-span-1 flex items-center justify-center">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Greeting/>
         </header>
      </div>
      <div className=''>
         <img className="w-full h-screen scale-100" alt="login" src={image} />
      </div>
   </div>
</div>
);
}
export default App;