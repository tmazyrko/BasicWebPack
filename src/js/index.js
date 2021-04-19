import getJSON from './getJSON';

function generateTableHead(table, data) {
  const thead = table.createTHead();
  const row = thead.insertRow();
  for (const key of data) {
    const th = document.createElement('th');
    const text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (const element of data) {
    const row = table.insertRow();
    // console.log(element);
    let key;
    for (key in element) {
      const cell = row.insertCell();
      const text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

getJSON('', (data) => {
  console.log(data);
});

getJSON('http://localhost:8000/api/v1/cities',
  (err, records) => {
    if (err !== null) {
      alert(`Something went wrong: ${err}`);
    } else {
      const table = document.querySelector('table');
      const data = Object.keys((records.data[0]));
      const dataRecords = records.data;

      generateTableHead(table, data);
      generateTable(table, dataRecords);
    }
  });
