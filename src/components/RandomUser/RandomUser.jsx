import "./RandomUser.styles.css";

export function RandomUser(users) {
  const randomUser = Math.floor(Math.random() * users.users.length);
  const randomElement = users.users[randomUser];

  console.log(randomElement);

  return (
    <div className="randomPickedContainer">
      <h2>Random User Picked</h2>
      <div>
        {randomElement && (
          <div>
            <p>{randomElement.email}</p>
            <p>{randomElement.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}
