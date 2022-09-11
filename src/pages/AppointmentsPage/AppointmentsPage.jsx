import "./AppointmentsPage.css"
import NewAppointmentForm from "../../components/NewAppointmentForm/NewAppointmentForm";
import AppointmentList from "../../components/AppointmentList/AppointmentList";
import * as apptsAPI from '../../utilities/appointments-api';
import { useEffect, useState } from "react";

export default function AppointmentsPage({tags}) {
  const [appts, setAppts] = useState([]);
  useEffect(function () {
    async function getAppts() {
      const appts = await apptsAPI.getAll();
      setAppts(appts);
    }
    getAppts();
  }, []);
  
  async function handleAddAppt(apptFormData) {
    const appt = await apptsAPI.add(apptFormData)
    setAppts([...appts, appt]);
  }

  async function handleDelete(apptData) {
    const appt = await apptsAPI.deleteAppt(apptData);
    const updatedAppts = appts.filter((a) => a._id !== appt._id)
    setAppts(updatedAppts);
  }

  return (
    <main>
      <h1>appointments.</h1>
      <main className="container">
        <AppointmentList appts={appts} tags={tags} handleDelete={handleDelete}/>
        <NewAppointmentForm handleAddAppt={handleAddAppt} tags={tags}/>
      </main>
    </main>
  );
}