function Message() {
  const name = "Mosh";
  // JSX: JavaScript XML
  //React.CreateElement(...);
  // babeljs.io/
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}
// to use it, export default Object
export default Message;
