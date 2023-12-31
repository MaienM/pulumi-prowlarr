// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Notification Twitter resource.
 * For more information refer to [Notification](https://wiki.servarr.com/prowlarr/settings#connect) and [Twitter](https://wiki.servarr.com/prowlarr/supported#twitter).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@maienm/pulumi-prowlarr";
 *
 * const example = new prowlarr.notifications.NotificationTwitter("example", {
 *     accessToken: "Token",
 *     accessTokenSecret: "TokenSecret",
 *     consumerKey: "Key",
 *     consumerSecret: "Secret",
 *     includeHealthWarnings: false,
 *     mention: "someone",
 *     name: "Example",
 *     onApplicationUpdate: false,
 *     onHealthIssue: false,
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import prowlarr:Notifications/notificationTwitter:NotificationTwitter example 1
 * ```
 */
export class NotificationTwitter extends pulumi.CustomResource {
    /**
     * Get an existing NotificationTwitter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationTwitterState, opts?: pulumi.CustomResourceOptions): NotificationTwitter {
        return new NotificationTwitter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prowlarr:Notifications/notificationTwitter:NotificationTwitter';

    /**
     * Returns true if the given object is an instance of NotificationTwitter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationTwitter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationTwitter.__pulumiType;
    }

    /**
     * Access token.
     */
    public readonly accessToken!: pulumi.Output<string>;
    /**
     * Access token secret.
     */
    public readonly accessTokenSecret!: pulumi.Output<string>;
    /**
     * Consumer Key.
     */
    public readonly consumerKey!: pulumi.Output<string>;
    /**
     * Consumer Secret.
     */
    public readonly consumerSecret!: pulumi.Output<string>;
    /**
     * Direct message flag.
     */
    public readonly directMessage!: pulumi.Output<boolean>;
    /**
     * Include health warnings.
     */
    public readonly includeHealthWarnings!: pulumi.Output<boolean>;
    /**
     * Include manual grab flag.
     */
    public readonly includeManualGrabs!: pulumi.Output<boolean>;
    /**
     * Mention.
     */
    public readonly mention!: pulumi.Output<string>;
    /**
     * NotificationTwitter name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * On application update flag.
     */
    public readonly onApplicationUpdate!: pulumi.Output<boolean>;
    /**
     * On release grab flag.
     */
    public readonly onGrab!: pulumi.Output<boolean>;
    /**
     * On health issue flag.
     */
    public readonly onHealthIssue!: pulumi.Output<boolean>;
    /**
     * On health restored flag.
     */
    public readonly onHealthRestored!: pulumi.Output<boolean>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a NotificationTwitter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationTwitterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationTwitterArgs | NotificationTwitterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationTwitterState | undefined;
            resourceInputs["accessToken"] = state ? state.accessToken : undefined;
            resourceInputs["accessTokenSecret"] = state ? state.accessTokenSecret : undefined;
            resourceInputs["consumerKey"] = state ? state.consumerKey : undefined;
            resourceInputs["consumerSecret"] = state ? state.consumerSecret : undefined;
            resourceInputs["directMessage"] = state ? state.directMessage : undefined;
            resourceInputs["includeHealthWarnings"] = state ? state.includeHealthWarnings : undefined;
            resourceInputs["includeManualGrabs"] = state ? state.includeManualGrabs : undefined;
            resourceInputs["mention"] = state ? state.mention : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["onApplicationUpdate"] = state ? state.onApplicationUpdate : undefined;
            resourceInputs["onGrab"] = state ? state.onGrab : undefined;
            resourceInputs["onHealthIssue"] = state ? state.onHealthIssue : undefined;
            resourceInputs["onHealthRestored"] = state ? state.onHealthRestored : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as NotificationTwitterArgs | undefined;
            if ((!args || args.accessToken === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessToken'");
            }
            if ((!args || args.accessTokenSecret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessTokenSecret'");
            }
            if ((!args || args.consumerKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumerKey'");
            }
            if ((!args || args.consumerSecret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumerSecret'");
            }
            if ((!args || args.mention === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mention'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["accessToken"] = args?.accessToken ? pulumi.secret(args.accessToken) : undefined;
            resourceInputs["accessTokenSecret"] = args?.accessTokenSecret ? pulumi.secret(args.accessTokenSecret) : undefined;
            resourceInputs["consumerKey"] = args?.consumerKey ? pulumi.secret(args.consumerKey) : undefined;
            resourceInputs["consumerSecret"] = args?.consumerSecret ? pulumi.secret(args.consumerSecret) : undefined;
            resourceInputs["directMessage"] = args ? args.directMessage : undefined;
            resourceInputs["includeHealthWarnings"] = args ? args.includeHealthWarnings : undefined;
            resourceInputs["includeManualGrabs"] = args ? args.includeManualGrabs : undefined;
            resourceInputs["mention"] = args ? args.mention : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onApplicationUpdate"] = args ? args.onApplicationUpdate : undefined;
            resourceInputs["onGrab"] = args ? args.onGrab : undefined;
            resourceInputs["onHealthIssue"] = args ? args.onHealthIssue : undefined;
            resourceInputs["onHealthRestored"] = args ? args.onHealthRestored : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accessToken", "accessTokenSecret", "consumerKey", "consumerSecret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NotificationTwitter.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationTwitter resources.
 */
export interface NotificationTwitterState {
    /**
     * Access token.
     */
    accessToken?: pulumi.Input<string>;
    /**
     * Access token secret.
     */
    accessTokenSecret?: pulumi.Input<string>;
    /**
     * Consumer Key.
     */
    consumerKey?: pulumi.Input<string>;
    /**
     * Consumer Secret.
     */
    consumerSecret?: pulumi.Input<string>;
    /**
     * Direct message flag.
     */
    directMessage?: pulumi.Input<boolean>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * Include manual grab flag.
     */
    includeManualGrabs?: pulumi.Input<boolean>;
    /**
     * Mention.
     */
    mention?: pulumi.Input<string>;
    /**
     * NotificationTwitter name.
     */
    name?: pulumi.Input<string>;
    /**
     * On application update flag.
     */
    onApplicationUpdate?: pulumi.Input<boolean>;
    /**
     * On release grab flag.
     */
    onGrab?: pulumi.Input<boolean>;
    /**
     * On health issue flag.
     */
    onHealthIssue?: pulumi.Input<boolean>;
    /**
     * On health restored flag.
     */
    onHealthRestored?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a NotificationTwitter resource.
 */
export interface NotificationTwitterArgs {
    /**
     * Access token.
     */
    accessToken: pulumi.Input<string>;
    /**
     * Access token secret.
     */
    accessTokenSecret: pulumi.Input<string>;
    /**
     * Consumer Key.
     */
    consumerKey: pulumi.Input<string>;
    /**
     * Consumer Secret.
     */
    consumerSecret: pulumi.Input<string>;
    /**
     * Direct message flag.
     */
    directMessage?: pulumi.Input<boolean>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * Include manual grab flag.
     */
    includeManualGrabs?: pulumi.Input<boolean>;
    /**
     * Mention.
     */
    mention: pulumi.Input<string>;
    /**
     * NotificationTwitter name.
     */
    name: pulumi.Input<string>;
    /**
     * On application update flag.
     */
    onApplicationUpdate?: pulumi.Input<boolean>;
    /**
     * On release grab flag.
     */
    onGrab?: pulumi.Input<boolean>;
    /**
     * On health issue flag.
     */
    onHealthIssue?: pulumi.Input<boolean>;
    /**
     * On health restored flag.
     */
    onHealthRestored?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}
