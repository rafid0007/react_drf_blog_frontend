import React, {useEffect, useState} from 'react';
import PostLoading from "./components/PostLoading";
import Posts from "./components/Posts";
import './App.css';

const PostLoadingComp = PostLoading(Posts);

const App = () => {
  const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

  useEffect(() => {
    setAppState({loading: true});
    const fetchData = async () => {
      const apiUrl = 'http://127.0.0.1:8000/api/';
      const res = await fetch(apiUrl);
      const data = await res.json();
      setAppState({loading: false, posts: data})
    }
    fetchData();
  },[setAppState])
    return (
        <div className='App'>
          <h1>Latest Posts</h1>
          <PostLoadingComp isLoading={appState.loading} posts = {appState.posts}/>
        </div>
    );
};

export default App;