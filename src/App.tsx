import Button from "./components/Button";

function App() {
  //let items = ["New York", "San Francisko", "Tokyo", "London", "Paris"];

  /*const handleSelectedItem = (item: string) => {
    console.log(item);
  };*/

  return (
    <div>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
