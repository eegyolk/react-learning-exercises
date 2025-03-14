/**
 * The main component, renders a user profile with an avatar inside a card.
 *
 * @returns {JSX.Element} A profile component displaying an avatar inside a card.
 */
function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

/**
 * A reusable card component that wraps its children inside a styled div.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the card.
 * @returns {JSX.Element} A styled card component that wraps its children.
 */
function Card({ children }) {
  return (
    <div className="card">
      {children} {/* Renders any child components or elements inside the card */}
    </div>
  );
}

/**
 * Renders an avatar image for a given person.
 *
 * @param {Object} person - An object representing a person.
 * @param {number} size - The width and height of the avatar image.
 * @returns {JSX.Element} A JSX element displaying the person's avatar.
 */
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

/**
 * Generates a URL for a person's image from Imgur.
 *
 * @param {Object} person - An object representing a person.
 * @param {string} [size='s'] - The size of the image ('s', 'm', 'l', etc.), defaults to 's' (small).
 * @returns {string} The full URL of the image.
 */
function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

export default Profile;