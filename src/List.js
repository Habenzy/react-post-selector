import { useEffect, useState } from "react";

function List(props) {
  const [postList, setPostList] = useState([])

  useEffect(() => {
    if(!postList.length) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(postArr => {
          setPostList(postArr)
        })
    }
  })

  console.log(postList)

  function handleClick(evt) {
    props.chooseId(evt.target.id)
  }

  return(
    <ul>
      {postList.map((postObj) => {
        return <li onClick={handleClick} id={postObj.id} key={postObj.id}>{postObj.title}</li>
      })}
    </ul>
  )
}

export default List