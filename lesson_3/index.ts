// function, signature function, function overloads

// functions //

// function pow(x, y){
//   return x ** y;
// }  //javascriptda shunday

function pow(x: number, y: number): number {
  return x ** y;
}

const add = (x: number, y: number): number => x + y;

function log(x: number): void {
  console.log(x); // qiymat qaytarmaydigan function void function deyiladi
}

function some(s: string): never {
  throw new Error(s); // dasturni shu yerda to'xtatadigan funksiya
}

// Signature functions //

let c: (x: number, y: string) => string; // funksiya elon qilib, keyin shu parametrlarga mos boshqa funksiya meros qilib olinaveradi

c = function (a: number, b: string): string {
  return `$${b}: ${a}`;
};

//  function overloads

function overload(x: any, y: any): any {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else {
    return `${x} & ${y}`;
  }
}

// console.log(overload(2, 4));


function overload2(x: number, y: number): number;
function overload2(x: number, y: string): string;
function overload2(x: any, y: any): any {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return `${x} & ${y}`;
    }
}

console.log(overload2(2, "Number"));
