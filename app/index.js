url = "http://localhost:3000/api";

function eraseTables() {
  let patas = document.getElementById("patas").value;
  fetch(url+`/borrar/${patas}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

function changeColor() {
  let color = document.getElementById("new-color").value;
  fetch(url + `/modificar/${color}`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

function showTables() {
  document.getElementById("availables-tables").innerHTML = "";
  fetch(url + "/mesas")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((table) => {
        document.getElementById("availables-tables").innerHTML += `
            <div>
            <h3>Tamaño: ${table.tamano_cm}</h3>
            <p>Color: ${table.color}</p>
            <p>Material: ${table.material}</p>
            <p>Número de patas: ${table.patas}</p>
            </div>
            `;
      });
    });
}

showTables();
