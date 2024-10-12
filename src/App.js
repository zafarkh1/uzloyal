import useGetData from "./api/api.js";

function App() {
  const { services, news } = useGetData();
  console.log(news);
  return <></>;
}

export default App;
