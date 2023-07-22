// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Notification Discord resource.
 * For more information refer to [Notification](https://wiki.servarr.com/prowlarr/settings#connect) and [Discord](https://wiki.servarr.com/prowlarr/supported#discord).
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import prowlarr:Notification/notificationDiscord:NotificationDiscord example 1
 * ```
 */
export class NotificationDiscord extends pulumi.CustomResource {
    /**
     * Get an existing NotificationDiscord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationDiscordState, opts?: pulumi.CustomResourceOptions): NotificationDiscord {
        return new NotificationDiscord(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prowlarr:Notification/notificationDiscord:NotificationDiscord';

    /**
     * Returns true if the given object is an instance of NotificationDiscord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationDiscord {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationDiscord.__pulumiType;
    }

    /**
     * Author.
     */
    public readonly author!: pulumi.Output<string>;
    /**
     * Avatar.
     */
    public readonly avatar!: pulumi.Output<string>;
    /**
     * Grab fields. `0` Overview, `1` Rating, `2` Genres, `3` Quality, `4` Group, `5` Size, `6` Links, `7` Release, `8` Poster, `9` Fanart.
     */
    public readonly grabFields!: pulumi.Output<number[]>;
    /**
     * Include health warnings.
     */
    public readonly includeHealthWarnings!: pulumi.Output<boolean>;
    /**
     * Include manual grab flag.
     */
    public readonly includeManualGrabs!: pulumi.Output<boolean>;
    /**
     * NotificationDiscord name.
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
     * Username.
     */
    public readonly username!: pulumi.Output<string>;
    /**
     * Web hook URL.
     */
    public readonly webHookUrl!: pulumi.Output<string>;

    /**
     * Create a NotificationDiscord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationDiscordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationDiscordArgs | NotificationDiscordState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationDiscordState | undefined;
            resourceInputs["author"] = state ? state.author : undefined;
            resourceInputs["avatar"] = state ? state.avatar : undefined;
            resourceInputs["grabFields"] = state ? state.grabFields : undefined;
            resourceInputs["includeHealthWarnings"] = state ? state.includeHealthWarnings : undefined;
            resourceInputs["includeManualGrabs"] = state ? state.includeManualGrabs : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["onApplicationUpdate"] = state ? state.onApplicationUpdate : undefined;
            resourceInputs["onGrab"] = state ? state.onGrab : undefined;
            resourceInputs["onHealthIssue"] = state ? state.onHealthIssue : undefined;
            resourceInputs["onHealthRestored"] = state ? state.onHealthRestored : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["webHookUrl"] = state ? state.webHookUrl : undefined;
        } else {
            const args = argsOrState as NotificationDiscordArgs | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.webHookUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'webHookUrl'");
            }
            resourceInputs["author"] = args ? args.author : undefined;
            resourceInputs["avatar"] = args ? args.avatar : undefined;
            resourceInputs["grabFields"] = args ? args.grabFields : undefined;
            resourceInputs["includeHealthWarnings"] = args ? args.includeHealthWarnings : undefined;
            resourceInputs["includeManualGrabs"] = args ? args.includeManualGrabs : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onApplicationUpdate"] = args ? args.onApplicationUpdate : undefined;
            resourceInputs["onGrab"] = args ? args.onGrab : undefined;
            resourceInputs["onHealthIssue"] = args ? args.onHealthIssue : undefined;
            resourceInputs["onHealthRestored"] = args ? args.onHealthRestored : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["webHookUrl"] = args ? args.webHookUrl : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NotificationDiscord.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationDiscord resources.
 */
export interface NotificationDiscordState {
    /**
     * Author.
     */
    author?: pulumi.Input<string>;
    /**
     * Avatar.
     */
    avatar?: pulumi.Input<string>;
    /**
     * Grab fields. `0` Overview, `1` Rating, `2` Genres, `3` Quality, `4` Group, `5` Size, `6` Links, `7` Release, `8` Poster, `9` Fanart.
     */
    grabFields?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * Include manual grab flag.
     */
    includeManualGrabs?: pulumi.Input<boolean>;
    /**
     * NotificationDiscord name.
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
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
    /**
     * Web hook URL.
     */
    webHookUrl?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NotificationDiscord resource.
 */
export interface NotificationDiscordArgs {
    /**
     * Author.
     */
    author?: pulumi.Input<string>;
    /**
     * Avatar.
     */
    avatar?: pulumi.Input<string>;
    /**
     * Grab fields. `0` Overview, `1` Rating, `2` Genres, `3` Quality, `4` Group, `5` Size, `6` Links, `7` Release, `8` Poster, `9` Fanart.
     */
    grabFields?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * Include manual grab flag.
     */
    includeManualGrabs?: pulumi.Input<boolean>;
    /**
     * NotificationDiscord name.
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
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
    /**
     * Web hook URL.
     */
    webHookUrl: pulumi.Input<string>;
}
