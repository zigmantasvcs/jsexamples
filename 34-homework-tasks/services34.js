function getAndLoadItems(){
    fetch("http://zigmantas.codingschoolprojektai.lt/api/index.php?data=clothes")
        .then(response => response.json())
        .then(data => convertData(data))
        .then(convertedData => loadItems(convertedData))
        .catch(error => console.error("error"));
}

// Download the page code:  https://gitlab.com/zigmantasvcs1/task-convert-data. Page is missing one implementation in services.js file. convertData function is not implemented. convertData function accepts data from http://zigmantas.codingschoolprojektai.lt/api/index.php?data=clothes (convertData(data)). convertData function should create new objects array which contains only t-shirts data and return it. New objects should contain name, size, color, price, image properties. Create those properties from response data you will get. Add try catch block in convertData function, catch block should log the problem and return empty array.
function convertData(data){
    try {
        return data.tshirts.map(tshirt => {
            let parts = tshirt.description.split('/');
            return {
                title: parts[0],
                size: parts[1],
                color: parts[2],
                price: tshirt.rate,
                image: tshirt.img
            };
        })
    } catch (error) {
        console.log("Ups. Some problems occur.");
        return [];
    }

}

function loadItems(dataList){
    for (const item of dataList) {
        let template = `<div class="rounded-3 card mb-4"><div class="card-body p-4"><div class="align-items-center d-flex justify-content-between row"><div class="col-xl-2 col-lg-2 col-md-2"><img alt="Cotton T-shirt"class="rounded-3 img-fluid"src="${item.image}"></div><div class="col-md-3 col-lg-3 col-xl-3"><p class="fw-normal lead mb-2">${item.title}<p><span class="text-muted">Size: </span>${item.size} <span class="text-muted">Color: </span>${item.color}</div><div class="col-md-3 col-lg-3 col-xl-2 d-flex"><button class="btn btn-link px-2"onclick='this.parentNode.querySelector("input[type=number]").stepDown()'><i class="fas fa-minus"></i></button> <input class="form-control form-control-sm"id="form1"min="0"name="quantity"type="number"value="0"> <button class="btn btn-link px-2"onclick='this.parentNode.querySelector("input[type=number]").stepUp()'><i class="fas fa-plus"></i></button></div><div class="col-md-3 col-xl-2 col-lg-2 offset-lg-1"><h5 class="mb-0">$${item.price}</h5></div><div class="col-lg-1 col-md-1 col-xl-1 text-end"><a class="text-danger"href="#!"><i class="fas fa-lg fa-trash"></i></a></div></div></div></div>`;

        document.querySelector("#items-container").innerHTML += template;
    }
}