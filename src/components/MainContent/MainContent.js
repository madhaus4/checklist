import './MainContent.css';
import ItemForm from '../ItemForm/ItemForm';
import ListContainer from "../ListContainer/ListContainer";

const MainContent = () => {

  return (
    <section>
      <h1>2022 Goal List</h1>
      <ItemForm />
      <ListContainer />
    </section>
  )
}


export default MainContent;