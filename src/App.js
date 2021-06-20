import './App.css';

import { useItems, items } from "./hooks/useItems";
import  {add} from "./actions/items";

function App() {
const [statee, dispatch] = useItems(items);
  //dispatch({type: 'ADD_ITEM', payload: {id: 5, title: "la 5eme todo"} });
  //console.log(state);

  return (
    <div>
    	<ul>
    		{statee.map((item) => <li key={item.id}>{item.title}</li>)}
    	</ul>
    	<button onClick={() => dispatch({type: 'ADD_ITEM', payload: {id: 5, title: "la 5eme todo"} })}>add</button>
    </div>
  );
}

export default App;
