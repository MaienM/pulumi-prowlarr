---
title: Prowlarr Installation & Configuration
meta_desc: Information on how to install the Prowlarr provider.
layout: installation
---

## Installation

The Pulumi Prowlarr provider is available as a package in all Pulumi languages:

* JavaScript/TypeScript: [`@maienm/pulumi-prowlarr`](https://www.npmjs.com/package/@maienm/pulumi-prowlarr)
* Python: [`pulumi_prowlarr`](https://pypi.org/project/pulumi_prowlarr/)
* Go: [`github.com/MaienM/pulumi-prowlarr/sdk/go/prowlarr`](https://pkg.go.dev/github.com/MaienM/pulumi-prowlarr/sdk/go/prowlarr)
* .NET: [`MaienM.Prowlarr`](https://www.nuget.org/packages/MaienM.Prowlarr)


## Configuration

> Note:  
> Replace the following **sample content**, with the configuration options
> of the wrapped Terraform provider and remove this note.

The following configuration points are available for the `prowlarr` provider:

- `prowlarr:apiKey` (environment: `prowlarr_API_KEY`) - the API key for `prowlarr`
- `prowlarr:region` (environment: `prowlarr_REGION`) - the region in which to deploy resources

### Provider Binary

The Prowlarr provider binary is a third party binary. It can be installed using the `pulumi plugin` command.

```bash
pulumi plugin install resource prowlarr <version>
```

Replace the version string `<version>` with your desired version.
