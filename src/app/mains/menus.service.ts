import { Injectable } from '@angular/core';
import { All_menus } from './menus-mock';

@Injectable()
@Injectable()
export class MenusService {
  menus=All_menus;
  constructor() { }
  
}
