// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Download Clients -->Download Client Transmission resource.
 * For more information refer to [Download Client](https://wiki.servarr.com/prowlarr/settings#download-clients) and [Transmission](https://wiki.servarr.com/prowlarr/supported#transmission).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@maienm/pulumi-prowlarr";
 *
 * const example = new prowlarr.downloadclient.DownloadClientTransmission("example", {
 *     enable: true,
 *     host: "transmission",
 *     name: "Example",
 *     port: 9091,
 *     priority: 1,
 *     urlBase: "/transmission/",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import prowlarr:DownloadClient/downloadClientTransmission:DownloadClientTransmission example 1
 * ```
 */
export class DownloadClientTransmission extends pulumi.CustomResource {
    /**
     * Get an existing DownloadClientTransmission resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DownloadClientTransmissionState, opts?: pulumi.CustomResourceOptions): DownloadClientTransmission {
        return new DownloadClientTransmission(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prowlarr:DownloadClient/downloadClientTransmission:DownloadClientTransmission';

    /**
     * Returns true if the given object is an instance of DownloadClientTransmission.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DownloadClientTransmission {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DownloadClientTransmission.__pulumiType;
    }

    /**
     * Add paused flag.
     */
    public readonly addPaused!: pulumi.Output<boolean>;
    /**
     * List of mapped categories.
     */
    public readonly categories!: pulumi.Output<outputs.DownloadClient.DownloadClientTransmissionCategory[]>;
    /**
     * Category.
     */
    public readonly category!: pulumi.Output<string>;
    /**
     * Directory.
     */
    public readonly directory!: pulumi.Output<string>;
    /**
     * Enable flag.
     */
    public readonly enable!: pulumi.Output<boolean>;
    /**
     * host.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * Priority. `0` Last, `1` First.
     */
    public readonly itemPriority!: pulumi.Output<number>;
    /**
     * Download Client name.
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
     * Username.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a DownloadClientTransmission resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DownloadClientTransmissionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DownloadClientTransmissionArgs | DownloadClientTransmissionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DownloadClientTransmissionState | undefined;
            resourceInputs["addPaused"] = state ? state.addPaused : undefined;
            resourceInputs["categories"] = state ? state.categories : undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["directory"] = state ? state.directory : undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["itemPriority"] = state ? state.itemPriority : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["urlBase"] = state ? state.urlBase : undefined;
            resourceInputs["useSsl"] = state ? state.useSsl : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as DownloadClientTransmissionArgs | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["addPaused"] = args ? args.addPaused : undefined;
            resourceInputs["categories"] = args ? args.categories : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["directory"] = args ? args.directory : undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["itemPriority"] = args ? args.itemPriority : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["urlBase"] = args ? args.urlBase : undefined;
            resourceInputs["useSsl"] = args ? args.useSsl : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DownloadClientTransmission.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DownloadClientTransmission resources.
 */
export interface DownloadClientTransmissionState {
    /**
     * Add paused flag.
     */
    addPaused?: pulumi.Input<boolean>;
    /**
     * List of mapped categories.
     */
    categories?: pulumi.Input<pulumi.Input<inputs.DownloadClient.DownloadClientTransmissionCategory>[]>;
    /**
     * Category.
     */
    category?: pulumi.Input<string>;
    /**
     * Directory.
     */
    directory?: pulumi.Input<string>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Priority. `0` Last, `1` First.
     */
    itemPriority?: pulumi.Input<number>;
    /**
     * Download Client name.
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
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DownloadClientTransmission resource.
 */
export interface DownloadClientTransmissionArgs {
    /**
     * Add paused flag.
     */
    addPaused?: pulumi.Input<boolean>;
    /**
     * List of mapped categories.
     */
    categories?: pulumi.Input<pulumi.Input<inputs.DownloadClient.DownloadClientTransmissionCategory>[]>;
    /**
     * Category.
     */
    category?: pulumi.Input<string>;
    /**
     * Directory.
     */
    directory?: pulumi.Input<string>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Priority. `0` Last, `1` First.
     */
    itemPriority?: pulumi.Input<number>;
    /**
     * Download Client name.
     */
    name: pulumi.Input<string>;
    /**
     * Password.
     */
    password?: pulumi.Input<string>;
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
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}
