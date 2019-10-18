// # Trip preparation becomes easier
// class Trip
//   attr_reader :bicycles, :customers, :vehicle

//   def initialize(bicycles, customers, vehicle)
//     @bicycles   = bicycles
//     @customers  = customers
//     @vehicle    = vehicle
//   end

//   def prepare(preparers)
//     preparers.each {|preparer|
//       preparer.prepare_trip(self)}
//   end
//   # ...
// end

// # when every preparer is a Duck
// # that responds to 'prepare_trip'
// class Mechanic
//   def prepare_trip(trip)
//     trip.bicycles.each {|bicycle|
//       prepare_bicycle(bicycle)}
//   end
//   # ...
//   def prepare_bicycles(bicycles)
//     bicycles.each {|bicycle| prepare_bicycle(bicycle)}
//   end

//   def prepare_bicycle(bicycle)
//     #...
//     puts "Mechanic prepare_bicycle #{bicycle}"
//   end
// end

// class TripCoordinator
//   def prepare_trip(trip)
//     buy_food(trip.customers)
//   end
//   # ...
//   def buy_food(customers)
//     # ...
//     puts "TripCoordinator buy_food"
//   end
// end

// class Driver
//   def prepare_trip(trip)
//     vehicle = trip.vehicle
//     gas_up(vehicle)
//     fill_water_tank(vehicle)
//   end
//   # ...
//   def gas_up(vehicle)
//     #...
//     puts "Driver gas_up"
//   end

//   def fill_water_tank(vehicle)
//     #...
//     puts "Driver fill_water_tank"
//   end
// end

// class Bicycle
// end

// class Customer
// end

// class Vehicle
// end

// trip = Trip.new(
//           [Bicycle.new, Bicycle.new, Bicycle.new],
//           [Customer.new, Customer.new],
//           Vehicle.new )
// preparers = [TripCoordinator.new, Driver.new, Mechanic.new]

// trip.prepare(preparers)

// Trip preparation becomes easier
class Trip {
  private _bicycles: any;
  private _customers: any;
  private _vehicle: any;

  public constructor(bicycles, customers, vehicle) {
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

  public prepare(preparers) {
    preparers.forEach(preparer => {
      preparer.prepare_trip(this);
    });
  }
  // ...
}

// when every preparer is a Duck that responds to 'prepare_trip'
class Mechanic {
  public prepare_trip(trip) {
    trip.bicycles.forEach(bicycle => this.prepare_bicycle(bicycle));
  }

  // ...
  public prepare_bicycles(bicycles) {
    bicycles.forEach(bicycle => this.prepare_bicycle(bicycle));
  }

  public prepare_bicycle(bicycle) {
    // ...
    console.log(`Mechanic prepare_bicycle ${bicycle}`);
  }
}

class TripCoordinator {
  public prepare_trip(trip) {
    this.buy_food(trip.customers);
  }

  public buy_food(customers) {
    // ...
    console.log('TripCoordinator buy_food');
  }
}

class Driver {
  public prepare_trip(trip) {
    const vehicle = trip.vehicle;
    this.gas_up(vehicle);
    this.fill_water_tank(vehicle);
  }

  // ...
  public gas_up(vehicle) {
    // ...
    console.log('Driver gas_up');
  }

  public fill_water_tank(vehicle) {
    // ...
    console.log('Driver fill_water_tank');
  }
}

class Bicycle {}
class Customer {}
class Vehicle {}

const trip = new Trip(
  [new Bicycle(), new Bicycle(), new Bicycle()],
  [new Customer(), new Customer()],
  new Vehicle()
);

const preparers = [new TripCoordinator(), new Driver(), new Mechanic()];

trip.prepare(preparers);
