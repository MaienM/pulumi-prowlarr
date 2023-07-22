// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Tags -->Single Tag.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@pulumi/prowlarr";
 *
 * const example = prowlarr.Tag.getTag({
 *     label: "example",
 * });
 * ```
 */
export function getTag(args: GetTagArgs, opts?: pulumi.InvokeOptions): Promise<GetTagResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("prowlarr:Tag/getTag:getTag", {
        "label": args.label,
    }, opts);
}

/**
 * A collection of arguments for invoking getTag.
 */
export interface GetTagArgs {
    /**
     * Tag label.
     */
    label: string;
}

/**
 * A collection of values returned by getTag.
 */
export interface GetTagResult {
    /**
     * Tag ID.
     */
    readonly id: number;
    /**
     * Tag label.
     */
    readonly label: string;
}
/**
 * <!-- subcategory:Tags -->Single Tag.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@pulumi/prowlarr";
 *
 * const example = prowlarr.Tag.getTag({
 *     label: "example",
 * });
 * ```
 */
export function getTagOutput(args: GetTagOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTagResult> {
    return pulumi.output(args).apply((a: any) => getTag(a, opts))
}

/**
 * A collection of arguments for invoking getTag.
 */
export interface GetTagOutputArgs {
    /**
     * Tag label.
     */
    label: pulumi.Input<string>;
}
