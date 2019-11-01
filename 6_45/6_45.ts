// # ...
// class Bicycle
//   attr_reader :size, :chain, :tire_size

//   def initialize(**opts)
//     @size       = opts[:size]
//     @chain      = opts[:chain]      || default_chain
//     @tire_size  = opts[:tire_size]  || default_tire_size

//     post_initialize(opts)             # Bicycle both sends
//   end

//   def spares
//     {tire_size: tire_size,
//      chain:     chain}.merge(local_spares)
//   end

//   def default_tire_size
//     raise NotImplementedError
//   end

//   def post_initialize(opts)           # and implement this
//   end

//   # hook for subclasses to override
//   def local_spares
//     {}
//   end

//   def default_chain
//     "11-speed"
//   end
// end

// class RoadBike < Bicycle
//   attr_reader :tape_color

//   def post_initialize(opts)           # RoadBike can
//     @tape_color = opts[:tape_color]   # optionally
//   end                                 # override it

//   def local_spares
//     {tape_color: tape_color}
//   end

//   def default_tire_size
//     "23"
//   end
// end

// class MountainBike < Bicycle
//   attr_reader :front_shock, :rear_shock

//   def post_initialize(opts)
//     @front_shock = opts[:front_shock]
//     @rear_shock  = opts[:rear_shock]
//   end

//   def spares
//     {front_shock: front_shock}
//   end

//   def default_tire_size
//     "2.1"
//   end
// end

// road_bike = RoadBike.new(
//   size:       'M',
//   tape_color: 'red' )

// puts road_bike.tire_size      # => 23
// puts road_bike.chain          # => 11-speed

// mountain_bike = MountainBike.new(
//       size:         'S',
//       front_shock:  'Manitou',
//       rear_shock:   'Fox')

// puts mountain_bike.tire_size  # => 2.1
// puts mountain_bike.chain      # => 11-speed

// ...
interface IOpts6 {
  style?: any;
  size?: any;
  chain?: any;
  tape_color?: any;
  front_shock?: any;
  rear_shock?: any;
  tire_size?: any;
}

class Bicycle10 {
  private _size: any;
  private _chain: any;
  private _tire_size: any;

  public constructor(opts: IOpts6 = {}) {
    this._size = opts.size;
    this._chain = opts.chain || this.default_chain();
    this._tire_size = opts.tire_size || this.default_tire_size();

    this.post_initialize(opts); // Bicycle both sends
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

  spares() {
    return Object.assign(
      {},
      {
        tire_size: this.tire_size,
        chain: this.chain
      },
      this.local_spares()
    );
  }

  default_tire_size() {
    throw new Error('Not implemented');
  }

  post_initialize(opts: IOpts6 = {}) {} // and implements this

  default_chain() {
    return '11-speed';
  }
}

class RoadBike10 extends Bicycle10 {
  private _tape_color: any;

  post_initialize(opts: IOpts6 = {}) {
    // RoadBike can optionally override it
    this._tape_color = opts.tape_color;
  }

  get tape_color() {
    return this._tape_color;
  }

  local_spares() {
    return {
      tape_color: this.tape_color
    };
  }

  default_tire_size() {
    return '23';
  }
}

class MountainBike10 extends Bicycle10 {
  private _front_shock: any;
  private _rear_shock: any;

  post_initialize(opts: IOpts6 = {}) {
    this._front_shock = opts.front_shock;
    this._rear_shock = opts.rear_shock;
  }

  get front_shock() {
    return this._front_shock;
  }
  get rear_shock() {
    return this._rear_shock;
  }

  spares() {
    return {
      front_shock: this.front_shock
    };
  }

  default_tire_size() {
    return '2.1';
  }
}

const road_bike10 = new RoadBike10({
  size: 'M',
  tape_color: 'red'
});

console.log(road_bike10.tire_size); // => 23
console.log(road_bike10.chain); // => 11-speed

const mountain_bike10 = new MountainBike10({
  size: 'S',
  front_shock: 'Manitou',
  rear_shock: 'Fox'
});

console.log(mountain_bike10.tire_size); // => 2.1
console.log(mountain_bike10.chain); // => 11-speed
