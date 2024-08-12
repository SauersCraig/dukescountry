import "./RandomUser.styles.css";

export function RandomUser(users) {
  // Get a random number 0 to the length of the users array
  const randomUser = Math.floor(Math.random() * users.users.length);
  // create a new object with the user found at the random number spot in the array
  const randomElement = users.users[randomUser];

 
// return will show the email and phone number of the randomly picked user

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
