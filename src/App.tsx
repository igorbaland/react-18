import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "San Francisko", "Tokyo", "London", "Paris"];
  return (
    <div>
      <ListGroup heading="Cities" items={items} />
    </div>
  );
}

export default App;
