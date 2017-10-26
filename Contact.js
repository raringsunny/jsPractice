var Person = function(name, age){
    this.name = name;
    this.age = age;

    var Address = function(street, zipcode){
        this.street = street;
        this.zipcode = zipcode;
    }
}

function main(){
    var p = new Person("Manoj", 100);

    p.Address = new Address("Sector 8", "Panchkula");
}
