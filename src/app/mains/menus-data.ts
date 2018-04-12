export class MENUS{
    headerNav:Array<Object>;
    menuData1:Array<Menus>;
    menuData2:Array<Menus>;
    menuData3:Array<Menus>;
}
export class Menus{ 
    title:string;
    icon:string;
    state:string;
    url?:string;
    children?:Array<Object>;
  }
