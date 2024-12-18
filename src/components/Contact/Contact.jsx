const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
