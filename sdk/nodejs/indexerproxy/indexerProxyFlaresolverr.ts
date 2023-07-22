// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Indexer Proxies -->Indexer Proxy Flaresolverr resource.
 * For more information refer to [Indexer Proxy](https://wiki.servarr.com/prowlarr/settings#indexer-proxies) and [Flaresolverr](https://wiki.servarr.com/prowlarr/supported#flaresolverr).
 */
export class IndexerProxyFlaresolverr extends pulumi.CustomResource {
    /**
     * Get an existing IndexerProxyFlaresolverr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IndexerProxyFlaresolverrState, opts?: pulumi.CustomResourceOptions): IndexerProxyFlaresolverr {
        return new IndexerProxyFlaresolverr(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prowlarr:IndexerProxy/indexerProxyFlaresolverr:IndexerProxyFlaresolverr';

    /**
     * Returns true if the given object is an instance of IndexerProxyFlaresolverr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IndexerProxyFlaresolverr {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IndexerProxyFlaresolverr.__pulumiType;
    }

    /**
     * host.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * Indexer Proxy name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Request timeout.
     */
    public readonly requestTimeout!: pulumi.Output<number>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a IndexerProxyFlaresolverr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IndexerProxyFlaresolverrArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IndexerProxyFlaresolverrArgs | IndexerProxyFlaresolverrState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IndexerProxyFlaresolverrState | undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["requestTimeout"] = state ? state.requestTimeout : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as IndexerProxyFlaresolverrArgs | undefined;
            if ((!args || args.host === undefined) && !opts.urn) {
                throw new Error("Missing required property 'host'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.requestTimeout === undefined) && !opts.urn) {
                throw new Error("Missing required property 'requestTimeout'");
            }
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["requestTimeout"] = args ? args.requestTimeout : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IndexerProxyFlaresolverr.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IndexerProxyFlaresolverr resources.
 */
export interface IndexerProxyFlaresolverrState {
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Indexer Proxy name.
     */
    name?: pulumi.Input<string>;
    /**
     * Request timeout.
     */
    requestTimeout?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a IndexerProxyFlaresolverr resource.
 */
export interface IndexerProxyFlaresolverrArgs {
    /**
     * host.
     */
    host: pulumi.Input<string>;
    /**
     * Indexer Proxy name.
     */
    name: pulumi.Input<string>;
    /**
     * Request timeout.
     */
    requestTimeout: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}