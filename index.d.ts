export = usrbg;
declare class usrbg {
    load(): Promise<void>;
    data: any;
    /**
    * @param {string} id
    */
    has(id: string): boolean;
    /**
    * @param {string} id
    */
    get(id: string): string;
}
