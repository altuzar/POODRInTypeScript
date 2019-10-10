// def gear_inches
//   ratio * wheel.diameter
// end
// def gear_inches
//   #... a few lines of scary math
//   foo = some_intermediate_result * wheel.diameter
//   #... more lines of scary math
// end
// def gear_inches
//   #... a few lines of scary math
//   foo = some_intermediate_result * diameter
//   #... more lines of scary math
// end
// def diameter
//   wheel.diameter
// end
// class Gear {
//   gear_inches() {
//     return this.ratio() * this.wheel.diameter();
//   }
// }
// class ComplexGear {
//   gear_inches() {
//     // ... a few lines of scary math
//     let foo = some_intermediate_result * this.wheel.diameter();
//     // ... more lines of scary math
//   }
// }
// class ComplexGearWithEncapsulatedDiameter {
//   gear_inches() {
//     // ... a few lines of scary math
//     let foo = some_intermediate_result * this.diameter();
//     // ... more lines of scary math
//   }
//   diameter() {
//     return this.wheel.diameter();
//   }
// }
console.log('not much really');
