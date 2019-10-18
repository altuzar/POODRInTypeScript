// # Trip preparation becomes more complicated
// class Trip
//   attr_reader :bicycles, :customers, :vehicle

//   def initialize(bicycles, customers, vehicle)
//     @bicycles   = bicycles
//     @customers  = customers
//     @vehicle    = vehicle
//   end

//   def prepare(preparers)
//     preparers.each {|preparer|
//       case preparer
//       when Mechanic
//         preparer.prepare_bicycles(bicycles)
//       when TripCoordinator
//         preparer.buy_food(customers)
//       when Driver
//         preparer.gas_up(vehicle)
//         preparer.fill_water_tank(vehicle)
//       end
//     }
//   end
// end

// # when you introduce TripCoordinator and Driver
// class TripCoordinator
//   def buy_food(customers)
//     # ...
//     puts "TripCoordinator buy_food"
//   end
// end

// class Driver
//   def gas_up(vehicle)
//     #...
//     puts "Driver gas_up"
//   end

//   def fill_water_tank(vehicle)
//     #...
//     puts "Driver fill_water_tank"
//   end
// end

// class Mechanic
//   def prepare_bicycles(bicycles)
//     bicycles.each {|bicycle| prepare_bicycle(bicycle)}
//   end

//   def prepare_bicycle(bicycle)
//     #...
//     puts "Mechanic prepare_bicycle #{bicycle}"
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

// Trip preparation becomes more complicated
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
      switch (preparer.constructor) {
        case Mechanic:
          preparer.prepare_bicycles(this.bicycles);
          break;
        case TripCoordinator:
          preparer.buy_food(this.customers);
          break;
        case Driver:
          preparer.gas_up(this.vehicle);
          preparer.fill_water_tank(this.vehicle);
          break;
      }
    });
  }
}

// when you introduce TripCoordinator and Driver
class TripCoordinator {
  public buy_food(customers) {
    // ...
    console.log('TripCoordinator buy_food');
  }
}

class Driver {
  public gas_up(vehicle) {
    // ...
    console.log('Driver gas_up');
  }

  public fill_water_tank(vehicle) {
    // ...
    console.log('Driver fill_water_tank');
  }
}

class Mechanic {
  public prepare_bicycles(bicycles) {
    bicycles.forEach(bicycle => this.prepare_bicycle(bicycle));
  }

  public prepare_bicycle(bicycle) {
    // ...
    console.log(`Mechanic prepare_bicycle ${bicycle}`);
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
