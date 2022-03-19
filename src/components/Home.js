import Users from "./Users";
import AddUser from "./AddUser";
import Groups from "./Groups";
import AddGroup from "./AddGroup";

const Home = () => {
  return (
    <div>
      <div style={{ backgroundColor: "aqua", padding: "12px" }}>
        <h1>Add Group</h1>
        <AddGroup />
      </div>
      <div style={{ backgroundColor: "azure", padding: "12px" }}>
        <h1>Goups</h1>
        <Groups />
      </div>
      <div style={{ backgroundColor: "aqua", padding: "12px" }}>
        <h1>Add User</h1>
        <AddUser />
      </div>
      <div style={{ backgroundColor: "azure", padding: "12px" }}>
        <h1>Users</h1>
        <Users />
      </div>
    </div>
  );
};

export default Home;
