const carData = {
    car1: {
        images: ["supra1.jpg", "supra2.jpg"],
        mileage: "10 km/l",
        price: "$50,000",
        specs: "3.0L Twin-Turbo Inline-6, 382 HP"
    },
    car2: {
        images: ["mustang1.avif", "mustang2.jpg"],
        mileage: "8 km/l",
        price: "$55,000",
        specs: "5.0L V8, 450 HP"
    }
};

document.getElementById('carSelect').addEventListener('change', function() {
    const selectedCar = this.value;
    const detailsSection = document.getElementById('carDetails');
    const imagesDiv = document.getElementById('carImages');
    const mileageP = document.getElementById('carMileage');
    const priceP = document.getElementById('carPrice');
    const specsP = document.getElementById('carSpecs');

    if (carData[selectedCar]) {
        imagesDiv.innerHTML = '';
        carData[selectedCar].images.forEach(imgPath => {
            const img = document.createElement('img');
            img.src = imgPath;
            imagesDiv.appendChild(img);
        });
        mileageP.textContent = "Mileage: " + carData[selectedCar].mileage;
        priceP.textContent = "Price: " + carData[selectedCar].price;
        specsP.textContent = "Specs: " + carData[selectedCar].specs;
    } else {
        imagesDiv.innerHTML = '';
        mileageP.textContent = '';
        priceP.textContent = '';
        specsP.textContent = '';
    }
});