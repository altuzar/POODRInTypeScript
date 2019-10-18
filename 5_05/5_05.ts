// class Trip
//   attr_reader :bicycles, :customers, :vehicle

//   def initialize(bicycles, customers, vehicles)
//     @bicycles   = bicycles
//     @customers  = customers
//     @vehicle   = vehicle
//   end

//   # this 'mechanic' argument could be of any class
//   def prepare(mechanic)
//     mechanic.prepare_bicycles(bicycles)
//   end

//   # ...
// end

// # if you happen to pass an instance of *this* class,
// # it works
// class Mechanic
//   def prepare_bicycles(bicycles)
//     bicycles.each {|bicycle| prepare_bicycle(bicycle)}
//   end

//   def prepare_bicycle(bicycle)
//     #...
//   end
// end

// class Bicycle
// end

// class Customer
// end

// class Vehicle
// end

// Trip.new(
//   [Bicycle.new, Bicycle.new, Bicycle.new],
//   [Customer.new, Customer.new],
//   Vehicle.new
//   ).prepare(Mechanic.new)

class Trip {
  private _bicycles: any;
  private _customers: any;
  private _vehicle: any;

  constructor(bicycles, customers, vehicle) {
    this._bicycles = bicycles;
    this._customers = customers;
    this._vehicle = vehicle;
  }

  get bicycles() {
    return this._bicycles;
  }
  get customers() {
    return this._customers;
  }
  get vehicle() {
    return this._vehicle;
  }

  // this 'mechanic' argument could be of any class
  public prepare(mechanic) {
    mechanic.prepare_bicycles(this.bicycles);
  }
}

// if you happen to pass an instance of *this* class, it works
class Mechanic {
  public prepare_bicycles(bicycles) {
    bicycles.forEach(bicycle => this.prepare_bicycle(bicycle));
  }

  private prepare_bicycle(bicycle) {
    // ...
    console.log('prepare_bicycle...');
  }
}

class Bicycle {}
class Customer {}
class Vehicle {}

new Trip(
  [new Bicycle(), new Bicycle(), new Bicycle()],
  [new Customer(), new Customer()],
  new Vehicle()
).prepare(new Mechanic());
