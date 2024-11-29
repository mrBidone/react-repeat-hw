import "./App.css";
import Section from "./components/Section/Section";
import ProfileList from "./components/ProfileList/ProfileList";
import usersFromData from "./data/data.json";

const App = () => {
  return (
    <>
      <Section title="Contact List">
        <ProfileList userList={usersFromData} />
      </Section>
      <Section title="">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eligendi!
        </p>
        <button>Lorem2</button>
      </Section>
    </>
  );
};

export default App;
