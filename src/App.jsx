import Profile from "./components/Profile/Profile";
import Section from "./components/Section/Section";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import friends from "./data/userData.json";
import transactions from "./data/transactions.json";

const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const App = () => {
  return (
    <>
      <Section title="Task 1">
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </Section>
      <Section title="Task 2">
        <FriendList friends={friends} />
      </Section>
      <Section title="Task 3">
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
};

export default App;
