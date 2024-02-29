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

    const btnShowAll = document.getElementById('btnShowAll');

    if(data.length > 9) {
        btnShowAll.classList.remove('hidden');
    }
    else {
        btnShowAll.classList.add('hidden');
    }

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
    handleLoadingSpinner(false)
};

const handleSearchPhone = () => {
    const inputField = document.getElementById("input-field");
    const inputFieldValue = inputField.value;
    loadPhoneData(inputFieldValue);
    handleLoadingSpinner(true);
};

const handleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}
