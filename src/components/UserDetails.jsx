function UserDetails({ UserData }) {
  return (
    <>
      <div className="flex bg-fuchsia-200 text-3xl">
        Hello these are the user details:
      </div>
      {UserData.map((member) => {
        return (
          <div className="flex gap-4" key={member.id}>
            <div>Name: {member.name}</div>
            <div>Age: {member.age}</div>
            <div>Spouse: {member.spouse}</div>
          </div>
        );
      })}
    </>
  );
}

export default UserDetails;
