// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Tags -->Tag resource.
 * For more information refer to [Tags](https://wiki.servarr.com/prowlarr/settings#tags) documentation.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@maienm/pulumi-prowlarr";
 *
 * const example = new prowlarr.tag.Tag("example", {label: "some-value"});
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import prowlarr:Tag/tag:Tag example 10
 * ```
 */
export class Tag extends pulumi.CustomResource {
    /**
     * Get an existing Tag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TagState, opts?: pulumi.CustomResourceOptions): Tag {
        return new Tag(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prowlarr:Tag/tag:Tag';

    /**
     * Returns true if the given object is an instance of Tag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Tag {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Tag.__pulumiType;
    }

    /**
     * Tag label. It must be lowercase.
     */
    public readonly label!: pulumi.Output<string>;

    /**
     * Create a Tag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TagArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TagArgs | TagState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TagState | undefined;
            resourceInputs["label"] = state ? state.label : undefined;
        } else {
            const args = argsOrState as TagArgs | undefined;
            if ((!args || args.label === undefined) && !opts.urn) {
                throw new Error("Missing required property 'label'");
            }
            resourceInputs["label"] = args ? args.label : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Tag.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Tag resources.
 */
export interface TagState {
    /**
     * Tag label. It must be lowercase.
     */
    label?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Tag resource.
 */
export interface TagArgs {
    /**
     * Tag label. It must be lowercase.
     */
    label: pulumi.Input<string>;
}
