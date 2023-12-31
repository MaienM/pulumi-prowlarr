// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Tag -->Single Tag with its associated resources.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@pulumi/prowlarr";
 *
 * const example = prowlarr.Tags.getTagDetails({
 *     label: "example",
 * });
 * ```
 */
export function getTagDetails(args: GetTagDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetTagDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("prowlarr:Tags/getTagDetails:getTagDetails", {
        "label": args.label,
    }, opts);
}

/**
 * A collection of arguments for invoking getTagDetails.
 */
export interface GetTagDetailsArgs {
    /**
     * Tag label.
     */
    label: string;
}

/**
 * A collection of values returned by getTagDetails.
 */
export interface GetTagDetailsResult {
    /**
     * List of associated applications.
     */
    readonly applicationIds: number[];
    /**
     * Tag ID.
     */
    readonly id: number;
    /**
     * List of associated indexers.
     */
    readonly indexerIds: number[];
    /**
     * List of associated indexer proxies.
     */
    readonly indexerProxyIds: number[];
    /**
     * Tag label.
     */
    readonly label: string;
    /**
     * List of associated notifications.
     */
    readonly notificationIds: number[];
}
/**
 * <!-- subcategory:Tag -->Single Tag with its associated resources.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@pulumi/prowlarr";
 *
 * const example = prowlarr.Tags.getTagDetails({
 *     label: "example",
 * });
 * ```
 */
export function getTagDetailsOutput(args: GetTagDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTagDetailsResult> {
    return pulumi.output(args).apply((a: any) => getTagDetails(a, opts))
}

/**
 * A collection of arguments for invoking getTagDetails.
 */
export interface GetTagDetailsOutputArgs {
    /**
     * Tag label.
     */
    label: pulumi.Input<string>;
}
