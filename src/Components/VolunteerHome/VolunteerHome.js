import React, { useState } from "react";
import VolunteerListClients from "./VolunteerListClients";
import VolunteerHeader from "./VolunteerHeader";
import "./VolunteerHome.css";

import { v4 as uuidv4 } from "uuid";
// import axios from "axios";

function VolunteerHome() {
  const [items, setClients] = useState([
    {
      client_id: uuidv4(),
      full_name: "Client Name1",
      email: "client1@gmail.com",
      phone: "0161 555 5555",
      address: " 1 hyde terrace",
      postcode: "M4 4EW",
      completed: false,
      deleted: false,
      date: "2020-05-05",
      zone: "2",
    },
    {
      client_id: uuidv4(),
      full_name: "Client Name2",
      email: "client2@gmail.com",
      address: "3 woodhay street",
      postcode: "M4 4EW",
      phone: "0161 555 5555",
      completed: false,
      deleted: false,
      date: "2020-05-05",
      zone: "1",
    },
    {
      client_id: uuidv4(),
      full_name: "Client Name3",
      email: "client3@gmail.com",
      address: "2 woodlane",
      postcode: "M4 4EW",
      phone: "0161 555 5555",
      completed: true,
      deleted: false,
      date: "2020-05-05",
      zone: "2",
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get("https://qrk4yg29wg.execute-api.eu-west-2.amazonaws.com/dev/items")
  //     .then(
  //       //request is successful
  //       (response) => {
  //         console.log(response.data);
  //         const clients = response.data.items;
  //         setClients(clients);
  //       }
  //     )
  //     .catch(
  //       // an error
  //       (error) => {
  //         console.log("Error getting items", error);
  //       }
  //     )
  //     .finally(() => console.log("I am done"));
  // }, []);

  const activeTasks = items && items.filter((task) => !task.completed);

  function completeDelivery(client_id) {
    const updatedClients = items.map((item) => {
      if (item.client_id === client_id) {
        item.completed = true;
      }
      return item;
    });
    setClients(updatedClients);
  }

  // axios
  //   .put(
  //     `https://qrk4yg29wg.execute-api.eu-west-2.amazonaws.com/dev/items/${client_id}`,
  //     updatedClient
  //   )
  //   .then((response) => {
  //     setClients(updatedClients);
  //   })
  //   .catch((error) => {
  //     console.log("Could not update the client", error);
  //   });

  return (
    <div className="volonteer_home">
      <VolunteerHeader />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Existing clients</h3>
                <div className="row">
                  {activeTasks.map((item) => (
                    <VolunteerListClients
                      key={item.client_id}
                      id={item.client_id}
                      full_name={item.full_name}
                      email={item.email}
                      phone={item.phone}
                      address={item.address}
                      postcode={item.postcode}
                      zone={item.zone}
                      completeDelivery={completeDelivery}
                      createDate={item.date}
                    />
                  ))}
                  <div className="Item__border" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerHome;
