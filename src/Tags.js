import React from 'react';
import './Tags.css';
import { useState, useEffect } from 'react';

function Tags() {

    const [state, setState] = useState('posts');

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${state}`)
            .then(response => response.json())
            .then(json => setItems(json))

        return () => {
            console.log("clean up");
        }
    }, [state])

  return (
      <>
        <div className='tags_section'>
            <button onClick={() => setState('posts')}>Posts</button>
            <button onClick={() => setState('users')}>Users</button>
            <button onClick={() => setState('comments')}>Comments</button>
        </div>
        <h1 className='tag_state'>{ state }</h1>

        {items.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })}
      </>
  )
}

export default Tags;
