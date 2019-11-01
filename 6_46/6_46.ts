// # ...
// class Bicycle
//   attr_reader :size, :chain, :tire_size

//   def initialize(**opts)
//     @size       = opts[:size]
//     @chain      = opts[:chain]      || default_chain
//     @tire_size  = opts[:tire_size]  || default_tire_size
//     post_initialize(opts)
//   end

//   def spares
//     {tire_size: tire_size,
//      chain:     chain}.merge(local_spares)
//   end

//   def default_tire_size
//     raise NotImplementedError
//   end

//   # subclasses may override
//   def post_initialize(opts)
//   end

//   def local_spares
//     {}
//   end

//   def default_chain
//     "11-speed"
//   end
// end

// class RoadBike < Bicycle
//   attr_reader :tape_color

//   def post_initialize(opts)
//     @tape_color = opts[:tape_color]
//   end

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

//   def local_spares
//     {front_shock: front_shock}
//   end

//   def default_tire_size
//     "2.1"
//   end
// end

// road_bike =
//   RoadBike.new(
//     size:       'M',
//     tape_color: 'red' )

// puts road_bike.tire_size      # => 23
// puts road_bike.chain          # => 11-speed
// puts road_bike.spares
// # => {:tire_size=>"23", :chain=>"11-speed", :tape_color=>"red"}

// mountain_bike =
//   MountainBike.new(
//     size:         'S',
//     front_shock:  'Manitou',
//     rear_shock:   'Fox')

// puts mountain_bike.tire_size  # => 2.1
// puts mountain_bike.chain      # => 11-speed
// puts mountain_bike.spares
// # => {:tire_size=>"2.1", :chain=>"11-speed", :front_shock=>"Manitou"}

// class RecumbentBike < Bicycle
//   attr_reader :flag

//   def post_initialize(opts)
//     @flag = opts[:flag]
//   end

//   def local_spares
//     {flag: flag}
//   end

//   def default_chain
//     '10-speed'
//   end

//   def default_tire_size
//     '28'
//   end
// end

// bent =
//   RecumbentBike.new(
//     size: "M",
//     flag: 'tall and orange')

// puts bent.spares
// # => {:tire_size=>"28", :chain=>"10-speed", :flag=>"tall and orange"}

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

class Bicycle11 {
  private _size: any;
  private _chain: any;
  private _tire_size: any;

  public constructor(opts: IOpts6 = {}) {
    this._size = opts.size;
    this._chain = opts.chain || this.default_chain();
    this._tire_size = opts.tire_size || this.default_tire_size();

    this.post_initialize(opts);
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

  public spares() {
    return Object.assign(
      {},
      {
        tire_size: this.tire_size,
        chain: this.chain
      },
      this.local_spares()
    );
  }

  public default_tire_size() {
    throw new Error('Not implemented');
  }

  // subclasses may override
  public post_initialize(opts) {}

  public local_spares() {
    return {};
  }

  public default_chain() {
    return '11-speed';
  }
}

class RoadBike11 extends Bicycle11 {
  private _tape_color: any;

  public post_initialize(opts: IOpts6 = {}) {
    this._tape_color = opts.tape_color;
  }

  get tape_color() {
    return this._tape_color;
  }

  public local_spares() {
    return {
      tape_color: this.tape_color
    };
  }

  public default_tire_size() {
    return '23';
  }
}

class MountainBike11 extends Bicycle11 {
  private _front_shock: any;
  private _rear_shock: any;

  public post_initialize(opts: IOpts6 = {}) {
    this._front_shock = opts.front_shock;
    this._rear_shock = opts.rear_shock;
  }

  get front_shock() {
    return this._front_shock;
  }
  get rear_shock() {
    return this._rear_shock;
  }

  public local_spares() {
    return {
      front_shock: this.front_shock
    };
  }

  public default_tire_size() {
    return '2.1';
  }
}

const road_bike11 = new RoadBike11({
  size: 'M',
  tape_color: 'red'
});

console.log(road_bike11.tire_size); // => 23
console.log(road_bike11.chain); // => 11-speed
console.log(road_bike11.spares());
// => { tire_size: '23', chain: '11-speed', tape_color: 'red' }

const mountain_bike11 = new MountainBike11({
  size: 'S',
  front_shock: 'Manitou',
  rear_shock: 'Fox'
});

console.log(mountain_bike11.tire_size); // => 2.1
console.log(mountain_bike11.chain); // => 11-speed
console.log(mountain_bike11.spares());
// => { tire_size: '2.1', chain: '11-speed', front_shock: 'Manitou' }

class RecumbentBike11 extends Bicycle11 {
  private _flag: any;

  public post_initialize(opts) {
    this._flag = opts.flag;
  }

  get flag() {
    return this._flag;
  }

  public local_spares() {
    return {
      flag: this.flag
    };
  }

  public default_chain() {
    return '10-speed';
  }

  public default_tire_size() {
    return '28';
  }
}

const bent11 = new RecumbentBike11({
  size: 'M',
  flag: 'tall and orange'
});

console.log(bent11.spares());
// => { tire_size: '28', chain: '10-speed', flag: 'tall and orange' }
