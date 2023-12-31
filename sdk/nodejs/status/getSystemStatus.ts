// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Status -->System Status resource. User must have rights to read `config.xml`.
 * For more information refer to [System Status](https://wiki.servarr.com/prowlarr/system#status) documentation.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as prowlarr from "@pulumi/prowlarr";
 *
 * const example = prowlarr.Status.getSystemStatus({});
 * ```
 */
export function getSystemStatus(opts?: pulumi.InvokeOptions): Promise<GetSystemStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("prowlarr:Status/getSystemStatus:getSystemStatus", {
    }, opts);
}

/**
 * A collection of values returned by getSystemStatus.
 */
export interface GetSystemStatusResult {
    /**
     * App data folder.
     */
    readonly appData: string;
    /**
     * App name.
     */
    readonly appName: string;
    /**
     * Authentication.
     */
    readonly authentication: string;
    /**
     * Branch.
     */
    readonly branch: string;
    /**
     * Build time.
     */
    readonly buildTime: string;
    /**
     * Database type.
     */
    readonly databaseType: string;
    /**
     * Database version.
     */
    readonly databaseVersion: string;
    /**
     * Delay Profile ID.
     */
    readonly id: number;
    /**
     * Instance name.
     */
    readonly instanceName: string;
    /**
     * Is admin flag.
     */
    readonly isAdmin: boolean;
    /**
     * Is debug flag.
     */
    readonly isDebug: boolean;
    /**
     * Is docker flag.
     */
    readonly isDocker: boolean;
    /**
     * Is linux flag.
     */
    readonly isLinux: boolean;
    /**
     * Is net core flag.
     */
    readonly isNetCore: boolean;
    /**
     * Is osx flag.
     */
    readonly isOsx: boolean;
    /**
     * Is production flag.
     */
    readonly isProduction: boolean;
    /**
     * Is user interactive flag.
     */
    readonly isUserInteractive: boolean;
    /**
     * Is windows flag.
     */
    readonly isWindows: boolean;
    /**
     * Migration version.
     */
    readonly migrationVersion: number;
    /**
     * Mode.
     */
    readonly mode: string;
    /**
     * OS name.
     */
    readonly osName: string;
    /**
     * OS version.
     */
    readonly osVersion: string;
    /**
     * Package author.
     */
    readonly packageAuthor: string;
    /**
     * Package update mechanism.
     */
    readonly packageUpdateMechanism: string;
    /**
     * Package update mechanism message.
     */
    readonly packageUpdateMechanismMessage: string;
    /**
     * Package version.
     */
    readonly packageVersion: string;
    /**
     * Runtime name.
     */
    readonly runtimeName: string;
    /**
     * Runtime version.
     */
    readonly runtimeVersion: string;
    /**
     * Start time.
     */
    readonly startTime: string;
    /**
     * Startup path.
     */
    readonly startupPath: string;
    /**
     * Base URL.
     */
    readonly urlBase: string;
    /**
     * Version.
     */
    readonly version: string;
}
