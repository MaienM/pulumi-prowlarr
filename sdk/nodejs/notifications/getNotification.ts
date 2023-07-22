// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Single Notification.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@pulumi/prowlarr";
 *
 * const example = prowlarr.Notifications.getNotification({
 *     name: "Example",
 * });
 * ```
 */
export function getNotification(args: GetNotificationArgs, opts?: pulumi.InvokeOptions): Promise<GetNotificationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("prowlarr:Notifications/getNotification:getNotification", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getNotification.
 */
export interface GetNotificationArgs {
    /**
     * Notification name.
     */
    name: string;
}

/**
 * A collection of values returned by getNotification.
 */
export interface GetNotificationResult {
    /**
     * Access token.
     */
    readonly accessToken: string;
    /**
     * Access token secret.
     */
    readonly accessTokenSecret: string;
    /**
     * Always update flag.
     */
    readonly alwaysUpdate: boolean;
    /**
     * API key.
     */
    readonly apiKey: string;
    /**
     * App token.
     */
    readonly appToken: string;
    /**
     * Arguments.
     */
    readonly arguments: string;
    /**
     * Auth password.
     */
    readonly authPassword: string;
    /**
     * Auth token.
     */
    readonly authToken: string;
    /**
     * Auth user.
     */
    readonly authUser: string;
    /**
     * Auth username.
     */
    readonly authUsername: string;
    /**
     * Author.
     */
    readonly author: string;
    /**
     * Avatar.
     */
    readonly avatar: string;
    /**
     * Base URL.
     */
    readonly baseUrl: string;
    /**
     * Bcc.
     */
    readonly bccs: string[];
    /**
     * Bot token.
     */
    readonly botToken: string;
    /**
     * Cc.
     */
    readonly ccs: string[];
    /**
     * Channel.
     */
    readonly channel: string;
    /**
     * Channel tags.
     */
    readonly channelTags: string[];
    /**
     * Chat ID.
     */
    readonly chatId: string;
    /**
     * Clean library flag.
     */
    readonly cleanLibrary: boolean;
    /**
     * Click URL.
     */
    readonly clickUrl: string;
    /**
     * Notification configuration template.
     */
    readonly configContract: string;
    /**
     * Configuration key.
     */
    readonly configurationKey: string;
    /**
     * Consumer key.
     */
    readonly consumerKey: string;
    /**
     * Consumer secret.
     */
    readonly consumerSecret: string;
    /**
     * Device IDs.
     */
    readonly deviceIds: number[];
    /**
     * Device names.
     */
    readonly deviceNames: string;
    /**
     * Devices.
     */
    readonly devices: string[];
    /**
     * Direct message flag.
     */
    readonly directMessage: boolean;
    /**
     * Display time.
     */
    readonly displayTime: number;
    /**
     * Event.
     */
    readonly event: string;
    /**
     * Expire.
     */
    readonly expire: number;
    /**
     * Expires.
     */
    readonly expires: string;
    /**
     * Devices.
     */
    readonly fieldTags: string[];
    /**
     * From.
     */
    readonly from: string;
    /**
     * Grab fields. `0` Overview, `1` Rating, `2` Genres, `3` Quality, `4` Group, `5` Size, `6` Links, `7` Release, `8` Poster, `9` Fanart, `10` CustomFormats, `11` CustomFormatScore.
     */
    readonly grabFields: number[];
    /**
     * Host.
     */
    readonly host: string;
    /**
     * Icon.
     */
    readonly icon: string;
    /**
     * Notification ID.
     */
    readonly id: number;
    /**
     * Notification implementation name.
     */
    readonly implementation: string;
    /**
     * Include health warnings.
     */
    readonly includeHealthWarnings: boolean;
    /**
     * Include manual grab flag.
     */
    readonly includeManualGrabs: boolean;
    /**
     * Instance name.
     */
    readonly instanceName: string;
    /**
     * Key.
     */
    readonly key: string;
    /**
     * Map From.
     */
    readonly mapFrom: string;
    /**
     * Map To.
     */
    readonly mapTo: string;
    /**
     * Mention.
     */
    readonly mention: string;
    /**
     * Method. `1` POST, `2` PUT.
     */
    readonly method: number;
    /**
     * Notification name.
     */
    readonly name: string;
    /**
     * Notification type. `0` Info, `1` Success, `2` Warning, `3` Failure.
     */
    readonly notificationType: number;
    /**
     * Notify flag.
     */
    readonly notify: boolean;
    /**
     * On application update flag.
     */
    readonly onApplicationUpdate: boolean;
    /**
     * On release grab flag.
     */
    readonly onGrab: boolean;
    /**
     * On health issue flag.
     */
    readonly onHealthIssue: boolean;
    /**
     * On health restored flag.
     */
    readonly onHealthRestored: boolean;
    /**
     * password.
     */
    readonly password: string;
    /**
     * Path.
     */
    readonly path: string;
    /**
     * Port.
     */
    readonly port: number;
    /**
     * Priority.
     */
    readonly priority: number;
    /**
     * Receiver ID.
     */
    readonly receiverId: string;
    /**
     * Recipients.
     */
    readonly recipients: string[];
    /**
     * Refresh token.
     */
    readonly refreshToken: string;
    /**
     * Require encryption flag.
     */
    readonly requireEncryption: boolean;
    /**
     * Retry.
     */
    readonly retry: number;
    /**
     * Add silently flag.
     */
    readonly sendSilently: boolean;
    /**
     * Sender domain.
     */
    readonly senderDomain: string;
    /**
     * Sender ID.
     */
    readonly senderId: string;
    /**
     * Sender Number.
     */
    readonly senderNumber: string;
    /**
     * server.
     */
    readonly server: string;
    /**
     * Server url.
     */
    readonly serverUrl: string;
    /**
     * Sign in.
     */
    readonly signIn: string;
    /**
     * Sound.
     */
    readonly sound: string;
    /**
     * Comma separated stateless URLs.
     */
    readonly statelessUrls: string;
    /**
     * List of associated tags.
     */
    readonly tags: number[];
    /**
     * Token.
     */
    readonly token: string;
    /**
     * Topic ID.
     */
    readonly topicId: string;
    /**
     * Devices.
     */
    readonly topics: string[];
    /**
     * To.
     */
    readonly tos: string[];
    /**
     * Update library flag.
     */
    readonly updateLibrary: boolean;
    /**
     * URL.
     */
    readonly url: string;
    /**
     * Use EU endpoint flag.
     */
    readonly useEuEndpoint: boolean;
    /**
     * Use SSL flag.
     */
    readonly useSsl: boolean;
    /**
     * User key.
     */
    readonly userKey: string;
    /**
     * Username.
     */
    readonly username: string;
    /**
     * Web hook url.
     */
    readonly webHookUrl: string;
}
/**
 * <!-- subcategory:Notifications -->Single Notification.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@pulumi/prowlarr";
 *
 * const example = prowlarr.Notifications.getNotification({
 *     name: "Example",
 * });
 * ```
 */
export function getNotificationOutput(args: GetNotificationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNotificationResult> {
    return pulumi.output(args).apply((a: any) => getNotification(a, opts))
}

/**
 * A collection of arguments for invoking getNotification.
 */
export interface GetNotificationOutputArgs {
    /**
     * Notification name.
     */
    name: pulumi.Input<string>;
}
