export class CrearProductoDTO  {
    readonly name:string;
    readonly description:string;
    readonly imageURL?:string;
    readonly price:number;
    readonly createAt:Date;
}