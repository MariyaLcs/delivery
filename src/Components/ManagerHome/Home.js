import React, { useState } from "react";
import ListClients from "./ListClients";
import ListVolunteers from "./ListVolunteers";
import AddClient from "./AddClient";
import AppHeader from "./AppHeader";
import AddVolunteer from "./AddVolunteer";
import ClientMap from "./ClientMap";
import "./Home.css";

// import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

function Home() {
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

  let activeTasks = items && items.filter((task) => !task.completed);

  let completedTasks = items && items.filter((task) => task.completed);

  // DELETE client

  function deleteClient(client_id) {
    const updatedClients = items.filter((item) => item.client_id !== client_id);
    setClients(updatedClients);
  }

  // function deleteClient(client_id) {
  //   axios
  //     .delete(
  //       `https://qrk4yg29wg.execute-api.eu-west-2.amazonaws.com/dev/items/${client_id}`
  //     )
  //     .then((response) => {
  //       const updatedclients = items.filter(
  //         (client) => client.client_id !== client_id
  //       );
  //       setClients(updatedclients);
  //     })
  //     .catch((error) => {
  //       console.log("Could not delete client", error);
  //     });
  // }

  function completeDelivery(client_id) {
    const updatedClients = items.map((item) => {
      if (item.client_id === client_id) {
        item.completed = true;
      }
      return item;
    });
    setClients(updatedClients);
  }

  // const updatedClient = items.find((task) => task.client_id === client_id);

  //   axios
  //     .put(
  //       `https://qrk4yg29wg.execute-api.eu-west-2.amazonaws.com/dev/items/${client_id}`,
  //       updatedClient
  //     )
  //     .then((response) => {
  //       setClients(updatedClients);
  //     })
  //     .catch((error) => {
  //       console.log("Could not update the client", error);
  //     });
  // }

  function deleteVolunteer(volunteer_Id) {
    const updatedVolunteer = volunteer.filter(
      (volunteer) => volunteer.volunteer_Id !== volunteer_Id
    );
    setVolunteers(updatedVolunteer);
  }

  // function deleteVolunteer(volunteer_Id) {
  //   axios
  //     .delete(
  //       `https://qrk4yg29wg.execute-api.eu-west-2.amazonaws.com/dev/volunteer/${volunteer_Id}`
  //     )
  //     .then((response) => {
  //       const updatevolunteers = volunteer.filter(
  //         (volunteer) => volunteer.volunteer_Id !== volunteer_Id
  //       );
  //       setVolunteers(updatevolunteers);
  //     })
  //     .catch((error) => {
  //       console.log("Could not delete volunteer", error);
  //     });
  // }

  function addClient(full_name, email, phone, address, postcode, zone) {
    const newClient = {
      full_name: full_name,
      email: email,
      phone: phone,
      address: address,
      postcode: postcode,
      completed: false,
      zone: zone,
      date: moment(),
    };
    const updatedClients = [...items, newClient];
    setClients(updatedClients);
    // axios
    //   .post(
    //     "https://qrk4yg29wg.execute-api.eu-west-2.amazonaws.com/dev/items",
    //     newClient
    //   )
    //   .then((response) => {
    //     newClient.client_id = response.data.task[0].client_id;
    //     const updatedTask = [...items, newClient];
    //     setClients(updatedTask);
    //   })
    //   .catch((error) => {
    //     console.log("Error adding a client", error);
    //   });
  }

  function addVolunteer(
    full_name,
    email,
    phone,
    address,
    postcode,
    password,
    zone
  ) {
    const newVolunteer = {
      full_name: full_name,
      email: email,
      phone: phone,
      address: address,
      postcode: postcode,
      password: password,
      zone: zone,
    };

    const updatedVolunteer = [...volunteer, newVolunteer];
    setVolunteers(updatedVolunteer);

    // axios
    //   .post(
    //     "https://qrk4yg29wg.execute-api.eu-west-2.amazonaws.com/dev/volunteer",
    //     newVolunteer
    //   )
    //   .then((response) => {
    //     newVolunteer.volunteer_id = response.data.task[0].volunteer_Id;
    //     const updatedTask = [...volunteer, newVolunteer];
    //     setVolunteers(updatedTask);
    //   })
    //   .catch((error) => {
    //     console.log("Error adding a volunteer", error);
    //   });
  }

  return (
    <div className="home_body">
      <AppHeader />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Existing clients</h3>
                <div className="row">
                  {activeTasks.map((item) => (
                    <ListClients
                      key={item.client_id}
                      id={item.client_id}
                      full_name={item.full_name}
                      email={item.email}
                      phone={item.phone}
                      address={item.address}
                      postcode={item.postcode}
                      zone={item.zone}
                      deleteClient={deleteClient}
                      completeDelivery={completeDelivery}
                      createDate={item.date}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Item__border" />
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">
                  Existing clients - completed deliveries
                </h3>
                <div className="row">
                  {completedTasks.map((item) => (
                    <ListClients
                      key={item.client_id}
                      id={item.client_id}
                      full_name={item.full_name}
                      email={item.email}
                      phone={item.phone}
                      address={item.address}
                      postcode={item.postcode}
                      zone={item.zone}
                      completed={item.completed}
                      deleteClient={deleteClient}
                      createDate={item.date}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Item__border" />
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <AddClient addClient={addClient} />
          </div>
          <div className="col-sm-12 col-md-6">
            <AddVolunteer addVolunteer={addVolunteer} />
          </div>
        </div>
        <div className="Item__border" />

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Existing volunteers</h3>
                <div className="row">
                  {volunteer.map((volunteer) => (
                    <ListVolunteers
                      key={volunteer.volunteer_Id}
                      volunteer_Id={volunteer.volunteer_Id}
                      full_name={volunteer.full_name}
                      email={volunteer.email}
                      phone={volunteer.phone}
                      address={volunteer.address}
                      postcode={volunteer.postcode}
                      password={volunteer.password}
                      zone={volunteer.zone}
                      deleteVolunteer={deleteVolunteer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Item__border" />
      </div>

      <div className="col">
        <ClientMap />
      </div>
    </div>
  );
}

export default Home;
