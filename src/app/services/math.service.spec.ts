
// describe

// beforeEach

//afterEach




import { MathService } from "./math.service";

describe("MathService", () => {

  let service : MathService;

  beforeEach(() => {
     service = new MathService();
     console.log('My TEST');

  })

  afterEach(() => {
    console.log('clear my test data');

  })

  beforeAll(() => {
    console.log('make a store');

  })

  afterAll(() => {

  })

  it("should create a mathservice instance", () => {
    expect(service).toBeTruthy();
  })

  // add
  it("should add two numbers correctly", () => {


    const sum = service.add(20, 20);

    expect(sum).toEqual(40);

  })


  it("should subtract two numbers correctly", () => {


    const result = service.subtract(20, 20);

    expect(result).toEqual(0);

  })

  it("should get exception message divide two numbers correctly", () => {


    expect(() => service.divide(20,0)).toThrowError("Cannot divide by zero");

  })

  it("should divide two numbers correctly", () => {

    const result = service.divide(20, 20);

    expect(result).toEqual(1);


  })



})

// it
