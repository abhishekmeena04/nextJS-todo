import "./table.css";
import "remixicon/fonts/remixicon.css";

const Table = ({ userData, deleteUser, editUser }) => {
  return (
    <div className="table-wrapper">
      <table className="main-table">
        <thead>
          <tr>
            <th className="serial_num">#</th>
            <th className="user_name expand">Name</th>
            <th className="user_email expand">Email</th>
            <th className="action">Perform Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((elem, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td className="action_btn">
                  <span
                    className="delete_btn"
                    onClick={() => deleteUser(index)}
                  >
                    <i className="ri-delete-bin-line"></i>
                  </span>
                  <span className="edit_btn" onClick={() => editUser(index)}>
                    <i className="ri-pencil-fill"></i>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
