// # ...
// class Bicycle
//   attr_reader :size, :chain, :tire_size

//   def initialize(**opts)
//     @size       = opts[:size]
//     @chain      = opts[:chain]      || default_chain
//     @tire_size  = opts[:tire_size]  || default_tire_size
//   end

//   def spares
//     {tire_size: tire_size,
//      chain:     chain}
//   end

//   def default_chain
//     "11-speed"
//   end

//   def default_tire_size
//     raise NotImplementedError
//   end
// end

// class RoadBike < Bicycle
//   attr_reader :tape_color

//   def initialize(**opts)
//     @tape_color = opts[:tape_color]
//     super
//   end

//   def spares
//     super.merge(tape_color: tape_color)
//   end

//   def default_tire_size
//     "23"
//   end
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

// class RecumbentBike < Bicycle
//   attr_reader :flag

//   def initialize(**opts)
//     @flag = opts[:flag]   # forgot to send `super`
//   end

//   def spares
//     super.merge(flag: flag)
//   end

//   def default_chain
//     '10-speed'
//   end

//   def default_tire_size
//     '28'
//   end
// end

// bent = RecumbentBike.new(flag: 'tall and orange')
// puts bent.spares
// # => {:tire_size=>nil, :chain=>nil, :flag=>"tall and orange"}
// # => {:tire_size=>nil,     <- didn't get initialized
// # =>  :chain=>nil,
// # =>  :flag=>"tall and orange"}

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

class Bicycle9 {
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

  public spares() {
    return {
      tire_size: this.tire_size,
      chain: this.chain
    };
  }

  public default_chain() {
    return '11-speed';
  }

  public default_tire_size() {
    throw new Error('Not implemented');
  }
}

class RoadBike9 extends Bicycle9 {
  private _tape_color: any;

  public constructor(opts: IOpts6 = {}) {
    super(opts);
    this._tape_color = opts.tape_color;
  }

  get tape_color() {
    return this._tape_color;
  }

  public spares() {
    return Object.assign({}, super.spares(), {
      tape_color: this.tape_color
    });
  }

  public default_tire_size() {
    return '23';
  }
}

class MountainBike9 extends Bicycle9 {
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
    return '2.1';
  }
}

const road_bike9 = new RoadBike9({
  size: 'M',
  tape_color: 'red'
});

console.log(road_bike9.tire_size); // => 23
console.log(road_bike9.chain); // => 11-speed

const mountain_bike9 = new MountainBike9({
  size: 'S',
  front_shock: 'Manitou',
  rear_shock: 'Fox'
});

console.log(mountain_bike9.tire_size); // => 2.1
console.log(mountain_bike9.chain); // => 11-speed

class RecumbentBike9 extends Bicycle9 {
  private _flag: any;

  public constructor(opts: IOpts6 = {}) {
    this._flag = opts.flag; // forgot to send `super`
  }

  get flag() {
    return this._flag;
  }

  public spares() {
    return Object.assign({}, super.spares(), {
      flag: this.flag
    });
  }

  public default_chain() {
    return '10-speed';
  }

  public default_tire_size() {
    return '28';
  }
}

const bent9 = new RecumbentBike9({
  flag: 'tall and orange'
});
// => ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
//      at new RecumbentBike ...
console.log(bent9.spares());
