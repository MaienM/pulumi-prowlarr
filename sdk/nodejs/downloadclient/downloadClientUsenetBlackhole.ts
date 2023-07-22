// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Download Clients -->Download Client Usenet Blackhole resource.
 * For more information refer to [Download Client](https://wiki.servarr.com/prowlarr/settings#download-clients) and [UsenetBlackhole](https://wiki.servarr.com/prowlarr/supported#usenetblackhole).
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import prowlarr:DownloadClient/downloadClientUsenetBlackhole:DownloadClientUsenetBlackhole example 1
 * ```
 */
export class DownloadClientUsenetBlackhole extends pulumi.CustomResource {
    /**
     * Get an existing DownloadClientUsenetBlackhole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DownloadClientUsenetBlackholeState, opts?: pulumi.CustomResourceOptions): DownloadClientUsenetBlackhole {
        return new DownloadClientUsenetBlackhole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prowlarr:DownloadClient/downloadClientUsenetBlackhole:DownloadClientUsenetBlackhole';

    /**
     * Returns true if the given object is an instance of DownloadClientUsenetBlackhole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DownloadClientUsenetBlackhole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DownloadClientUsenetBlackhole.__pulumiType;
    }

    /**
     * List of mapped categories.
     */
    public /*out*/ readonly categories!: pulumi.Output<outputs.DownloadClient.DownloadClientUsenetBlackholeCategory[]>;
    /**
     * Enable flag.
     */
    public readonly enable!: pulumi.Output<boolean>;
    /**
     * Download Client name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Usenet folder.
     */
    public readonly nzbFolder!: pulumi.Output<string>;
    /**
     * Priority.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a DownloadClientUsenetBlackhole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DownloadClientUsenetBlackholeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DownloadClientUsenetBlackholeArgs | DownloadClientUsenetBlackholeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DownloadClientUsenetBlackholeState | undefined;
            resourceInputs["categories"] = state ? state.categories : undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nzbFolder"] = state ? state.nzbFolder : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as DownloadClientUsenetBlackholeArgs | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.nzbFolder === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nzbFolder'");
            }
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nzbFolder"] = args ? args.nzbFolder : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["categories"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DownloadClientUsenetBlackhole.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DownloadClientUsenetBlackhole resources.
 */
export interface DownloadClientUsenetBlackholeState {
    /**
     * List of mapped categories.
     */
    categories?: pulumi.Input<pulumi.Input<inputs.DownloadClient.DownloadClientUsenetBlackholeCategory>[]>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Download Client name.
     */
    name?: pulumi.Input<string>;
    /**
     * Usenet folder.
     */
    nzbFolder?: pulumi.Input<string>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a DownloadClientUsenetBlackhole resource.
 */
export interface DownloadClientUsenetBlackholeArgs {
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Download Client name.
     */
    name: pulumi.Input<string>;
    /**
     * Usenet folder.
     */
    nzbFolder: pulumi.Input<string>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}
