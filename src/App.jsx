import "./App.css";
import Section from "./components/Section/Section";
import ProfileList from "./components/ProfileList/ProfileList";
import usersFromData from "./data/data.json";
import { useState } from "react";
import Counter from "./components/Counter/Counter";
import LoginForm from "./components/LoginForm/LoginForm";
import SearchBar from "./components/SearchBar/SearchBar";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";
import AddProfileForm from "./components/AddProfileForm/AddProfileForm";
import { nanoid } from "nanoid";

const App = () => {
  const [showUserList, setshowUserList] = useState(false);
  const [counter, setCounter] = useState(0);
  const [paragraph, setParagraph] = useState(true);
  const [lang, setLang] = useState("🇬🇧");
  const [users, setUsers] = useState(usersFromData);
  const [filterValue, setFilterValue] = useState("");

  const changeCounter = (operation) => {
    // if (operation === "+") {
    //   setCounter(counter + 1);
    // }
    // if (operation === "-" && counter > 0) {
    //   setCounter(counter - 1);
    // }
    // Аналогичный более корректный вариант!
    //Здесь prevCounter — это текущее состояние, переданное в setCounter.
    // Используется Math.max для предотвращения ухода в отрицательные значения. Это избавляет от лишней проверки if.
    setCounter((prevCounter) =>
      operation === "+" ? prevCounter + 1 : Math.max(prevCounter - 1, 0)
    );
  };

  const resetCounter = () => {
    setCounter(0);
  };
  const toogleUserList = () => {
    // setshowUserList((actualState) => !actualState);
    setshowUserList(!showUserList);
  };

  const toggleParagraph = () => {
    setParagraph(!paragraph);
  };

  const handleLogin = (userData) => {
    console.log(userData);
  };

  const onAddProfile = (profile) => {
    const finalProfile = { ...profile, id: nanoid() };

    setUsers([finalProfile, ...users]);
  };

  const onDeleteProfile = (profileId) => {
    setUsers(users.filter((item) => item.id !== profileId));
  };

  const handleFilter = (e) => {
    const value = e.target.value;

    setFilterValue(value);
  };

  const filteredProfiles = users.filter((profile) =>
    profile.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <Section title="Contact List">
        <AddProfileForm onAddProfile={onAddProfile} />
        <div className="">
          <h2>Search profile</h2>
          <input
            type="text"
            placeholder="Enter profile name"
            value={filterValue}
            onChange={handleFilter}
          ></input>
        </div>
        <button type="button" onClick={toogleUserList}>
          Toggle list
        </button>

        {showUserList && (
          <ProfileList
            onDeleteProfile={onDeleteProfile}
            filteredProfiles={filteredProfiles}
          />
        )}
      </Section>
      <Section title="Practice task-1">
        <Counter
          changeCounter={changeCounter}
          counter={counter}
          resetCounter={resetCounter}
        />
      </Section>
      <Section title="Practice task-2">
        <p>{!paragraph ? "Close" : "Open"}</p>
        <button onClick={toggleParagraph}>click</button>
      </Section>
      <Section title="Form-01">
        <LoginForm onLogin={handleLogin} />
      </Section>
      <Section title="Контрольована форма">
        <SearchBar />
      </Section>
      <Section title="Контрольованний селект">
        <p style={{ fontSize: 30 }}>Selected language: {lang}</p>
        <LangSwitcher value={lang} onSelect={setLang} />
      </Section>
    </>
  );
};

export default App;
