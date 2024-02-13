import UnosForma from "./components/UnosForma";
import UserIspis from "./components/UserIspis";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [poruka, setPoruka] = useState("");
  const [prikazUser, setPrikazUser] = useState(false);

  const dohvatiGithub = (username) => {
    dohvatiUsera(username);
    dohvatiRepos(username);
  };

  const dohvatiUsera = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Korisnik nije pronađen");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setPrikazUser(true);
      })
      .catch((error) => {
        setPoruka("Korisnik nije pronađen");
        setPrikazUser(false);
      });
  };

  const dohvatiRepos = (userName) => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Korisnik nije pronađen");
        }
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setPrikazUser(true);
      })
      .catch((error) => {
        setPoruka("Korisnik nije pronađen");
        setPrikazUser(false);
      });
  };

  const reset = () => {
    setPrikazUser(false);
    setPoruka("");
    setUser({});
    setRepos([]);
  };

  return (
    <>
      <main>
        {prikazUser ? (
          <UserIspis user={user} repos={repos} reset={reset} />
        ) : (
          <UnosForma poruka={poruka} dohvatiGithub={dohvatiGithub} />
        )}
      </main>
    </>
  );
};

export default App;
