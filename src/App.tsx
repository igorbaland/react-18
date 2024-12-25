import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "San Francisko", "Tokyo", "London", "Paris"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
