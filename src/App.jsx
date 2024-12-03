import "./App.css";
import Section from "./components/Section/Section";
import ProfileList from "./components/ProfileList/ProfileList";
import usersFromData from "./data/data.json";
import { useState } from "react";
import Bar from "./components/Bar/Bar";

const App = () => {
  const [showUserList, setshowUserList] = useState(false);

  const [bottles, setBottles] = useState({
    beer: 2,
    wine: 3,
    whiskey: 1,
  });

  const toogleUserList = () => {
    // setshowUserList((actualState) => !actualState);
    setshowUserList(!showUserList);
  };

  const onBarSupplyAdd = (alcoName) => {
    console.log("click", alcoName);

    setBottles({ ...bottles, [alcoName]: bottles[alcoName] + 1 });
    // [alcoName] - динамічний ключ обʼєкту. Передається як аргумент в значенні в режимі ключа, а не просто змінної.
    // Тому використовуємо в квадратних дужках.

    // Аналогічний варіант без використання динамічних ключів [alcoName]
    // if (alcoName === "beer") {
    //   setBottles({ ...bottles, beer: bottles["beer"] + 1 });
    // }
    // if (alcoName === "wine") {
    //   setBottles({ ...bottles, wine: bottles["wine"] + 1 });
    // }
    // if (alcoName === "whiskey") {
    //   setBottles({ ...bottles, whiskey: bottles["whiskey"] + 1 });
    // }
  };

  const totalBottles = bottles.beer + bottles.wine + bottles.whiskey;

  return (
    <>
      <Section>
        <Bar
          beer={bottles.beer}
          wine={bottles.wine}
          whiskey={bottles.whiskey}
          total={totalBottles}
          onBarSupplyAdd={onBarSupplyAdd}
        />
      </Section>
      <Section title="Contact List">
        <button type="button" onClick={toogleUserList}>
          Toggle list
        </button>

        {showUserList && <ProfileList userList={usersFromData} />}
      </Section>
      <Section title="">
        <p>Counter:</p>
        <button>Button</button>
      </Section>
    </>
  );
};

export default App;
