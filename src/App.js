import { collection, getDocs, orderBy, query,onSnapshot} from "firebase/firestore";
import { useState, useEffect } from "react";
import "./App.css";
import DB from './firebase';

function App() {
  
  const [connectPosts, setConnectPosts] = useState([]);

  useEffect(() => { 
    const connectPostDatas = collection(DB, 'connectPosts');
    const q = query(connectPostDatas, orderBy("timestamp", "desc"))
    getDocs(q).then((snapShot) => {

      setConnectPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });

    //リアルタイムで取得
    onSnapshot(q, (querySnapshot) => { 
      setConnectPosts(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
    });
    
  }, []);

  return (
    <div className="App">
      <div>
        {connectPosts.map((post) => (
          <div key={post.title}>
            <h1 className="title">{post.title}</h1>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
