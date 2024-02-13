import UserInfo from "./UserInfo";
import ListaRepos from "./ListaRepos";

const UserIspis = ({ user, repos, reset }) => {
  return (
    <section className="user-ispis">
      <UserInfo user={user} />
      <ListaRepos repos={repos} />
      <button onClick={reset}>Reset</button>
    </section>
  );
};

export default UserIspis;
