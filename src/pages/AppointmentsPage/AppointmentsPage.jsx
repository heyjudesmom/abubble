import "./AppointmentsPage.css"
import NewAppointmentForm from "../../components/NewAppointmentForm/NewAppointmentForm";
import AppointmentList from "../../components/AppointmentList/AppointmentList";
import { useEffect, useState } from "react";

export default function AppointmentsPage() {
  const [appts, setAppts] = useState([]);

  useEffect(function () {
    const apptsFromStorage = JSON.parse(localStorage.getItem("appts"));
    if (apptsFromStorage === null) setAppts([]);
    setAppts(apptsFromStorage);
  }, []);

  function addAppt(appt) {
    setAppts([appts, appt]);
    localStorage.setItem("appts", JSON.stringify(appts));
  }

  return (
    <main>
      <h1>AppointmentsPage</h1>
      <main className="flex-ctr-ctr">
        <AppointmentList appts={appts} />
        <NewAppointmentForm addAppt={addAppt}/>
      </main>
    </main>
  );
}