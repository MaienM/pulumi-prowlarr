// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Indexer Proxies -->Single Indexer Proxy.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@pulumi/prowlarr";
 *
 * const test = prowlarr.IndexerProxies.getIndexerProxy({
 *     name: "Example",
 * });
 * ```
 */
export function getIndexerProxy(args: GetIndexerProxyArgs, opts?: pulumi.InvokeOptions): Promise<GetIndexerProxyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("prowlarr:IndexerProxies/getIndexerProxy:getIndexerProxy", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getIndexerProxy.
 */
export interface GetIndexerProxyArgs {
    /**
     * Indexer Proxy name.
     */
    name: string;
}

/**
 * A collection of values returned by getIndexerProxy.
 */
export interface GetIndexerProxyResult {
    /**
     * IndexerProxy configuration template.
     */
    readonly configContract: string;
    /**
     * host.
     */
    readonly host: string;
    /**
     * Indexer Proxy ID.
     */
    readonly id: number;
    /**
     * IndexerProxy implementation name.
     */
    readonly implementation: string;
    /**
     * Indexer Proxy name.
     */
    readonly name: string;
    /**
     * Password.
     */
    readonly password: string;
    /**
     * Port.
     */
    readonly port: number;
    /**
     * Request timeout.
     */
    readonly requestTimeout: number;
    /**
     * List of associated tags.
     */
    readonly tags: number[];
    /**
     * Username.
     */
    readonly username: string;
}
/**
 * <!-- subcategory:Indexer Proxies -->Single Indexer Proxy.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@pulumi/prowlarr";
 *
 * const test = prowlarr.IndexerProxies.getIndexerProxy({
 *     name: "Example",
 * });
 * ```
 */
export function getIndexerProxyOutput(args: GetIndexerProxyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIndexerProxyResult> {
    return pulumi.output(args).apply((a: any) => getIndexerProxy(a, opts))
}

/**
 * A collection of arguments for invoking getIndexerProxy.
 */
export interface GetIndexerProxyOutputArgs {
    /**
     * Indexer Proxy name.
     */
    name: pulumi.Input<string>;
}