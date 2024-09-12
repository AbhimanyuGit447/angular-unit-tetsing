import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

 add(a : number, b: number) : number{
  return a+b;
 }

 subtract(a : number, b: number) : number{
  return a-b;
 }

 divide(a : number, b: number) : number {
  if(b === 0){
    throw new Error('cannot divide by zero');
  }
  return a/b;
 }
}
