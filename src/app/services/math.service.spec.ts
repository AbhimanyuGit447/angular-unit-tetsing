import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';


describe("MathService", () => {
  // check if the instance is created
  //add
  //subtract

  // can make more for /, * etc

  let service : MathService;

  beforeEach(() => {
     service = new MathService();
  })

  it("should create mathservice", () => {

    expect(service).toBeTruthy();
  })

  it("should add two numbers correctly", () => {

    const result = service.add(10,20);
    //code to test
    expect(result).toEqual(30);
  });


  it("should subtract two numbers correctly", () => {

    const result = service.subtract(20,10);
    //code to test
    expect(result).toEqual(10);
  });

  it("should divide two numbers correctly", () => {

    const result = service.divide(2000,1000);
    //code to test
    expect(result).toEqual(2);
  });

  it("should throw an error when dividing by zero", () => {
    expect(() => service.divide(200,0)).toThrowError('cannot divide by zero')

  })
})
