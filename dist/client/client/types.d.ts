import type { Auth } from '../core/auth';
import type { Client as CoreClient, Config as CoreConfig } from '../core/types';
import type { Middleware } from './utils';
export type ResponseStyle = 'data' | 'fields';
export interface Config<T extends ClientOptions = ClientOptions> extends Omit<RequestInit, 'body' | 'headers' | 'method'>, CoreConfig {
    baseUrl?: T['baseUrl'];
    fetch?: (request: Request) => ReturnType<typeof fetch>;
    next?: never;
    parseAs?: 'arrayBuffer' | 'auto' | 'blob' | 'formData' | 'json' | 'stream' | 'text';
    responseStyle?: ResponseStyle;
    throwOnError?: T['throwOnError'];
}
export interface RequestOptions<TResponseStyle extends ResponseStyle = 'fields', ThrowOnError extends boolean = boolean, Url extends string = string> extends Config<{
    responseStyle: TResponseStyle;
    throwOnError: ThrowOnError;
}> {
    body?: unknown;
    path?: Record<string, unknown>;
    query?: Record<string, unknown>;
    security?: ReadonlyArray<Auth>;
    url: Url;
}
export type RequestResult<TData = unknown, TError = unknown, ThrowOnError extends boolean = boolean, TResponseStyle extends ResponseStyle = 'fields'> = ThrowOnError extends true ? Promise<TResponseStyle extends 'data' ? TData extends Record<string, unknown> ? TData[keyof TData] : TData : {
    data: TData extends Record<string, unknown> ? TData[keyof TData] : TData;
    request: Request;
    response: Response;
}> : Promise<TResponseStyle extends 'data' ? (TData extends Record<string, unknown> ? TData[keyof TData] : TData) | undefined : ({
    data: TData extends Record<string, unknown> ? TData[keyof TData] : TData;
    error: undefined;
} | {
    data: undefined;
    error: TError extends Record<string, unknown> ? TError[keyof TError] : TError;
}) & {
    request: Request;
    response: Response;
}>;
export interface ClientOptions {
    baseUrl?: string;
    responseStyle?: ResponseStyle;
    throwOnError?: boolean;
}
type MethodFn = <TData = unknown, TError = unknown, ThrowOnError extends boolean = false, TResponseStyle extends ResponseStyle = 'fields'>(options: Omit<RequestOptions<TResponseStyle, ThrowOnError>, 'method'>) => RequestResult<TData, TError, ThrowOnError, TResponseStyle>;
type RequestFn = <TData = unknown, TError = unknown, ThrowOnError extends boolean = false, TResponseStyle extends ResponseStyle = 'fields'>(options: Omit<RequestOptions<TResponseStyle, ThrowOnError>, 'method'> & Pick<Required<RequestOptions<TResponseStyle, ThrowOnError>>, 'method'>) => RequestResult<TData, TError, ThrowOnError, TResponseStyle>;
type BuildUrlFn = <TData extends {
    body?: unknown;
    path?: Record<string, unknown>;
    query?: Record<string, unknown>;
    url: string;
}>(options: Pick<TData, 'url'> & Options<TData>) => string;
export type Client = CoreClient<RequestFn, Config, MethodFn, BuildUrlFn> & {
    interceptors: Middleware<Request, Response, unknown, RequestOptions>;
};
export type CreateClientConfig<T extends ClientOptions = ClientOptions> = (override?: Config<ClientOptions & T>) => Config<Required<ClientOptions> & T>;
export interface TDataShape {
    body?: unknown;
    headers?: unknown;
    path?: unknown;
    query?: unknown;
    url: string;
}
type OmitKeys<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean, TResponseStyle extends ResponseStyle = 'fields'> = OmitKeys<RequestOptions<TResponseStyle, ThrowOnError>, 'body' | 'path' | 'query' | 'url'> & Omit<TData, 'url'>;
export type OptionsLegacyParser<TData = unknown, ThrowOnError extends boolean = boolean, TResponseStyle extends ResponseStyle = 'fields'> = TData extends {
    body?: any;
} ? TData extends {
    headers?: any;
} ? OmitKeys<RequestOptions<TResponseStyle, ThrowOnError>, 'body' | 'headers' | 'url'> & TData : OmitKeys<RequestOptions<TResponseStyle, ThrowOnError>, 'body' | 'url'> & TData & Pick<RequestOptions<TResponseStyle, ThrowOnError>, 'headers'> : TData extends {
    headers?: any;
} ? OmitKeys<RequestOptions<TResponseStyle, ThrowOnError>, 'headers' | 'url'> & TData & Pick<RequestOptions<TResponseStyle, ThrowOnError>, 'body'> : OmitKeys<RequestOptions<TResponseStyle, ThrowOnError>, 'url'> & TData;
export {};
