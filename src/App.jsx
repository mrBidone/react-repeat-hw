import "./App.css";
import Section from "./components/Section/Section";
import ProfileList from "./components/ProfileList/ProfileList";
import { useEffect, useState } from "react";
import Counter from "./components/Counter/Counter";
import LoginForm from "./components/LoginForm/LoginForm";
import SearchBar from "./components/SearchBar/SearchBar";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";
import AddProfileForm from "./components/AddProfileForm/AddProfileForm";
import { useDispatch, useSelector } from "react-redux";
import {
  apiAddProfile,
  apiDeleteProfile,
  apiGetAllProfiles,
  showProfilesList,
} from "./redux/profiles/profilesReducer";
import NewCounter from "./components/NewCounter/NewCounter";
import { setFilterValue } from "./redux/filter/filterReducer";
import {
  selectProfiles,
  selectShowUserList,
} from "./redux/profiles/profiles.selectors";
import { selectFilter } from "./redux/filter/filter.selector";

const App = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectProfiles);
  const showUserList = useSelector(selectShowUserList);
  const filterValue = useSelector(selectFilter);

  const [counter, setCounter] = useState(0);
  const [paragraph, setParagraph] = useState(true);
  const [lang, setLang] = useState("🇬🇧");

  useEffect(() => {
    dispatch(apiGetAllProfiles());
  }, [dispatch]);

  const changeCounter = (operation) => {
    setCounter((prevCounter) =>
      operation === "+" ? prevCounter + 1 : Math.max(prevCounter - 1, 0)
    );
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const toggleParagraph = () => {
    setParagraph(!paragraph);
  };

  const handleLogin = (userData) => {
    console.log(userData);
  };

  const onAddProfile = (profile) => {
    dispatch(apiAddProfile(profile));
  };

  const onDeleteProfile = (profileId) => {
    dispatch(apiDeleteProfile(profileId));
  };

  const toogleUserList = () => {
    dispatch(showProfilesList(!showUserList));
  };

  const handleFilter = (e) => {
    const value = e.target.value;

    dispatch(setFilterValue(value));
  };

  const filteredProfiles = users.filter((profile) =>
    profile.profileName.toLowerCase().includes(filterValue.toLowerCase())
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
      <Section>
        <NewCounter />
      </Section>
    </>
  );
};

export default App;
