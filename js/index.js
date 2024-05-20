let API_URL = "https://dogapi.dog/api/v2/breeds";

let dogContainer = document.getElementById("breeds-container");

function constructTable(value){
    console.log(value)
    dogContainer.innerHTML = ""
    let cardsData = ""
    value.data.forEach((item) => {
        cardsData += `<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3">
        <div class="card">
        <img src="https://wallup.net/wp-content/uploads/2018/10/06/364377-puppies-puppy-baby-dog-dogs-41.jpg" class="card-img-top">
        <div class="card-body" style="min-height: 150px;">
        <h5 class="card-title text-center text-uppercase text-underline">${item.attributes.name}</h5>
        <p class="card-text">${item.attributes.description}</p>
        <h5 class="card-text text-center text-uppercase text-underline">Life Span</h5>
        <p class="text-center">Min : ${item.attributes.life.min} -  Max : ${item.attributes.life.max}</p>
        </div> 
        </div>
    </div>`
    })

    dogContainer.innerHTML = cardsData
}

async function fetchData() {
  try {
    let data = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
      },

      method: "GET",
    });

    if (data.status === 200) {
      let value = await data.json();
      constructTable(value);
    }
  } catch (err) {}
}

fetchData();