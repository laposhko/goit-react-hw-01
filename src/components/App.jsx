import Profile from "./Profile";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";
import userData from "../userData.json";
import friends from "../friends.json";
import transactionHistory from "../transactionHistory.json";
export default function App() {
  return (
    <>
      <Profile info={userData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactionHistory} />
    </>
  );
}
