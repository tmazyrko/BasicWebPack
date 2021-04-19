import getJSON from "./getJSON";
import TableGen from "./TableGen";

getJSON("", function (data) {
  console.log(data);
});

getJSON('http://localhost:8000/api/v1/cities',
  function (err, records) {
    if (err !== null) {
      alert('Something went wrong: ' + err);
    } else {
      let table = document.querySelector("table");
      let data = Object.keys((records.data[0]));
      let dataRecords = records.data;

      new TableGen(table, data, dataRecords);
    }

  });