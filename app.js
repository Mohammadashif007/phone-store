const loadPhoneData = async (searchText) => {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    );
    const data = await res.json();
    displayPhoneData(data.data);
};

const displayPhoneData = (data) => {
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerHTML = "";

    data = data.slice(0, 9)

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
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(div);
    });
};

const handleSearchPhone = () => {
    const inputField = document.getElementById("input-field");
    const inputFieldValue = inputField.value;
    loadPhoneData(inputFieldValue);
};
