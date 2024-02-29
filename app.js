const loadPhoneData = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/phones?search=iphone"
    );
    const data = await res.json();
    displayPhoneData(data.data);
};

const displayPhoneData = (data) => {
    console.log(data);
    const phoneContainer = document.getElementById("phone-container");
    data.forEach((element) => {
        const div = document.createElement("div");
        div.classList = `card bg-base-100 shadow-xl`;
        div.innerHTML = `
            <figure>
                <img
                    src=${element.image}
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${element.phone_name}</h2>
                <p></p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(div);
    });
};

loadPhoneData();
