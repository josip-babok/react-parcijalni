const ListaRepos = ({ repos }) => {
  return (
    <div className="repos-lista">
      <p>
        <strong>REPOZITORIJI: </strong>
      </p>
      <ul>
        {repos.map((repo) => {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ListaRepos;
