import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import TeamCards from "./components/TeamCards";
import FeaturesCard from "./components/FeaturesCard";

function App() {
  return (
    <>
      <Header />
      <FeaturesCard />
      <TeamCards />
      <Blogs />
      <Form />
      <Footer />
    </>
  );
}

export default App;
