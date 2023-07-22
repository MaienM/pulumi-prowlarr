// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Applications -->Application LazyLibrarian resource.
 * For more information refer to [Application](https://wiki.servarr.com/prowlarr/settings#applications) and [LazyLibrarian](https://wiki.servarr.com/prowlarr/supported#lazylibrarian).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@maienm/pulumi-prowlarr";
 *
 * const example = new prowlarr.application.ApplicationLazyLibrarian("example", {
 *     apiKey: "APIKey",
 *     baseUrl: "http://localhost:5299",
 *     name: "Example",
 *     prowlarrUrl: "http://localhost:9696",
 *     syncCategories: [
 *         7000,
 *         7010,
 *         7030,
 *     ],
 *     syncLevel: "addOnly",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import prowlarr:Application/applicationLazyLibrarian:ApplicationLazyLibrarian example 1
 * ```
 */
export class ApplicationLazyLibrarian extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationLazyLibrarian resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationLazyLibrarianState, opts?: pulumi.CustomResourceOptions): ApplicationLazyLibrarian {
        return new ApplicationLazyLibrarian(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prowlarr:Application/applicationLazyLibrarian:ApplicationLazyLibrarian';

    /**
     * Returns true if the given object is an instance of ApplicationLazyLibrarian.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationLazyLibrarian {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationLazyLibrarian.__pulumiType;
    }

    /**
     * API key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * Base URL.
     */
    public readonly baseUrl!: pulumi.Output<string>;
    /**
     * Application name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Prowlarr URL.
     */
    public readonly prowlarrUrl!: pulumi.Output<string>;
    /**
     * Sync categories.
     */
    public readonly syncCategories!: pulumi.Output<number[]>;
    /**
     * Sync level.
     */
    public readonly syncLevel!: pulumi.Output<string>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a ApplicationLazyLibrarian resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationLazyLibrarianArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationLazyLibrarianArgs | ApplicationLazyLibrarianState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationLazyLibrarianState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["baseUrl"] = state ? state.baseUrl : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["prowlarrUrl"] = state ? state.prowlarrUrl : undefined;
            resourceInputs["syncCategories"] = state ? state.syncCategories : undefined;
            resourceInputs["syncLevel"] = state ? state.syncLevel : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ApplicationLazyLibrarianArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.baseUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'baseUrl'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.prowlarrUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'prowlarrUrl'");
            }
            if ((!args || args.syncLevel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'syncLevel'");
            }
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["baseUrl"] = args ? args.baseUrl : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["prowlarrUrl"] = args ? args.prowlarrUrl : undefined;
            resourceInputs["syncCategories"] = args ? args.syncCategories : undefined;
            resourceInputs["syncLevel"] = args ? args.syncLevel : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ApplicationLazyLibrarian.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ApplicationLazyLibrarian resources.
 */
export interface ApplicationLazyLibrarianState {
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * Application name.
     */
    name?: pulumi.Input<string>;
    /**
     * Prowlarr URL.
     */
    prowlarrUrl?: pulumi.Input<string>;
    /**
     * Sync categories.
     */
    syncCategories?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Sync level.
     */
    syncLevel?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a ApplicationLazyLibrarian resource.
 */
export interface ApplicationLazyLibrarianArgs {
    /**
     * API key.
     */
    apiKey: pulumi.Input<string>;
    /**
     * Base URL.
     */
    baseUrl: pulumi.Input<string>;
    /**
     * Application name.
     */
    name: pulumi.Input<string>;
    /**
     * Prowlarr URL.
     */
    prowlarrUrl: pulumi.Input<string>;
    /**
     * Sync categories.
     */
    syncCategories?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Sync level.
     */
    syncLevel: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}
