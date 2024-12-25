import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "San Francisko", "Tokyo", "London", "Paris"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>
        <span>Hello World</span>
      </Alert>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
