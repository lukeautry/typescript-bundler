/// <reference path="../typings/main.d.ts" />

// type definitions that aren't registered @ DefinitelyTyped, so we need to create them manually
declare module 'gulp-connect' {
    module Connect {
        export interface LiveReloadOption {
            port: number;
        }

        export interface Options {
            root?: string | string [];
            port?: number;
            host?: string;
            https?: boolean;
            livereload?: LiveReloadOption | boolean;
            fallback?: string;
            middleware?: (connect: typeof Connect, options: Options) => any[];
        }

        export function server(options: Options): void;
        export function reload(): any;
    }

    export = Connect;
}