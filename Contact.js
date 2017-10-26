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
    var p = new Person("Manoj", 100);

    p.Address.street = "Sector 8";
    p.Address.zipcode = 134109;

    console.log("Name = " + p.name + ", age = " + p.age + 
        ", Address = " + p.Address.street + ", Zipcode = " + p.Address.zipcode);
    
}

main();
