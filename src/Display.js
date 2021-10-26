import { useEffect, useState } from "react";

function Display(props) {
  const [postObj, setPostObj] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + props.postId)
      .then((res) => res.json())
      .then((post) => {
        if (postObj.id !== props.postId) {
          setPostObj(post);
        }
      });
  });

  return (
    <div>
      {postObj ? (
        <div>
          <h1>{postObj.title}</h1>
          <p>{postObj.body}</p>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default Display;
