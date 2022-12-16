import react, {useState} from "react";

const Counter = function () {
    const [likes, setLikes] = useState(0)
 
  function Inc() {
       setLikes(likes+1)
  }

  function Dec() {
    setLikes(likes-1)
  }

  return ( 
    <div>
     <h1>{likes}</h1> 
     <button onClick={Inc}> Inc </button>
     <button onClick={Dec}> Dec</button>
    </div>
  );
}

export default Counter;