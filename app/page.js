"use client";

import Modal from "@/components/modal/modal";
import Table from "@/components/table/table";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [modal, setmodal] = useState(false);
  const [userData, setuserData] = useState([]);

  const [userForUpdation, setuserForUpdation] = useState(null);

  const handleObjectSubmit = (object) => {
    setuserData([...userData, object]);
  };

  const deleteFunction = (target_index) => {
    setuserData(userData.filter((_, index) => index !== target_index));
  };

  const editFunction = (targetIndex) => {
    setmodal(true);
    setname(userData[targetIndex].name);
    setemail(userData[targetIndex].email);
    setuserForUpdation(targetIndex);
  };

  const data = {
    name,
    setname,
    email,
    setemail,
    userData,
    setuserData,
    userForUpdation,
    setuserForUpdation,
  };

  useEffect(() => {
    console.log("useEffect ran!");
    console.log(userData);
  }, [userData]);

  return (
    <div className="main-container">
      {userData.length > 0 ? (
        <div>
          <Table
            userData={userData}
            deleteUser={deleteFunction}
            editUser={editFunction}
          />
        </div>
      ) : (
        <div>
          <h1>No user..!!</h1>
        </div>
      )}
      <div>
        <span className="add-user">
          <h4>
            <button onClick={() => setmodal(true)}>Add User</button>
          </h4>
        </span>
      </div>
      {modal && (
        <Modal
          name={name}
          setname={setname}
          email={email}
          setemail={setemail}
          userData={userData}
          setuserData={setuserData}
          displayModal={() => {
            setmodal(false);
          }}
          onObjectSubmit={handleObjectSubmit}
          userForUpdation={userForUpdation}
          setuserForUpdation={setuserForUpdation}
          dataFromParent={data}
        />
      )}
    </div>
  );
};

export default HomePage;
