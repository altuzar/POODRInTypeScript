// class Mechanic
//   # def prepare_trip(trip)
//   #   trip.bicycles.each {|bicycle|
//   #     prepare_bicycle(bicycle)}
//   # end
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
//   # def prepare_trip(trip)
//   #   buy_food(trip.customers)
//   # end
//   # ...
//   def buy_food(customers)
//     # ...
//     puts "TripCoordinator buy_food"
//   end
// end

// class Driver
//   # def prepare_trip(trip)
//   #   vehicle = trip.vehicle
//   #   gas_up(vehicle)
//   #   fill_water_tank(vehicle)
//   # end
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

// ###############################
// # Initial example
// ###############################
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
//   # ...
// end

// puts "\nInitial example:"
// trip = Trip.new(
//           [Bicycle.new, Bicycle.new, Bicycle.new],
//           [Customer.new, Customer.new],
//           Vehicle.new )
// preparers = [TripCoordinator.new, Driver.new, Mechanic.new]

// trip.prepare(preparers)

// ###############################
// # kind_of? example
// ###############################
// class Trip
//   def prepare(preparers)
//     preparers.each {|preparer|
//       if preparer.kind_of?(Mechanic)
//         preparer.prepare_bicycles(bicycles)
//       elsif preparer.kind_of?(TripCoordinator)
//         preparer.buy_food(customers)
//       elsif preparer.kind_of?(Driver)
//         preparer.gas_up(vehicle)
//         preparer.fill_water_tank(vehicle)
//       end
//     }
//   end
// end

// puts "\nkind_of? example:"
// trip = Trip.new(
//           [Bicycle.new, Bicycle.new, Bicycle.new],
//           [Customer.new, Customer.new],
//           Vehicle.new )
// preparers = [TripCoordinator.new, Driver.new, Mechanic.new]

// trip.prepare(preparers)

// ###############################
// # respond_to? example
// ###############################
// class Trip
//   def prepare(preparers)
//     preparers.each {|preparer|
//       if preparer.respond_to?(:prepare_bicycles)
//         preparer.prepare_bicycles(bicycles)
//       elsif preparer.respond_to?(:buy_food)
//         preparer.buy_food(customers)
//       elsif preparer.respond_to?(:gas_up)
//         preparer.gas_up(vehicle)
//         preparer.fill_water_tank(vehicle)
//       end
//     }
//   end
// end

// puts "\nrespond_to? example:"
// trip = Trip.new(
//           [Bicycle.new, Bicycle.new, Bicycle.new],
//           [Customer.new, Customer.new],
//           Vehicle.new )
// preparers = [TripCoordinator.new, Driver.new, Mechanic.new]

// trip.prepare(preparers)

class Mechanic {
  // prepare_trip(trip) {
  //   trip.bicycles.forEach((bicycle) => this.prepare_bicycle(bicycle));
  // }
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
  // prepare_trip(trip) {
  //   this.buy_food(trip.customers);
  // }
  // ...

  public buy_food(customers) {
    // ...
    console.log('TripCoordinator buy_food');
  }
}

class Driver {
  // prepare_trip(trip) {
  //   const vehicle = trip.vehicle;
  //   this.gas_up(vehicle);
  //   this.fill_water_tank(vehicle);
  // }
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

/*************************
 * Initial example
 *************************/
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

console.log('\nInitial example:');
const trip = new Trip(
  [new Bicycle(), new Bicycle(), new Bicycle()],
  [new Customer(), new Customer()],
  new Vehicle()
);

let preparers = [new TripCoordinator(), new Driver(), new Mechanic()];

trip.prepare(preparers);

class TripUsingInstanceOf {
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
      if (preparer instanceof Mechanic) {
        preparer.prepare_bicycles(this.bicycles);
      } else if (preparer instanceof TripCoordinator) {
        preparer.buy_food(this.customers);
      } else if (preparer instanceof Driver) {
        preparer.gas_up(this.vehicle);
        preparer.fill_water_tank(this.vehicle);
      }
    });
  }
}

console.log('\ninstanceof example:');
// NOTE: defined above, reassigned here...
const trip2 = new TripUsingInstanceOf(
  [new Bicycle(), new Bicycle(), new Bicycle()],
  [new Customer(), new Customer()],
  new Vehicle()
);

preparers = [new TripCoordinator(), new Driver(), new Mechanic()];

trip2.prepare(preparers);

class TripUsingInOperator {
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
      if ('prepare_bicycles' in preparer) {
        preparer.prepare_bicycles(this.bicycles);
      } else if ('buy_food' in preparer) {
        preparer.buy_food(this.customers);
      } else if ('gas_up' in preparer) {
        preparer.gas_up(this.vehicle);
        preparer.fill_water_tank(this.vehicle);
      }
    });
  }
}

console.log('\nin operator example:');
const trip3 = new TripUsingInOperator(
  [new Bicycle(), new Bicycle(), new Bicycle()],
  [new Customer(), new Customer()],
  new Vehicle()
);

preparers = [new TripCoordinator(), new Driver(), new Mechanic()];

trip3.prepare(preparers);
