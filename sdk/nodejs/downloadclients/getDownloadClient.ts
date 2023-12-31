// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Download Clients -->Single Download Client.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@pulumi/prowlarr";
 *
 * const test = prowlarr.DownloadClients.getDownloadClient({
 *     name: "Example",
 * });
 * ```
 */
export function getDownloadClient(args: GetDownloadClientArgs, opts?: pulumi.InvokeOptions): Promise<GetDownloadClientResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("prowlarr:DownloadClients/getDownloadClient:getDownloadClient", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getDownloadClient.
 */
export interface GetDownloadClientArgs {
    /**
     * Download Client name.
     */
    name: string;
}

/**
 * A collection of values returned by getDownloadClient.
 */
export interface GetDownloadClientResult {
    /**
     * Add paused flag.
     */
    readonly addPaused: boolean;
    /**
     * Add stopped flag.
     */
    readonly addStopped: boolean;
    /**
     * Additional tags, `0` TitleSlug, `1` Quality, `2` Language, `3` ReleaseGroup, `4` Year, `5` Indexer, `6` Network.
     */
    readonly additionalTags: number[];
    /**
     * API key.
     */
    readonly apiKey: string;
    /**
     * API URL.
     */
    readonly apiUrl: string;
    /**
     * App ID.
     */
    readonly appId: string;
    /**
     * App Token.
     */
    readonly appToken: string;
    /**
     * List of mapped categories.
     */
    readonly categories: outputs.DownloadClients.GetDownloadClientCategory[];
    /**
     * Category.
     */
    readonly category: string;
    /**
     * DownloadClient configuration template.
     */
    readonly configContract: string;
    /**
     * Destination.
     */
    readonly destination: string;
    /**
     * Movie directory.
     */
    readonly destinationDirectory: string;
    /**
     * Directory.
     */
    readonly directory: string;
    /**
     * Enable flag.
     */
    readonly enable: boolean;
    /**
     * Field tags.
     */
    readonly fieldTags: string[];
    /**
     * host.
     */
    readonly host: string;
    /**
     * Download Client ID.
     */
    readonly id: number;
    /**
     * DownloadClient implementation name.
     */
    readonly implementation: string;
    /**
     * Initial state. `0` Start, `1` ForceStart, `2` Pause.
     */
    readonly initialState: number;
    /**
     * Initial state, with Stop support. `0` Start, `1` ForceStart, `2` Pause, `3` Stop.
     */
    readonly intialState: number;
    /**
     * Priority. `0` Last, `1` First.
     */
    readonly itemPriority: number;
    /**
     * Magnet file extension.
     */
    readonly magnetFileExtension: string;
    /**
     * Download Client name.
     */
    readonly name: string;
    /**
     * NZB folder.
     */
    readonly nzbFolder: string;
    /**
     * Password.
     */
    readonly password: string;
    /**
     * Port.
     */
    readonly port: number;
    /**
     * Post import tags.
     */
    readonly postImTags: string[];
    /**
     * Priority.
     */
    readonly priority: number;
    /**
     * Protocol. Valid values are 'usenet' and 'torrent'.
     */
    readonly protocol: string;
    /**
     * Read only flag.
     */
    readonly readOnly: boolean;
    /**
     * RPC path.
     */
    readonly rpcPath: string;
    /**
     * Save magnet files flag.
     */
    readonly saveMagnetFiles: boolean;
    /**
     * Secret token.
     */
    readonly secretToken: string;
    /**
     * Sequential order flag.
     */
    readonly sequentialOrder: boolean;
    /**
     * Start on add flag.
     */
    readonly startOnAdd: boolean;
    /**
     * STRM folder.
     */
    readonly strmFolder: string;
    /**
     * List of associated tags.
     */
    readonly tags: number[];
    /**
     * Torrent folder.
     */
    readonly torrentFolder: string;
    /**
     * TV imported category.
     */
    readonly tvImportedCategory: string;
    /**
     * Base URL.
     */
    readonly urlBase: string;
    /**
     * Use SSL flag.
     */
    readonly useSsl: boolean;
    /**
     * Username.
     */
    readonly username: string;
}
/**
 * <!-- subcategory:Download Clients -->Single Download Client.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@pulumi/prowlarr";
 *
 * const test = prowlarr.DownloadClients.getDownloadClient({
 *     name: "Example",
 * });
 * ```
 */
export function getDownloadClientOutput(args: GetDownloadClientOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDownloadClientResult> {
    return pulumi.output(args).apply((a: any) => getDownloadClient(a, opts))
}

/**
 * A collection of arguments for invoking getDownloadClient.
 */
export interface GetDownloadClientOutputArgs {
    /**
     * Download Client name.
     */
    name: pulumi.Input<string>;
}
