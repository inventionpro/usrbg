export = usrbg;
declare class usrbg {
    constructor(v?: number);
    v: number;
    load(): Promise<void>;
    data: any;
    /**
    * @param {string | number} id
    */
    has(id: string | number): boolean;
    /**
    * @param {string | number} id
    */
    get(id: string | number): string;
}
