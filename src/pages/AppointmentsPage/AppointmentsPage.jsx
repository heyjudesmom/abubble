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

  return (
    <main>
      <h1>AppointmentsPage</h1>
      <main className="flex-ctr-ctr">
        <AppointmentList appts={appts} tags={tags}/>
        <NewAppointmentForm handleAddAppt={handleAddAppt} tags={tags}/>
      </main>
    </main>
  );
}