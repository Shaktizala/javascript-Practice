// json is not a constructor, we can't use it with new operator or invoke json object as function
// * json.Parse
// Parse a piece of string text as JSON, optionally transforming the produced value and its properties, and return the value.
// JSON.parse("{}"); // {}
// JSON.parse("true"); // true
// JSON.parse('"foo"'); // "foo"
// JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
// JSON.parse("null"); // null

// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// Expected output: 42

// console.log(obj.result);
// Expected output: true

// * has two parameters text string and reviver function 
// reviver function has two arguments key and value it's useful to perform conditions and operations on key-val pair string
// example
// let obj = JSON.parse(
//     '{"p": 5,"q":7}',
//     (key, value) =>
//       typeof value === "number"
//         ? value * 2 // return value * 2 for numbers
//         : value, // return everything else unchanged
//   );
  // { p: 10 }
//   console.log(obj);
  
//   JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
//     console.log(key);
//     return value;
//   });
  // 1
  // 2
  // 4
  // 6
  // 5
  // 3
  // ""

// ! JSON.parse() does not allow trailing commas
// both will throw a SyntaxError
// JSON.parse("[1, 2, 3, 4, ]");
// JSON.parse('{"foo" : 1, }');
// ! JSON.parse() does not allow single quotes
// will throw a SyntaxError
// JSON.parse("{'foo': 1}");
  
// JSON.stringify()
// static method converts a JavaScript value to a JSON string
// example
// console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: "{"x":5,"y":6}"

// console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// Expected output: "[3,"false",false]"

// console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// Expected output: "{"x":[10,null,null,null]}"

// console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// Expected output: ""2006-01-02T15:04:05.000Z""

// * Syntax
// JSON.stringify(value)
// JSON.stringify(value, replacer)        optional
// JSON.stringify(value, replacer, space) optional

// value to convert to a JSON string
// replacer to decide which pair to include in the json by applying the conditions. it can be function or an array
// examples

// Using a function as replacer
// function replacer(key, value) {
// //   Filtering out properties
//   if (typeof value === "string") {
//     return undefined;
//   }
//   return value;
// }

// const foo = {
//   foundation: "Mozilla",
//   model: "box",
//   week: 45,
//   transport: "car",
//   month: 7,
// };
// let jsonString = JSON.stringify(foo, replacer);
// console.log(jsonString);
// '{"week":45,"month":7}'


// Using an array as replacer
// const foo = {
//   foundation: "Mozilla",
//   model: "box",
//   week: 45,
//   transport: "car",
//   month: 7,
// };

// JSON.stringify(foo, ["week", "month"]);
// '{"week":45,"month":7}', only keep "week" and "month" properties

