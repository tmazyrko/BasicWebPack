import getJSON from './getJSON';
import TableGen from './TableGen';

getJSON('', function (data) {
  console.log(data);
});

getJSON('http://localhost:8000/api/v1/cities',
  function (err, records) {
    if (err !== null) {
      alert('Something went wrong: ' + err);
    } else {
      const table = document.querySelector('table');
      const data = Object.keys((records.data[0]));
      const dataRecords = records.data;

      new TableGen(table, data, dataRecords);
    }
  });