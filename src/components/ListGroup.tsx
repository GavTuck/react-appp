import { MouseEvent } from "react"

function ListGroup() {
  let items = [
    'North Carolina','New Jersy', 'Florida', 'Maine'
  ]
  
  let selectedIndex = -1;
  const handleClick = (event: MouseEvent) => console.log(event);
  const GetMessage = () => {
    items.length === 0 && <p>No items found</p> 
  }

  return (
    <>
      <h1>List</h1>
      {GetMessage()}
      <ul className={ selectedIndex === }>
      {items.map((item,index
      ) => <li className= "list-group-item"onClick = {handleClick}> {item}</li>)}
      </ul>
    </>
  );
}

export default ListGroup;
