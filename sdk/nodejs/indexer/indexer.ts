// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Indexers -->Generic Indexer resource.
 * For more information refer to [Indexer](https://wiki.servarr.com/prowlarr/indexers) documentation.
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import prowlarr:Indexer/indexer:Indexer example 1
 * ```
 */
export class Indexer extends pulumi.CustomResource {
    /**
     * Get an existing Indexer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IndexerState, opts?: pulumi.CustomResourceOptions): Indexer {
        return new Indexer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prowlarr:Indexer/indexer:Indexer';

    /**
     * Returns true if the given object is an instance of Indexer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Indexer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Indexer.__pulumiType;
    }

    /**
     * Application profile ID.
     */
    public readonly appProfileId!: pulumi.Output<number>;
    /**
     * Indexer configuration template.
     */
    public readonly configContract!: pulumi.Output<string>;
    /**
     * Enable flag.
     */
    public readonly enable!: pulumi.Output<boolean>;
    /**
     * Set of configuration fields.
     */
    public readonly fields!: pulumi.Output<outputs.Indexer.IndexerField[]>;
    /**
     * Indexer implementation name.
     */
    public readonly implementation!: pulumi.Output<string>;
    /**
     * Language.
     */
    public /*out*/ readonly language!: pulumi.Output<string>;
    /**
     * Indexer name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Priority.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Privacy.
     */
    public /*out*/ readonly privacy!: pulumi.Output<string>;
    /**
     * Protocol. Valid values are 'usenet' and 'torrent'.
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a Indexer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IndexerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IndexerArgs | IndexerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IndexerState | undefined;
            resourceInputs["appProfileId"] = state ? state.appProfileId : undefined;
            resourceInputs["configContract"] = state ? state.configContract : undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["fields"] = state ? state.fields : undefined;
            resourceInputs["implementation"] = state ? state.implementation : undefined;
            resourceInputs["language"] = state ? state.language : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["privacy"] = state ? state.privacy : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as IndexerArgs | undefined;
            if ((!args || args.configContract === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configContract'");
            }
            if ((!args || args.fields === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fields'");
            }
            if ((!args || args.implementation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'implementation'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            resourceInputs["appProfileId"] = args ? args.appProfileId : undefined;
            resourceInputs["configContract"] = args ? args.configContract : undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["fields"] = args ? args.fields : undefined;
            resourceInputs["implementation"] = args ? args.implementation : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["language"] = undefined /*out*/;
            resourceInputs["privacy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Indexer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Indexer resources.
 */
export interface IndexerState {
    /**
     * Application profile ID.
     */
    appProfileId?: pulumi.Input<number>;
    /**
     * Indexer configuration template.
     */
    configContract?: pulumi.Input<string>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Set of configuration fields.
     */
    fields?: pulumi.Input<pulumi.Input<inputs.Indexer.IndexerField>[]>;
    /**
     * Indexer implementation name.
     */
    implementation?: pulumi.Input<string>;
    /**
     * Language.
     */
    language?: pulumi.Input<string>;
    /**
     * Indexer name.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Privacy.
     */
    privacy?: pulumi.Input<string>;
    /**
     * Protocol. Valid values are 'usenet' and 'torrent'.
     */
    protocol?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a Indexer resource.
 */
export interface IndexerArgs {
    /**
     * Application profile ID.
     */
    appProfileId?: pulumi.Input<number>;
    /**
     * Indexer configuration template.
     */
    configContract: pulumi.Input<string>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Set of configuration fields.
     */
    fields: pulumi.Input<pulumi.Input<inputs.Indexer.IndexerField>[]>;
    /**
     * Indexer implementation name.
     */
    implementation: pulumi.Input<string>;
    /**
     * Indexer name.
     */
    name: pulumi.Input<string>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Protocol. Valid values are 'usenet' and 'torrent'.
     */
    protocol: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}
