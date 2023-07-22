// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package prowlarr

import (
	_ "embed"
	"fmt"
	"path/filepath"
	"strings"

	"github.com/MaienM/pulumi-prowlarr/provider/pkg/version"
	shimprovider "github.com/devopsarr/terraform-provider-prowlarr/shim"
	"github.com/ettle/strcase"
	pf "github.com/pulumi/pulumi-terraform-bridge/pf/tfbridge"
	"github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfbridge"
	"github.com/pulumi/pulumi/sdk/v3/go/common/tokens"
	"github.com/pulumi/pulumi/sdk/v3/go/common/util/contract"
)

//go:embed cmd/pulumi-resource-prowlarr/bridge-metadata.json
var bridgeMetadata []byte

// all of the token components used below.
const (
	// This variable controls the default name of the package in the package
	mainMod            = "index" // the prowlarr module
	modApplications    = "Application"
	modDownloadClients = "DownloadClient"
	modIndexerProxies  = "IndexerProxy"
	modIndexers        = "Indexer"
	modNotification    = "Notification"
	modStatus          = "Status"
	modTags            = "Tag"
)

func convertName(name string) string {
	idx := strings.Index(name, "_")
	contract.Assertf(idx > 0 && idx < len(name)-1, "Invalid snake case name %s", name)
	name = name[idx+1:]
	contract.Assertf(len(name) > 0, "Invalid snake case name %s", name)
	return strcase.ToPascal(name)
}

func makeDataSource(mod string, name string) tokens.ModuleMember {
	name = convertName(name)
	return tfbridge.MakeDataSource("prowlarr", mod, "get"+name)
}

func makeResource(mod string, res string) tokens.Type {
	return tfbridge.MakeResource("prowlarr", mod, convertName(res))
}

// Provider returns additional overlaid schema and metadata associated with the provider..
func Provider() tfbridge.ProviderInfo {
	// Instantiate the Terraform provider
	p := pf.ShimProvider(shimprovider.NewProvider(version.Version)())

	// Create a Pulumi provider mapping
	return tfbridge.ProviderInfo{
		Name: "prowlarr",
		P:    p,
		// DisplayName is a way to be able to change the casing of the provider
		// name when being displayed on the Pulumi registry
		DisplayName: "prowlarr",
		// The default publisher for all packages is Pulumi.
		// Change this to your personal name (or a company name) that you
		// would like to be shown in the Pulumi Registry if this package is published
		// there.
		Publisher: "MaienM",
		// LogoURL is optional but useful to help identify your package in the Pulumi Registry
		// if this package is published there.
		//
		// You may host a logo on a domain you control or add an SVG logo for your package
		// in your repository and use the raw content URL for that file as your logo URL.
		LogoURL: "https://raw.githubusercontent.com/MaienM/pulumi-prowlarr/main/docs/prowlarr.png",
		// PluginDownloadURL is an optional URL used to download the Provider
		// for use in Pulumi programs
		// e.g https://github.com/org/pulumi-provider-name/releases/
		PluginDownloadURL: "github://api.github.com/MaienM/pulumi-prowlarr",
		Description:       "A Pulumi package for creating and managing a Prowlarr application.",
		// category/cloud tag helps with categorizing the package in the Pulumi Registry.
		// For all available categories, see `Keywords` in
		// https://www.pulumi.com/docs/guides/pulumi-packages/schema/#package.
		Keywords: []string{
			"pulumi",
			"prowlarr",
			"category/infrastructure",
		},
		License:    "Apache-2.0",
		Homepage:   "https://github.com/MaienM/pulumi-prowlarr",
		Repository: "https://github.com/MaienM/pulumi-prowlarr",
		// The GitHub Org for the provider - defaults to `terraform-providers`. Note that this
		// should match the TF provider module's require directive, not any replace directives.
		Version:      version.Version,
		GitHubOrg:    "devopsarr",
		MetadataInfo: tfbridge.NewProviderMetadata(bridgeMetadata),
		Config:       map[string]*tfbridge.SchemaInfo{},
		Resources: map[string]*tfbridge.ResourceInfo{
			"prowlarr_application":                {Tok: makeResource(modApplications, "prowlarr_application")},
			"prowlarr_application_lazy_librarian": {Tok: makeResource(modApplications, "prowlarr_application_lazy_librarian")},
			"prowlarr_application_lidarr":         {Tok: makeResource(modApplications, "prowlarr_application_lidarr")},
			"prowlarr_application_mylar":          {Tok: makeResource(modApplications, "prowlarr_application_mylar")},
			"prowlarr_application_radarr":         {Tok: makeResource(modApplications, "prowlarr_application_radarr")},
			"prowlarr_application_readarr":        {Tok: makeResource(modApplications, "prowlarr_application_readarr")},
			"prowlarr_application_sonarr":         {Tok: makeResource(modApplications, "prowlarr_application_sonarr")},
			"prowlarr_application_whisparr":       {Tok: makeResource(modApplications, "prowlarr_application_whisparr")},
			"prowlarr_sync_profile":               {Tok: makeResource(modApplications, "prowlarr_sync_profile")},

			"prowlarr_download_client":                          {Tok: makeResource(modDownloadClients, "prowlarr_download_client")},
			"prowlarr_download_client_aria2":                    {Tok: makeResource(modDownloadClients, "prowlarr_download_client_aria2")},
			"prowlarr_download_client_deluge":                   {Tok: makeResource(modDownloadClients, "prowlarr_download_client_deluge")},
			"prowlarr_download_client_flood":                    {Tok: makeResource(modDownloadClients, "prowlarr_download_client_flood")},
			"prowlarr_download_client_freebox":                  {Tok: makeResource(modDownloadClients, "prowlarr_download_client_freebox")},
			"prowlarr_download_client_hadouken":                 {Tok: makeResource(modDownloadClients, "prowlarr_download_client_hadouken")},
			"prowlarr_download_client_nzbget":                   {Tok: makeResource(modDownloadClients, "prowlarr_download_client_nzbget")},
			"prowlarr_download_client_nzbvortex":                {Tok: makeResource(modDownloadClients, "prowlarr_download_client_nzbvortex")},
			"prowlarr_download_client_pneumatic":                {Tok: makeResource(modDownloadClients, "prowlarr_download_client_pneumatic")},
			"prowlarr_download_client_qbittorrent":              {Tok: makeResource(modDownloadClients, "prowlarr_download_client_qbittorrent")},
			"prowlarr_download_client_rtorrent":                 {Tok: makeResource(modDownloadClients, "prowlarr_download_client_rtorrent")},
			"prowlarr_download_client_sabnzbd":                  {Tok: makeResource(modDownloadClients, "prowlarr_download_client_sabnzbd")},
			"prowlarr_download_client_torrent_blackhole":        {Tok: makeResource(modDownloadClients, "prowlarr_download_client_torrent_blackhole")},
			"prowlarr_download_client_torrent_download_station": {Tok: makeResource(modDownloadClients, "prowlarr_download_client_torrent_download_station")},
			"prowlarr_download_client_transmission":             {Tok: makeResource(modDownloadClients, "prowlarr_download_client_transmission")},
			"prowlarr_download_client_usenet_blackhole":         {Tok: makeResource(modDownloadClients, "prowlarr_download_client_usenet_blackhole")},
			"prowlarr_download_client_usenet_download_station":  {Tok: makeResource(modDownloadClients, "prowlarr_download_client_usenet_download_station")},
			"prowlarr_download_client_utorrent":                 {Tok: makeResource(modDownloadClients, "prowlarr_download_client_utorrent")},
			"prowlarr_download_client_vuze":                     {Tok: makeResource(modDownloadClients, "prowlarr_download_client_vuze")},

			"prowlarr_indexer": {Tok: makeResource(modIndexers, "prowlarr_indexer")},

			"prowlarr_indexer_proxy":              {Tok: makeResource(modIndexerProxies, "prowlarr_indexer_proxy")},
			"prowlarr_indexer_proxy_flaresolverr": {Tok: makeResource(modIndexerProxies, "prowlarr_indexer_proxy_flaresolverr")},
			"prowlarr_indexer_proxy_http":         {Tok: makeResource(modIndexerProxies, "prowlarr_indexer_proxy_http")},
			"prowlarr_indexer_proxy_socks4":       {Tok: makeResource(modIndexerProxies, "prowlarr_indexer_proxy_socks4")},
			"prowlarr_indexer_proxy_socks5":       {Tok: makeResource(modIndexerProxies, "prowlarr_indexer_proxy_socks5")},

			"prowlarr_notification":               {Tok: makeResource(modNotification, "prowlarr_notification")},
			"prowlarr_notification_apprise":       {Tok: makeResource(modNotification, "prowlarr_notification_apprise")},
			"prowlarr_notification_boxcar":        {Tok: makeResource(modNotification, "prowlarr_notification_boxcar")},
			"prowlarr_notification_custom_script": {Tok: makeResource(modNotification, "prowlarr_notification_custom_script")},
			"prowlarr_notification_discord":       {Tok: makeResource(modNotification, "prowlarr_notification_discord")},
			"prowlarr_notification_email":         {Tok: makeResource(modNotification, "prowlarr_notification_email")},
			"prowlarr_notification_gotify":        {Tok: makeResource(modNotification, "prowlarr_notification_gotify")},
			"prowlarr_notification_join":          {Tok: makeResource(modNotification, "prowlarr_notification_join")},
			"prowlarr_notification_mailgun":       {Tok: makeResource(modNotification, "prowlarr_notification_mailgun")},
			"prowlarr_notification_notifiarr":     {Tok: makeResource(modNotification, "prowlarr_notification_notifiarr")},
			"prowlarr_notification_ntfy":          {Tok: makeResource(modNotification, "prowlarr_notification_ntfy")},
			"prowlarr_notification_prowl":         {Tok: makeResource(modNotification, "prowlarr_notification_prowl")},
			"prowlarr_notification_pushbullet":    {Tok: makeResource(modNotification, "prowlarr_notification_pushbullet")},
			"prowlarr_notification_pushover":      {Tok: makeResource(modNotification, "prowlarr_notification_pushover")},
			"prowlarr_notification_sendgrid":      {Tok: makeResource(modNotification, "prowlarr_notification_sendgrid")},
			"prowlarr_notification_signal":        {Tok: makeResource(modNotification, "prowlarr_notification_signal")},
			"prowlarr_notification_simplepush":    {Tok: makeResource(modNotification, "prowlarr_notification_simplepush")},
			"prowlarr_notification_slack":         {Tok: makeResource(modNotification, "prowlarr_notification_slack")},
			"prowlarr_notification_telegram":      {Tok: makeResource(modNotification, "prowlarr_notification_telegram")},
			"prowlarr_notification_twitter":       {Tok: makeResource(modNotification, "prowlarr_notification_twitter")},
			"prowlarr_notification_webhook":       {Tok: makeResource(modNotification, "prowlarr_notification_webhook")},

			"prowlarr_tag": {Tok: makeResource(modTags, "prowlarr_tag")},
		},
		DataSources: map[string]*tfbridge.DataSourceInfo{
			"prowlarr_application":   {Tok: makeDataSource(modApplications, "prowlarr_application")},
			"prowlarr_applications":  {Tok: makeDataSource(modApplications, "prowlarr_applications")},
			"prowlarr_sync_profile":  {Tok: makeDataSource(modApplications, "prowlarr_sync_profile")},
			"prowlarr_sync_profiles": {Tok: makeDataSource(modApplications, "prowlarr_sync_profiles")},

			"prowlarr_download_client":  {Tok: makeDataSource(modDownloadClients, "prowlarr_download_client")},
			"prowlarr_download_clients": {Tok: makeDataSource(modDownloadClients, "prowlarr_download_clients")},

			"prowlarr_indexer_proxies": {Tok: makeDataSource(modIndexerProxies, "prowlarr_indexer_proxies")},
			"prowlarr_indexer_proxy":   {Tok: makeDataSource(modIndexerProxies, "prowlarr_indexer_proxy")},

			"prowlarr_indexer":         {Tok: makeDataSource(modIndexers, "prowlarr_indexer")},
			"prowlarr_indexers":        {Tok: makeDataSource(modIndexers, "prowlarr_indexers")},
			"prowlarr_indexer_schema":  {Tok: makeDataSource(modIndexers, "prowlarr_indexer_schema")},
			"prowlarr_indexer_schemas": {Tok: makeDataSource(modIndexers, "prowlarr_indexer_schemas")},

			"prowlarr_notification":  {Tok: makeDataSource(modNotification, "prowlarr_notification")},
			"prowlarr_notifications": {Tok: makeDataSource(modNotification, "prowlarr_notifications")},

			"prowlarr_system_status": {Tok: makeDataSource(modStatus, "prowlarr_system_status")},

			"prowlarr_tag":          {Tok: makeDataSource(modTags, "prowlarr_tag")},
			"prowlarr_tag_details":  {Tok: makeDataSource(modTags, "prowlarr_tag_details")},
			"prowlarr_tags":         {Tok: makeDataSource(modTags, "prowlarr_tags")},
			"prowlarr_tags_details": {Tok: makeDataSource(modTags, "prowlarr_tags_details")},
		},
		JavaScript: &tfbridge.JavaScriptInfo{
			PackageName: "@maienm/pulumi-prowlarr",

			// List any npm dependencies and their versions
			Dependencies: map[string]string{
				"@pulumi/pulumi": "^3.0.0",
			},
			DevDependencies: map[string]string{
				"@types/node": "^10.0.0", // so we can access strongly typed node definitions.
				"@types/mime": "^2.0.0",
			},
			// See the documentation for tfbridge.OverlayInfo for how to lay out this
			// section, or refer to the AWS provider. Delete this section if there are
			// no overlay files.
			//Overlay: &tfbridge.OverlayInfo{},
		},
		Python: &tfbridge.PythonInfo{
			PackageName: "pulumi_prowlarr",

			// List any Python dependencies and their version ranges
			Requires: map[string]string{
				"pulumi": ">=3.0.0,<4.0.0",
			},
		},
		Golang: &tfbridge.GolangInfo{
			ImportBasePath: filepath.Join(
				fmt.Sprintf("github.com/MaienM/pulumi-%[1]s/sdk/", "prowlarr"),
				tfbridge.GetModuleMajorVersion(version.Version),
				"go",
				"prowlarr",
			),
			GenerateResourceContainerTypes: true,
		},
		CSharp: &tfbridge.CSharpInfo{
			RootNamespace: "MaienM",

			PackageReferences: map[string]string{
				"Pulumi": "3.*",
			},
		},
		Java: &tfbridge.JavaInfo{
			BasePackage: "com.maienm",
		},
	}
}
