import { mondayText } from "../weekly-schedule/weekly-schedule.mjs";

if (typeof window!=="undefined") {
  document.getElementById("edit-profile-button").addEventListener("click", function(event) {
    console.log(mondayText);
  })
}
