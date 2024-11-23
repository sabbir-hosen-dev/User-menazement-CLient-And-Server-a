

// eslint-disable-next-line react/prop-types
function Users({users}) {
  


  return (
    <div>
      <p> Noumber Of User : {users && users.length}</p>
      {users &&
        // eslint-disable-next-line react/prop-types
        users.map((user) => (
          <div key={user.id} className="user">
            <p>Id: {user.id}</p>
            <p>
              Name: <strong>{user.name}</strong>
            </p>
            <p>
              Email: <strong>{user.email}</strong>
            </p>
          </div>
        ))}
    </div>
  );
}

export default Users;
