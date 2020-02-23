const stationsAPI = [
  {
    "hasElevator": false,
    "stationName": "Astor Place",
    "subways": ["4", "5", "6", "6 Express"],
    "subwaysWithElevatorAccess": [],
  },
  {
    "hasElevator": true,
    "stationName": "Canal Street",
    "subways":  ["4", "5", "6", "6 Express"],
    "subwaysWithElevatorAccess": ["6"]
  },
  {
    "hasElevator": false,
    "stationName": "50th Street",
    "subways":  ["1", "2"],
    "subwaysWithElevatorAccess": ["6"]
  }
];

export default stationsAPI;


// get the object keys, match