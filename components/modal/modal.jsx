import "./modal.css";

const Modal = ({ displayModal, onObjectSubmit, dataFromParent }) => {
  const {
    name,
    setname,
    email,
    setemail,
    userData,
    setuserData,
    userForUpdation,
    setuserForUpdation,
  } = dataFromParent;

  const validateForm = () => {
    if (name && email) {
      return true;
    } else {
      alert("Enter every field");
      return false;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const newUser = { name, email };
    onObjectSubmit(newUser);

    displayModal();
    setname("");
    setemail("");
  };

  const updateHandler = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const copyUserData = [...userData];

    const oldUser = { ...copyUserData[userForUpdation] };

    const updatedUser = { name, email };

    copyUserData[userForUpdation] = { ...oldUser, ...updatedUser };

    setname("");
    setemail("");
    displayModal();
    setuserData(copyUserData);
    setuserForUpdation(null);
  };

  return (
    <div
      className="modal-container"
      onClick={(event) => {
        if (event.target.className === "modal-container") {
          setname("");
          setemail("");
          displayModal();
        }
      }}
    >
      <div className="modal">
        <form className="form-container">
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={(event) => setname(event.target.value)}
              value={name}
            />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(event) => setemail(event.target.value)}
              value={email}
            />
          </div>
          <div className="form-input">
            {userForUpdation === null ? (
              <button type="submit" onClick={submitHandler}>
                Submit
              </button>
            ) : (
              <button type="submit" onClick={updateHandler}>
                Update
              </button>
            )}
          </div>

        </form>
      </div>
    </div>
  );
};

export default Modal;
