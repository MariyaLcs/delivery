import React, { useState, useEffect } from "react";
import ListPickUpVolunteer from "./ListPickUpVolunteer";

import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
import { useHistory } from "react-router-dom";

function PickUpVolunteer() {
  const [volunteer, setVolunteers] = useState([
    {
      volunteer_Id: uuidv4(),
      full_name: "Volunteer Name1",
      email: "volunteer1@gmail.com",
      phone: "0161 555 5555",
      address: "1 woodsley terrace",
      postcode: "SK5 1BZ",
      password: "12345",
      zone: "1",
    },
    {
      volunteer_Id: uuidv4(),
      full_name: "Volunteer Name2",
      email: "volunteer2@gmail.com",
      phone: "0161 555 5555",
      address: "M4 4EW",
      postcode: "SK5 1BZ",
      password: "12345",
      zone: "2",
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://qrk4yg29wg.execute-api.eu-west-2.amazonaws.com/dev/volunteers"
  //     )
  //     .then(
  //       //request is successful
  //       (response) => {
  //         console.log(response.data);
  //         const volunteers = response.data.volunteer;
  //         setVolunteers(volunteers);
  //       }
  //     )
  //     .catch(
  //       // an error
  //       (error) => {
  //         console.log("Error getting volunteers", error);
  //       }
  //     )
  //     .finally(() => console.log("I am done"));
  // }, []);

  const history = useHistory();
  function handleSubmitClick(event) {
    event.preventDefault();
    let path = "/manager";
    history.push(path);
  }
  return (
    <div className="pickUpVolunteer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-center">The Existing Volunteers are:</h3>

            {volunteer.map((volunteer) => (
              <ListPickUpVolunteer
                key={volunteer.volunteer_Id}
                volunteer_Id={volunteer.volunteer_Id}
                full_name={volunteer.full_name}
              />
            ))}
            <button
              type="submit"
              className="btn btn-primary btn-block btn-login"
              onClick={handleSubmitClick}
            >
              Deliver
            </button>
            <p className="text-right mt-2">
              <a href="/manager">Back</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickUpVolunteer;
