const Contact = ({ name, number }) => {
  return (
    <>
      {/* <div style="inline-block"> */}
        <li>
          {name} : {number}
        </li>
        <button>Delete</button>
      {/* </div> */}
    </>
  );
};

export default Contact;
