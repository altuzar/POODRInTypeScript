// class Bicycle
//   attr_reader :size, :chain, :tire_size

//   def initialize(**opts)
//     @size       = opts[:size]
//     @chain      = opts[:chain]      || default_chain
//     @tire_size  = opts[:tire_size]  || default_tire_size
//   end

//   def default_chain         # <- common default
//     "11-speed"
//   end
//   # ...
// end

// class RoadBike < Bicycle
//   attr_reader :tape_color

//   def initialize(**opts)
//     @tape_color = opts[:tape_color]
//     super
//   end

//   def spares
//     { chain:      '11-speed',
//       tire_size:  '23',
//       tape_color: tape_color}
//   end

//   def default_tire_size     # <- subclass default
//     "23"
//   end
//   # ...
// end

// class MountainBike < Bicycle
//   attr_reader :front_shock, :rear_shock

//   def initialize(**opts)
//     @front_shock = opts[:front_shock]
//     @rear_shock  = opts[:rear_shock]
//     super
//   end

//   def spares
//     super.merge(front_shock: front_shock)
//   end

//   def default_tire_size     # <- subclass default
//     "2.1"
//   end
//    # ...
// end

// road_bike = RoadBike.new(
//               size:       'M',
//               tape_color: 'red' )

// puts road_bike.tire_size      # => 23
// puts road_bike.chain          # => 11-speed

// mountain_bike = MountainBike.new(
//                   size:         'S',
//                   front_shock:  'Manitou',
//                   rear_shock:   'Fox')

// puts mountain_bike.tire_size  # => 2.1
// puts mountain_bike.chain      # => 11-speed

// #####  # Bicycle's initialize method sends 'default_tire_size'
// #####  # but the class itself does not provide an implementation.
// class RecumbentBike < Bicycle
//   def default_chain
//     '10-speed'
//   end
// end

// bent = RecumbentBike.new(size: "L")
// # => undefined local variable or method `default_tire_size' for #<RecumbentBike:0x00007fbe8a126678 @size="L", @chain="10-

interface IOpts6 {
  style?: any;
  size?: any;
  chain?: any;
  tape_color?: any;
  front_shock?: any;
  rear_shock?: any;
  tire_size?: any;
}

class Bicycle6 {
  private _size: any;
  private _chain: any;
  private _tire_size: any;

  public constructor(opts: IOpts6 = {}) {
    this._size = opts.size;
    this._chain = opts.chain || this.default_chain();
    this._tire_size = opts.tire_size || this.default_tire_size();
  }

  get size() {
    return this._size;
  }
  get chain() {
    return this._chain;
  }
  get tire_size() {
    return this._tire_size;
  }

  public default_chain() {
    // <- common default
    return '11-speed';
  }
}

class RoadBike6 extends Bicycle6 {
  private _tape_color: any;

  public constructor(opts: IOpts6 = {}) {
    super(opts);
    this._tape_color = opts.tape_color;
  }

  get tape_color() {
    return this._tape_color;
  }

  public spares() {
    return {
      chain: '11-speed',
      tire_size: '23',
      tape_color: this.tape_color
    };
  }

  public default_tire_size() {
    // <- subclass default
    return '23';
  }
  // ...
}

class MountainBike6 extends Bicycle6 {
  private _front_shock: any;
  private _rear_shock: any;

  public constructor(opts: IOpts6 = {}) {
    super(opts);
    this._front_shock = opts.front_shock;
    this._rear_shock = opts.rear_shock;
  }

  get front_shock() {
    return this._front_shock;
  }
  get rear_shock() {
    return this._rear_shock;
  }

  public spares() {
    return Object.assign({}, super.spares(), {
      front_shock: this.front_shock
    });
  }

  public default_tire_size() {
    // <- subclass default
    return '2.1';
  }
  // ...
}

const road_bike = new RoadBike6({
  size: 'M',
  tape_color: 'red'
});

console.log(road_bike.tire_size); // => 23
console.log(road_bike.chain); // => 11-speed

const mountain_bike = new MountainBike6({
  size: 'S',
  front_shock: 'Manitou',
  rear_shock: 'Fox'
});

console.log(mountain_bike.tire_size); // => 2.1
console.log(mountain_bike.chain); // 11-speed

// Bicycle's constructor method sends 'default_tire_size'
// but the class itself does not provide an implementation.

class RecumbentBike6 extends Bicycle6 {
  public default_chain() {
    return '10-speed';
  }
}

const bent = new RecumbentBike6({
  size: 'L'
});
// => TypeError: this.default_tire_size is not a function
//      at new Bicycle ...
//      at new RecumbentBike ...
