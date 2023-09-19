interface IValidationError {
    message: string;
    details?: IValidationError[];
}
export declare class TGSKit {
    private _data;
    load(src: string | object): Promise<object>;
    /**
     * Parse a resource into a JSON object
     */
    parseJSON(src: string): object | false;
    /**
     * Parse a resource into a URL
     */
    parseURL(src: string): URL | false;
    /**
     * Generate a TGS file and return contents.
     */
    generate(): any;
    /**
     * Generates and triggers a download of the TGS file in the browser.
     */
    download(filename?: string): void;
    /**
     * Load a resource from a path URL.
     */
    fetchPath(path: string): Promise<string>;
    /**
     * Validates that the Bodymovin JSON meets the requirements for
     * a Telegram Sticker (tgs).
     */
    validate(): IValidationError[];
    private checkLayer;
    private checkItems;
}
export {};
//# sourceMappingURL=TGSKit.d.ts.map