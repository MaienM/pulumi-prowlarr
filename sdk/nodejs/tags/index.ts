// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

// Export members:
export { GetTagArgs, GetTagResult, GetTagOutputArgs } from "./getTag";
export const getTag: typeof import("./getTag").getTag = null as any;
export const getTagOutput: typeof import("./getTag").getTagOutput = null as any;
utilities.lazyLoad(exports, ["getTag","getTagOutput"], () => require("./getTag"));

export { GetTagDetailsArgs, GetTagDetailsResult, GetTagDetailsOutputArgs } from "./getTagDetails";
export const getTagDetails: typeof import("./getTagDetails").getTagDetails = null as any;
export const getTagDetailsOutput: typeof import("./getTagDetails").getTagDetailsOutput = null as any;
utilities.lazyLoad(exports, ["getTagDetails","getTagDetailsOutput"], () => require("./getTagDetails"));

export { GetTagsResult } from "./getTags";
export const getTags: typeof import("./getTags").getTags = null as any;
utilities.lazyLoad(exports, ["getTags"], () => require("./getTags"));

export { GetTagsDetailsResult } from "./getTagsDetails";
export const getTagsDetails: typeof import("./getTagsDetails").getTagsDetails = null as any;
utilities.lazyLoad(exports, ["getTagsDetails"], () => require("./getTagsDetails"));

export { TagArgs, TagState } from "./tag";
export type Tag = import("./tag").Tag;
export const Tag: typeof import("./tag").Tag = null as any;
utilities.lazyLoad(exports, ["Tag"], () => require("./tag"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "prowlarr:Tags/tag:Tag":
                return new Tag(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("prowlarr", "Tags/tag", _module)