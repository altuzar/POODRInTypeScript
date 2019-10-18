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
    // this 'mechanic' argument could be of any class
    Trip.prototype.prepare = function (mechanic) {
        mechanic.prepare_bicycles(this.bicycles);
    };
    return Trip;
}());
// if you happen to pass an instance of *this* class, it works
var Mechanic = /** @class */ (function () {
    function Mechanic() {
    }
    Mechanic.prototype.prepare_bicycles = function (bicycles) {
        var _this = this;
        bicycles.forEach(function (bicycle) { return _this.prepare_bicycle(bicycle); });
    };
    Mechanic.prototype.prepare_bicycle = function (bicycle) {
        // ...
        console.log('prepare_bicycle...');
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
new Trip([new Bicycle(), new Bicycle(), new Bicycle()], [new Customer(), new Customer()], new Vehicle()).prepare(new Mechanic());
