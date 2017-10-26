var Person = function(name, age){
    this.name = name;
    this.age = age;

    var Address = function(street, zipcode){
        this.street = street;
        this.zipcode = zipcode;
    }

    this.Address = new Address(this.street, this.zipcode);
}

function main(){
    var manoj = new Person("Manoj Mohan", 100);

    manoj.Address.street = "Sector 8";
    manoj.Address.zipcode = 134109;

    console.log(manoj.Address.street);
    console.log(manoj.Address.zipcode);
    
}

main();
