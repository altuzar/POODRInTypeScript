// class Bicycle
//   attr_reader :style, :size,
//               :tape_color,
//               :front_shock, :rear_shock

//   def initialize(**opts)
//     @style       = opts[:style]
//     @size        = opts[:size]
//     @tape_color  = opts[:tape_color]
//     @front_shock = opts[:front_shock]
//     @rear_shock  = opts[:rear_shock]
//   end

//   # checking 'style' starts down a slippery slope
//   def spares
//     if style == :road
//       { chain:       '11-speed',
//         tire_size:   '23',       # milimeters
//         tape_color:  tape_color }
//     else
//       { chain:       '11-speed',
//         tire_size:   '2.1',      # inches
//         front_shock: front_shock }
//     end
//   end
//   # ...
// end

// bike = Bicycle.new(
//         style:       :mountain,
//         size:        'S',
//         front_shock: 'Manitou',
//         rear_shock:  'Fox')

// puts bike.spares
// # => {:chain=>"11-speed", :tire_size=>"2.1", :front_shock=>"Manitou"}

// bike = Bicycle.new(
//         style:       :road,
//         size:        'M',
//         tape_color:  'red')

// puts bike.spares
// # => {:chain=>"11-speed", :tire_size=>"23", :tape_color=>"red"}

interface IOpts2 {
  style?: any;
  size?: any;
  tape_color?: any;
  front_shock?: any;
  rear_shock?: any;
}

class Bicycle2 {
  private _style: any;
  private _size: any;
  private _tape_color: any;
  private _front_shock: any;
  private _rear_shock: any;

  public constructor(opts: IOpts2 = {}) {
    this._style = opts.style;
    this._size = opts.size;
    this._tape_color = opts.tape_color;
    this._front_shock = opts.front_shock;
    this._rear_shock = opts.rear_shock;
  }

  get style() {
    return this._style;
  }
  get size() {
    return this._size;
  }
  get tape_color() {
    return this._tape_color;
  }
  get front_shock() {
    return this._front_shock;
  }
  get rear_shock() {
    return this._rear_shock;
  }

  // checking 'style' starts down a slippery slope
  public spares() {
    if (this.style === 'road') {
      return {
        chain: '11-speed',
        tire_size: '23', // millimeters
        tape_color: this.tape_color
      };
    } else {
      return {
        chain: '11-speed',
        tire_size: '2.1', // inches
        front_shock: this.front_shock
      };
    }
  }
  // ...
}

let bike2;
bike2 = new Bicycle2({
  style: 'mountain',
  size: 'S',
  front_shock: 'Manitou',
  rear_shock: 'Fox'
});

console.log(bike2.spares());
// => { chain: '11-speed', tire_size: '2.1', front_shock: 'Manitou' }

bike2 = new Bicycle2({
  style: 'road',
  size: 'M',
  tape_color: 'red'
});

console.log(bike2.spares());
// => { chain: '11-speed', tire_size: '23', tape_color: 'red' }
