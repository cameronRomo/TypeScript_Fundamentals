## TypeScript (Super-set of JavaScript)

- Strong typing: specifies the types of variables
- OOP features
- Catch errors at compile time rather than run time
- Great tooling: intellesense in code editors

#### How to install

- `sudo npm i -g typescript`
- `tsc --version`: what version of TypeScript compiler
- `tsc main.ts` ran js code in ts file. TSC then duplicated to a js file. This will happen under the hood when running `ng serve`
  - All JS code is valid TS code

### JS

- var scopes variables to the nearest function
  - can leak out/is still relevant outside of for blocks

### TS

- Compiler will return error from typechecking, but still compile code into js in the example of var vs. let
- Types:

```TypeScript
  - let a: number;
  - let b: boolean;
  - let c: string;
  - let d: any;
  - let e: number[] = [1, 2, 3]
  - let f: any[] = [1, true, 'a', false];

  - const ColorRed = 0;
  - const ColorGreen = 1;
  - const ColorBlue = 2;

  or

  - enum Color { Red = 0, Green = 1, Blue = 2, purple = 3 };
    - enum is the ability to put related constants into a container (concept in OOP)
  - let backgroundColor = Color.Red
```

- Type assertion:

  ````TypeScript
  let message;
  message = 'abc';
  let endsWithC = (<string>message).endsWith('c');
  let alternativeWay = (message as string).endsWith('c')```
  ````

- Interfaces:
  - Interfaces help to simplify declarations and are reusable (Always use Pascal case)
  ```TypeScript
  interface Point {
  x: number,
  y: number
  }
  ```

let drawPoint = (point: Point) => {
// ...
}

````TypeScript

- Classes
  - Cohesion: things that are related should be part of one unit

  ```TypeScript
  class Point {
    x: number;
    y: number;

    draw() {
      // ...
    }

    getDistance(another: Point) {
      // ...
    }
  }
````

- Objects/Instances of classes: very similar to JS

```TypeScript
class Point {
  x: number;
  y: number;

  draw() {
    console.log('X: ' + this.x + 'Y: ' + this.y);

  }

  getDistance(another: Point) {
    // ...
  }
}


let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
```

- Constructors: method that is called when an instance is created

```TypeScript
class Point {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    // ? means optional parameter
    // by convention everything to the right of an optional parameter should also be optional
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + 'Y: ' + this.y);
  }
}


let point = new Point(1, 2);
point.draw();
```
