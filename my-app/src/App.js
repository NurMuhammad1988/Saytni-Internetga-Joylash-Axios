import './App.css';

// import UserList from './Components/UserLIst';
// import UserList2 from './Components/UserList2';
import PostUsers from './Components/PostUsers';
import Aos from "aos"
import 'aos/dist/aos.css';


function App() {
  
  Aos.init();
    

  return (
    
    <div className="App">

      {/*<Userlist />*/}
      {/*<UserList2 />*/}
      <PostUsers />



    </div>
  );
}

export default App;
