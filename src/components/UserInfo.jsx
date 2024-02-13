const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      <div className="user-profile">
        <img src={user.avatar_url} alt={user.name} />
        <h1>{user.name}</h1>
      </div>
      <p className="user-bio">
        <strong>BIO: </strong>
        {user.bio || "Korisnik nema bio"}
      </p>
      <p className="user-location">
        <strong>LOKACIJA: </strong>
        {user.location || "Korisnik nema lokaciju"}
      </p>
    </div>
  );
};

export default UserInfo;
