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
            switch (preparer.constructor) {
                case Mechanic:
                    preparer.prepare_bicycles(_this.bicycles);
                    break;
                case TripCoordinator:
                    preparer.buy_food(_this.customers);
                    break;
                case Driver:
                    preparer.gas_up(_this.vehicle);
                    preparer.fill_water_tank(_this.vehicle);
                    break;
            }
        });
    };
    return Trip;
}());
// when you introduce TripCoordinator and Driver
var TripCoordinator = /** @class */ (function () {
    function TripCoordinator() {
    }
    TripCoordinator.prototype.buy_food = function (customers) {
        // ...
        console.log('TripCoordinator buy_food');
    };
    return TripCoordinator;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
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
var Mechanic = /** @class */ (function () {
    function Mechanic() {
    }
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
