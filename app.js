const loadPhoneData = async (searchText, isShowAll) => {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    );
    const data = await res.json();
    displayPhoneData(data.data, isShowAll);
};

const displayPhoneData = (data, isShowAll) => {
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerHTML = "";

    const btnShowAll = document.getElementById("btnShowAll");

    if (data.length > 9 && !isShowAll) {
        btnShowAll.classList.remove("hidden");
    } else {
        btnShowAll.classList.add("hidden");
    }

    // console.log(data);

    if (!isShowAll) {
        data = data.slice(0, 9);
    }

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
                    <button onclick="handleShowDetails('${element.slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(div);
    });
    handleLoadingSpinner(false);
};

const handleSearchPhone = (isShowAll) => {
    handleLoadingSpinner(true);
    const inputField = document.getElementById("input-field");
    const inputFieldValue = inputField.value;
    loadPhoneData(inputFieldValue, isShowAll);
};

const handleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById("loading-spinner");
    if (isLoading) {
        loadingSpinner.classList.remove("hidden");
    } else {
        loadingSpinner.classList.add("hidden");
    }
};

const handleShowAllPhone = () => {
    handleSearchPhone(true);
};

const handleShowDetails = async(currentId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${currentId}`)
    const data = await res.json();
    showPhoneDetails(data)
};

const showPhoneDetails = (phone) => {
    my_modal_5.showModal()
    console.log(phone.data)
    // const phoneName = document.getElementById('show-detail-phone-name');
    // phoneName.innerText = phone.data.name;

    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML = `
        <img src="${phone.data.image}"/>
        <p class="font-bold"><span> Storage : ${phone.data.mainFeatures
.            storage}</span></p>
    `

}
