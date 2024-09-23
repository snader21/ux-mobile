import { createContext, useState, useContext } from "react";
import { Alarm } from "../models/alarm";

const initialAlarms = [
  new Alarm(1, 5, 0, "AM", [1, 1, 1, 1, 1, 0, 0], true, false, true),
  new Alarm(2, 8, 30, "AM", [0, 0, 0, 0, 0, 0, 1], false, false, true),
  new Alarm(3, 9, 30, "PM", [1, 0, 1, 0, 1, 0, 1], true, true, true),
];

const AlarmsContext = createContext({
  alarms: [],
  addAlarm: (alarm) => {},
  removeAlarm: (alarmId) => {},
});

function AlarmsContextProvider({ children }) {
  const [alarmsList, setAlarms] = useState(initialAlarms);

  function addAlarm(alarm) {
    setAlarms((prevAlarms) => [...prevAlarms, alarm]);
  }

  function removeAlarm(alarmId) {
    setAlarms((prevAlarms) =>
      prevAlarms.filter((alarm) => alarm.id !== alarmId)
    );
  }

  return (
    <AlarmsContext.Provider
      value={{ alarms: alarmsList, addAlarm, removeAlarm }}
    >
      {children}
    </AlarmsContext.Provider>
  );
}

function useAlarmsContext() {
  const context = useContext(AlarmsContext);

  if (!context) {
    throw new Error(
      "useAlarmsContext must be used within an AlarmsContextProvider"
    );
  }

  return context;
}

export { AlarmsContextProvider, useAlarmsContext };
