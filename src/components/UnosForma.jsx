import { useState } from "react";

const UnosForma = ({ dohvatiGithub, poruka }) => {
  const [unos, setUnos] = useState("");

  const handleChange = (e) => {
    setUnos(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dohvatiGithub(unos);
  };

  return (
    <form className="unos-forma">
      {poruka && <p className="error">{poruka}</p>}
      <label htmlFor="username">Korisničko ime:</label>
      <input
        type="text"
        name="username"
        placeholder="Unesite korisničko ime"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Pretraži</button>
    </form>
  );
};

export default UnosForma;
