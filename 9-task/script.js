// Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice. 


function Car(brand, model, engine, price) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.basePrice = price;
  this.getPrice = function () {
    let additionalPrice = 0;
    if (this.engine === "electric") {
      additionalPrice = 10000;
    } else if (this.engine === "diesel") {
      additionalPrice = 5000;
    }
    return this.basePrice + additionalPrice;
  }
  this.turnOn = function () {
    alert("vrooom");

  }

}

const myCar = new Car("Volvo", "C60", "diesel", 56000);
const YourCar = new Car("BMW", "X6", "electric", 30000);


console.log(YourCar.getPrice());