// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Download Clients -->Download Client Nzbvortex resource.
 * For more information refer to [Download Client](https://wiki.servarr.com/prowlarr/settings#download-clients) and [Nzbvortex](https://wiki.servarr.com/prowlarr/supported#nzbvortex).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@maienm/pulumi-prowlarr";
 *
 * const example = new prowlarr.downloadclients.DownloadClientNzbvortex("example", {
 *     enable: true,
 *     host: "nzbvortex",
 *     name: "Example",
 *     port: 6789,
 *     priority: 1,
 *     urlBase: "/nzbvortex/",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import prowlarr:DownloadClients/downloadClientNzbvortex:DownloadClientNzbvortex example 1
 * ```
 */
export class DownloadClientNzbvortex extends pulumi.CustomResource {
    /**
     * Get an existing DownloadClientNzbvortex resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DownloadClientNzbvortexState, opts?: pulumi.CustomResourceOptions): DownloadClientNzbvortex {
        return new DownloadClientNzbvortex(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prowlarr:DownloadClients/downloadClientNzbvortex:DownloadClientNzbvortex';

    /**
     * Returns true if the given object is an instance of DownloadClientNzbvortex.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DownloadClientNzbvortex {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DownloadClientNzbvortex.__pulumiType;
    }

    /**
     * API key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * List of mapped categories.
     */
    public /*out*/ readonly categories!: pulumi.Output<outputs.DownloadClients.DownloadClientNzbvortexCategory[]>;
    /**
     * Category.
     */
    public readonly category!: pulumi.Output<string>;
    /**
     * Enable flag.
     */
    public readonly enable!: pulumi.Output<boolean>;
    /**
     * host.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * Recent Movie priority. `-1` Low, `0` Normal, `1` High.
     */
    public readonly itemPriority!: pulumi.Output<number>;
    /**
     * Download Client name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Port.
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * Priority.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Base URL.
     */
    public readonly urlBase!: pulumi.Output<string>;
    /**
     * Use SSL flag.
     */
    public readonly useSsl!: pulumi.Output<boolean>;

    /**
     * Create a DownloadClientNzbvortex resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DownloadClientNzbvortexArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DownloadClientNzbvortexArgs | DownloadClientNzbvortexState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DownloadClientNzbvortexState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["categories"] = state ? state.categories : undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["itemPriority"] = state ? state.itemPriority : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["urlBase"] = state ? state.urlBase : undefined;
            resourceInputs["useSsl"] = state ? state.useSsl : undefined;
        } else {
            const args = argsOrState as DownloadClientNzbvortexArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["apiKey"] = args ? args.apiKey : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["itemPriority"] = args ? args.itemPriority : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["urlBase"] = args ? args.urlBase : undefined;
            resourceInputs["useSsl"] = args ? args.useSsl : undefined;
            resourceInputs["categories"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DownloadClientNzbvortex.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DownloadClientNzbvortex resources.
 */
export interface DownloadClientNzbvortexState {
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * List of mapped categories.
     */
    categories?: pulumi.Input<pulumi.Input<inputs.DownloadClients.DownloadClientNzbvortexCategory>[]>;
    /**
     * Category.
     */
    category?: pulumi.Input<string>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Recent Movie priority. `-1` Low, `0` Normal, `1` High.
     */
    itemPriority?: pulumi.Input<number>;
    /**
     * Download Client name.
     */
    name?: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Base URL.
     */
    urlBase?: pulumi.Input<string>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a DownloadClientNzbvortex resource.
 */
export interface DownloadClientNzbvortexArgs {
    /**
     * API key.
     */
    apiKey: pulumi.Input<string>;
    /**
     * Category.
     */
    category?: pulumi.Input<string>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Recent Movie priority. `-1` Low, `0` Normal, `1` High.
     */
    itemPriority?: pulumi.Input<number>;
    /**
     * Download Client name.
     */
    name: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Base URL.
     */
    urlBase?: pulumi.Input<string>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
}
