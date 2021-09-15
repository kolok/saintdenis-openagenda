if (self.CavalryLogger) { CavalryLogger.start_js(["t0fWHkj"]); }

__d("CometModernHomeFeedQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4880147562001216",metadata:{},name:"CometModernHomeFeedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometClassicHomeLeftRailContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4155515914537910",metadata:{},name:"CometClassicHomeLeftRailContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometHomeContactGroupsContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4724975894185258",metadata:{},name:"CometHomeContactGroupsContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometHomeContactsContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"6598200156921223",metadata:{},name:"CometHomeContactsContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometRightSideHeaderCardsQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4217255185060126",metadata:{},name:"CometRightSideHeaderCardsQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometFeedInlineComposerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4227743393973062",metadata:{},name:"CometFeedInlineComposerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("VideoChatHomeContainerCometNoDDDQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4365642026808014",metadata:{},name:"VideoChatHomeContainerCometNoDDDQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometNotificationsRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4970425159640406",metadata:{},name:"CometNotificationsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometMegaphoneRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4160707457317232",metadata:{},name:"CometMegaphoneRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("StoriesTrayRectangularRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"6258264294191204",metadata:{},name:"StoriesTrayRectangularRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("getCometFeedVariablesForSk",["WebConnectionClassServerGuess","WebPixelRatio","gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,e,f){f===void 0&&(f=[]);var g=c("gkx")("869481"),h=b==="favorites"&&c("gkx")("1386487");a=a===10;return{RELAY_INCREMENTAL_DELIVERY:g,UFI2CommentsProvider_commentsKey:"CometModernHomeFeedQuery",connectionClass:c("WebConnectionClassServerGuess").connectionClass,feedLocation:"NEWSFEED",feedStyle:a?"SEEN_FEED":h?"FAVORITES_FEED":"DEFAULT",feedbackSource:1,orderby:h?[]:b==="h_chr"?["MOST_RECENT"]:["TOP_STORIES"],privacySelectorRenderLocation:"COMET_STREAM",recentVPVs:f,refreshMode:e?"MANUAL":null,renderLocation:"homepage_stream",scale:d("WebPixelRatio").get(),useDefaultActor:!1}}g["default"]=a}),98);
__d("CometHomeRoot.entrypoint",["CometClassicHomeLeftRailContainerQuery$Parameters","CometFeedInlineComposerQuery$Parameters","CometHomeContactGroupsContainerQuery$Parameters","CometHomeContactsConfig","CometHomeContactsContainerQuery$Parameters","CometMegaphoneRootQuery$Parameters","CometModernHomeFeedQuery$Parameters","CometRightSideHeaderCardsQuery$Parameters","JSResourceForInteraction","StoriesTrayRectangularRootQuery$Parameters","WebPixelRatio","cr:1714513","cr:1917816","getCometFeedVariablesForSk","gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";b("cr:1714513");a={getPreloadProps:function(a){var e=a.routeParams.sk;a=a.routeProps.feedStyle;a=c("getCometFeedVariablesForSk")(a,e,!1);e=e==="favorites"&&c("gkx")("1386487")&&!c("gkx")("523");var f=c("qex")._("51")!==!0;a={feedInlineComposerQueryReference:{environmentProviderOptions:{ssrBoundary:"composer"},parameters:c("CometFeedInlineComposerQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}},feedQueryReference:{environmentProviderOptions:{ssrBoundary:"feed"},parameters:c("CometModernHomeFeedQuery$Parameters"),variables:a},homeContactGroupsQueryReference:{environmentProviderOptions:{ssrBoundary:"rhc"},parameters:c("CometHomeContactGroupsContainerQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}},homeContactsQueryReference:{environmentProviderOptions:{ssrBoundary:"rhc"},parameters:c("CometHomeContactsContainerQuery$Parameters"),variables:{numContactsToFetch:c("CometHomeContactsConfig").numContactsToFetch,scale:d("WebPixelRatio").get(),shouldEnableMWStoriesEntrypoint:c("gkx")("1148")}},leftRailContainerQueryReference:{environmentProviderOptions:{ssrBoundary:"left_rail"},parameters:c("CometClassicHomeLeftRailContainerQuery$Parameters"),variables:{numExploreBookmarks:c("gkx")("2029639")?10:9,scale:d("WebPixelRatio").get(),shouldNotRenderCommunitiesSection:f,skipFetchingUnreadCount:c("gkx")("2252")}},megaphoneQueryReference:{environmentProviderOptions:{ssrBoundary:"composer"},parameters:c("CometMegaphoneRootQuery$Parameters"),variables:{first:1,scale:d("WebPixelRatio").get()}},rightSideHeaderCardsQueryReference:{environmentProviderOptions:{ssrBoundary:"rhc"},options:{fetchPolicy:"network-only"},parameters:c("CometRightSideHeaderCardsQuery$Parameters"),variables:{refresh_num:0,scale:d("WebPixelRatio").get()}}};if(!e){var g;f=7;e=(e=c("qex")._("793"))!=null?e:!1;g=(g=c("qex")._("131"))!=null?g:!1;if(c("qex")._("2005420"))g?f=e?5:6:f=e?10:12;else{f=c("qex")._("60")||e?6:(g=c("qex")._("796"))!=null?g:7}a=babelHelpers["extends"]({},a,{storiesTrayQueryReference:{environmentProviderOptions:{ssrBoundary:"stories"},parameters:c("StoriesTrayRectangularRootQuery$Parameters"),variables:{blur:d("WebPixelRatio").get()*10,bucketsToFetch:f,scale:d("WebPixelRatio").get(),shouldEnableLiveInStoriesDropdown:(e=c("qex")._("545"))!=null?e:!1,shouldEnableVideoAutoplay:((g=c("qex")._("188"))!=null?g:!1)||c("gkx")("2501"),shouldPrefetchProfilePic:c("gkx")("2029255")}}})}c("gkx")("1363069")&&(a=babelHelpers["extends"]({},a,{joinableVideoChatsQueryReference:{environmentProviderOptions:{ssrBoundary:"composer"},parameters:b("cr:1917816"),variables:{scale:d("WebPixelRatio").get()}}}));return{queries:a}},root:c("JSResourceForInteraction")("CometHomeRoot.react").__setRef("CometHomeRoot.entrypoint")};e=a;g["default"]=e}),98);
__d("CometHomeRootBEOneAhead",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";c("JSResourceForInteraction")("CometHomeRoot.react").__setRef("CometHomeRootBEOneAhead");a=null;g["default"]=a}),98);
__d("CometNotificationsRoot.entrypoint",["CometNotificationsRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a={count:15,environment:"MAIN_SURFACE",menuUseEntryPoint:c("gkx")("146"),scale:d("WebPixelRatio").get()};return{queries:{notificationsRootQueryReference:{parameters:b("CometNotificationsRootQuery$Parameters"),variables:a}}}},root:c("JSResourceForInteraction")("CometNotificationsRoot.react").__setRef("CometNotificationsRoot.entrypoint")};g["default"]=a}),98);
__d("CometSSRServerJSPayloadUtils",["ErrorGuard","HasteSupportData","ServerJS"],(function(a,b,c,d,e,f,g){"use strict";var h="";function a(a){d("HasteSupportData").handle(a.hsdp);c("ErrorGuard").skipGuardGlobal(!0);new(c("ServerJS"))().handle(a.jsmods);return h}function e(c,d,e){var a;typeof c==="string"?a=b.call(null,c):a=c;c=a[d].apply(a,e);c===void 0&&(c="");h=JSON.stringify(c)}g.handlePayload=a;g.invokeAndCaptureReturnValue=e}),98);