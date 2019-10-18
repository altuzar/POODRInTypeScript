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
var Trip = /** @class */ (function () {
    function Trip(bicycles, customers, vehicle) {
        this._bicycles = bicycles;
        this._customers = customers;
        this._vehicle = vehicle;
    }
    Object.defineProperty(Trip.prototype, "bicycles", {
        get: function () {
            return this._bicycles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Trip.prototype, "customers", {
        get: function () {
            return this._customers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Trip.prototype, "vehicle", {
        get: function () {
            return this._vehicle;
        },
        enumerable: true,
        configurable: true
    });
    Trip.prototype.prepare = function (preparers) {
        var _this = this;
        preparers.forEach(function (preparer) {
            preparer.prepare_trip(_this);
        });
    };
    return Trip;
}());
// when every preparer is a Duck that responds to 'prepare_trip'
var Mechanic = /** @class */ (function () {
    function Mechanic() {
    }
    Mechanic.prototype.prepare_trip = function (trip) {
        var _this = this;
        trip.bicycles.forEach(function (bicycle) { return _this.prepare_bicycle(bicycle); });
    };
    // ...
    Mechanic.prototype.prepare_bicycles = function (bicycles) {
        var _this = this;
        bicycles.forEach(function (bicycle) { return _this.prepare_bicycle(bicycle); });
    };
    Mechanic.prototype.prepare_bicycle = function (bicycle) {
        // ...
        console.log("Mechanic prepare_bicycle " + bicycle);
    };
    return Mechanic;
}());
var TripCoordinator = /** @class */ (function () {
    function TripCoordinator() {
    }
    TripCoordinator.prototype.prepare_trip = function (trip) {
        this.buy_food(trip.customers);
    };
    TripCoordinator.prototype.buy_food = function (customers) {
        // ...
        console.log('TripCoordinator buy_food');
    };
    return TripCoordinator;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver.prototype.prepare_trip = function (trip) {
        var vehicle = trip.vehicle;
        this.gas_up(vehicle);
        this.fill_water_tank(vehicle);
    };
    // ...
    Driver.prototype.gas_up = function (vehicle) {
        // ...
        console.log('Driver gas_up');
    };
    Driver.prototype.fill_water_tank = function (vehicle) {
        // ...
        console.log('Driver fill_water_tank');
    };
    return Driver;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle() {
    }
    return Bicycle;
}());
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var trip = new Trip([new Bicycle(), new Bicycle(), new Bicycle()], [new Customer(), new Customer()], new Vehicle());
var preparers = [new TripCoordinator(), new Driver(), new Mechanic()];
trip.prepare(preparers);
