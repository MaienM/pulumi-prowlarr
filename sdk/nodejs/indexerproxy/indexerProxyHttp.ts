// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Indexer Proxies -->Indexer Proxy HTTP resource.
 * For more information refer to [Indexer Proxy](https://wiki.servarr.com/prowlarr/settings#indexer-proxies) and [HTTP](https://wiki.servarr.com/prowlarr/supported#http).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@maienm/pulumi-prowlarr";
 *
 * const example = new prowlarr.indexerproxy.IndexerProxyHttp("example", {
 *     host: "localhost",
 *     name: "Example",
 *     password: "Pass",
 *     port: 8080,
 *     username: "User",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import prowlarr:IndexerProxy/indexerProxyHttp:IndexerProxyHttp example 1
 * ```
 */
export class IndexerProxyHttp extends pulumi.CustomResource {
    /**
     * Get an existing IndexerProxyHttp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IndexerProxyHttpState, opts?: pulumi.CustomResourceOptions): IndexerProxyHttp {
        return new IndexerProxyHttp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prowlarr:IndexerProxy/indexerProxyHttp:IndexerProxyHttp';

    /**
     * Returns true if the given object is an instance of IndexerProxyHttp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IndexerProxyHttp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IndexerProxyHttp.__pulumiType;
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
     * Password.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Port.
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Username.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a IndexerProxyHttp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IndexerProxyHttpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IndexerProxyHttpArgs | IndexerProxyHttpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IndexerProxyHttpState | undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as IndexerProxyHttpArgs | undefined;
            if ((!args || args.host === undefined) && !opts.urn) {
                throw new Error("Missing required property 'host'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(IndexerProxyHttp.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IndexerProxyHttp resources.
 */
export interface IndexerProxyHttpState {
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Indexer Proxy name.
     */
    name?: pulumi.Input<string>;
    /**
     * Password.
     */
    password?: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IndexerProxyHttp resource.
 */
export interface IndexerProxyHttpArgs {
    /**
     * host.
     */
    host: pulumi.Input<string>;
    /**
     * Indexer Proxy name.
     */
    name: pulumi.Input<string>;
    /**
     * Password.
     */
    password: pulumi.Input<string>;
    /**
     * Port.
     */
    port: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Username.
     */
    username: pulumi.Input<string>;
}
