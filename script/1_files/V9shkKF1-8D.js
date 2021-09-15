if (self.CavalryLogger) { CavalryLogger.start_js(["To\/o0G1"]); }

__d("ProfileCometCoverPhotoUpdateMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"contextualProfileContext"},b={defaultValue:null,kind:"LocalArgument",name:"input"},c={defaultValue:null,kind:"LocalArgument",name:"scale"},d=[{kind:"Variable",name:"data",variableName:"input"}],e=[{kind:"Variable",name:"contextualProfileContext",variableName:"contextualProfileContext"}],f={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},g=[{kind:"Variable",name:"contextual_profile_context",variableName:"contextualProfileContext"}],h={alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"focus",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},j={kind:"Variable",name:"scale",variableName:"scale"},k={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},n=[k,l,m],o={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:[a,b,c],kind:"Fragment",metadata:null,name:"ProfileCometCoverPhotoUpdateMutation",selections:[{alias:null,args:d,concreteType:"UserUpdateCoverPhotoResponsePayload",kind:"LinkedField",name:"user_update_cover_photo",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometCoverPhoto_user"},{args:e,kind:"FragmentSpread",name:"ProfileCometCoverPhoto_renderedProfile"},{args:e,kind:"FragmentSpread",name:"ProfileCometSingleEditCoverPhoto_user"}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometSettingsDropdownHeader_viewer"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[b,c,a],kind:"Operation",name:"ProfileCometCoverPhotoUpdateMutation",selections:[{alias:null,args:d,concreteType:"UserUpdateCoverPhotoResponsePayload",kind:"LinkedField",name:"user_update_cover_photo",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[f,{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_friend",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:g,concreteType:"FocusedPhoto",kind:"LinkedField",name:"cover_photo",plural:!1,selections:[h,{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[i,{alias:null,args:[j],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:n,storageKey:null},{alias:"viewer_image",args:[{kind:"Literal",name:"context",value:"comet_media_viewer"},{kind:"Literal",name:"height",value:1e6},j,{kind:"Literal",name:"width",value:1e6}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[m,l],storageKey:null},{alias:null,args:[{kind:"Literal",name:"supported",value:["XFBCometImmersive360PhotoRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_photo_renderer",plural:!1,selections:[o,{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometCoverPhoto_renderedProfile_photo_renderer",fragmentName:"CometRemote360PhotoViewerRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCometImmersive360PhotoRenderer",abstractKey:null}],storageKey:'comet_photo_renderer(supported:["XFBCometImmersive360PhotoRenderer"])'},{alias:"blurred_image",args:[{kind:"Literal",name:"blur",value:50},{kind:"Literal",name:"width",value:320}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:n,storageKey:"image(blur:50,width:320)"},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}],storageKey:null},{alias:"single_edit_cover_photo",args:g,concreteType:"FocusedPhoto",kind:"LinkedField",name:"cover_photo",plural:!1,selections:[h,{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[{alias:"single_edit_image",args:[j,{kind:"Literal",name:"width",value:500}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:n,storageKey:null},i],storageKey:null}],storageKey:null}],type:"RenderedProfile",abstractKey:"__isRenderedProfile"},i],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[o,f,{alias:"settings_dropdown_profile_picture",args:[{kind:"Literal",name:"height",value:60},j,{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[k],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"should_use_page_rename",storageKey:null},{alias:"profileSwitcherEligibleProfiles",args:null,concreteType:"UserProfileSwitcherEligibleProfilesConnection",kind:"LinkedField",name:"profile_switcher_eligible_profiles",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},i],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"4626491967365160",metadata:{},name:"ProfileCometCoverPhotoUpdateMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometEntityHeaderCoverActionBar.react",["fbt","CometTheme.react","TetraButtonGroup.react","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={description:{display:"j83agx80",flexGrow:"buofh1pr"},root:{display:"j83agx80",paddingBottom:"f10w8fjw",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a",paddingTop:"pybr56ya"}};function a(a){var b=a.cancelLabel,d=a.confirmLabel,e=a.description,f=a.disabled;f=f===void 0?!1:f;var g=a.onCancel;a=a.onConfirm;return i.jsxs(c("CometTheme.react"),{theme:"dark",xstyle:j.root,children:[i.jsx("div",{className:c("stylex")(j.description),children:e}),i.jsx(c("TetraButtonGroup.react"),{direction:"backward",paddingHorizontal:0,paddingTop:0,primary:{disabled:f,label:(e=d)!=null?e:h._("Confirmer"),onPress:a,padding:"wide",testid:"CometEntityHeaderCoverActionBarConfirmButton",type:"primary"},secondary:{disabled:f,label:(d=b)!=null?d:h._("Annuler"),onPress:g,testid:"CometEntityHeaderCoverActionBarCancelButton"}})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometScrollTo.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");c=d("react");var i=c.useEffect,j=c.useRef;function b(b){var c=b.children,d=b.enabled,e=b.offset,f=e===void 0?0:e,g=b.scrollKey,k=j(null),l=j(null);i(function(){var b=l.current;l.current=g;if(g!=null&&g===b)return;if(d&&k.current!=null){var c=k.current.offsetTop,e=a.requestAnimationFrame(function(){return a.scrollTo(a.pageXOffset,c+f)});return function(){a.cancelAnimationFrame(e)}}},[d,g,f]);return h.jsx("div",{ref:k,children:c})}b.displayName=b.name+" [from "+f.id+"]";g["default"]=b}),98);
__d("PageAdminCompletionMeterActionType",[],(function(a,b,c,d,e,f){a=Object.freeze({ADD_COVER_PHOTO:"add_cover_photo",ADD_DESCRIPTION:"add_description",ADD_HOURS:"add_hours",ADD_LOCATION:"add_location",ADD_MENU_TAB:"add_menu_tab",ADD_MESSAGING_PREFERENCE:"add_messaging_preference",ADD_PAGE_BUTTON:"add_page_button",ADD_PHONE_NUMBER:"add_phone_number",ADD_PROFILE_PICTURE:"add_profile_picture",ADD_SERVICE:"add_service",ADD_WEBSITE:"add_website",ADD_WIFI:"add_wifi",CHOOSE_CATEGORY:"choose_category",CONFIRM_BUSINESS_ACCOUNT:"confirm_business_account",CONNECT_INSTAGRAM:"connect_instagram",CREATE_AD:"create_ad",CREATE_AUTOMATED_ADS:"create_automated_ads",CREATE_FACEBOOK_SHOP:"create_facebook_shop",CREATE_PAGE_NAME:"create_page_name",CREATE_POST:"create_post",CREATE_STORY:"create_story",CREATE_VIDEO_POST:"create_video_post",CREATE_WELCOME_POST:"create_welcome_post",ENABLE_AD_RECOMMENDATIONS:"enable_ad_recommendations",ENABLE_AUTOMATED_REPLIES:"enable_automated_replies",INVITE_FRIENDS_TO_LIKE:"invite_friends_to_like",POST_JOB:"post_job",SAVE_MENU_QR:"save_menu_qr",SCHEDULING_POST:"scheduling_post"});f["default"]=a}),66);
__d("PageAdminCompletionMeterStatus",[],(function(a,b,c,d,e,f){a=Object.freeze({COMPLETED:"completed",INCOMPLETE:"incomplete",NOT_APPLICABLE:"not_applicable",SAVED_FOR_LATER:"saved_for_later",SKIPPED:"skipped"});f["default"]=a}),66);
__d("PagesCometAdminCompletionMeterUtils",["PageAdminCompletionMeterActionType","PageAdminCompletionMeterStatus","firstKeyWithValue","getJSEnumSafe","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=(f={},f.incomplete=1,f.saved_for_later=2,f.completed=3,f.not_applicable=4,f.skipped=5,f);function i(a,b){return a+"-"+b}function j(a,b,d){a=a.get(b);if(a==null)return;a.setValue(c("firstKeyWithValue")(c("PageAdminCompletionMeterStatus"),d),"status")}function a(a){return a!=="incomplete"&&a!=="saved_for_later"}function k(a,b){var c=b.actionType,d=b.newStatus;b=b.pageID;b=i(b,c);j(a,b,d)}function b(a,b){var c=b.actionType,d=b.isComplete;b=b.pageID;d=d?"completed":"incomplete";k(a,{actionType:c,newStatus:d,pageID:b})}function d(a,b,d,e){b=a!=null?b.get(a):null;if(b==null||a==null)throw c("unrecoverableViolation")("Item must have a status and action type","page_admin_completion_meter");var f=function(){return e(a)};return{key:a,pageID:d,setSavedForLater:f,status:b}}function e(a,b){a=c("getJSEnumSafe")(c("PageAdminCompletionMeterActionType"),a);b=a!=null?b.get(a):null;return b!=null?h[b]:0}g.getPCMItemID=i;g.localItemStatusUpdater=j;g.isCompletedStatus=a;g.updateStatusForItemType=k;g.updateStatusToCompleteOrIncomplete=b;g.getCommonsProps=d;g.getItemStatusOrder=e}),98);
__d("ProfileCometCoverPhotoEditStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";b=h._("Albums");c=h._("Annuler");d=h._("Mettre \u00e0 jour la photo de couverture");e=h._("Albums photos");f=h._("Votre photo de couverture est publique.");var i=h._("Photos r\u00e9centes"),j=h._("Vid\u00e9os r\u00e9centes"),k=h._("Supprimer"),l=h._("Voulez-vous vraiment supprimer votre photo de couverture\u00a0?"),m=h._("Annuler"),n=h._("Confirmer"),o=h._("Supprimer la photo de couverture"),p=h._("Repositionner"),q=h._("Enregistrer les modifications"),r=h._("Enregistrer"),s=h._("Impossible de mettre \u00e0 jour la photo de couverture"),t=h._("Impossible de modifier la couverture"),u=h._("S\u00e9lectionner une photo"),v=h._("Illustration d\u2019un homme et d\u2019une femme qui tient une bo\u00eete ouverte tandis qu\u2019ils rangent des affaires"),w=h._("Une illustration de six personnes et un chien autour d\u2019un feu de camp"),x=h._("Une illustration de parents dont une femme enceinte, un homme avec un b\u00e9b\u00e9, et une femme avec ses deux jeunes enfants"),y=h._("Une illustration de personnes en train de s\u2019entra\u00eener \u00e0 la salle de sport"),z=h._("Une de quatre musiciens qui jouent ensemble sur une sc\u00e8ne en ext\u00e9rieur"),A=h._("S\u00e9lectionner une photo ou une vid\u00e9o"),B=h._("S\u00e9lectionner la vid\u00e9o"),C=h._("Importer une photo");function a(a){return h._({"*":"{number} importations","_1":"1 importation"},[h._plural(a,"number")])}g.ALBUMS=b;g.CANCEL=c;g.DIALOG_TITLE=d;g.PHOTO_ALBUMS=e;g.PRIVACY_DISCLAIMER=f;g.RECENT_PHOTOS=i;g.RECENT_VIDEOS=j;g.REMOVE=k;g.REMOVE_DIALOG_BODY=l;g.REMOVE_DIALOG_CANCEL=m;g.REMOVE_DIALOG_CONFIRM=n;g.REMOVE_DIALOG_TITLE=o;g.REPOSITION=p;g.REPOSITION_SAVE=q;g.SAVE=r;g.SAVE_FAILED=s;g.SAVE_FAILED_DEFAULT=t;g.SELECT_PHOTO=u;g.SELECT_ILLUSTRATION_0=v;g.SELECT_ILLUSTRATION_1=w;g.SELECT_ILLUSTRATION_2=x;g.SELECT_ILLUSTRATION_3=y;g.SELECT_ILLUSTRATION_4=z;g.SELECT_PHOTO_OR_VIDEO=A;g.SELECT_VIDEO=B;g.UPLOAD_PHOTO=C;g.getItemCount=a}),98);
__d("ProfileCometCoverPhotoUpdateMutation",["CometRelay","PagesCometAdminCompletionMeterUtils","ProfileCometCoverPhotoUpdateMutation.graphql","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("ProfileCometCoverPhotoUpdateMutation.graphql");function a(a,b,c){var e=b.contextualProfileContext,f=b.focusX,g=b.focusY,h=b.photoID,j=b.profileID;d("CometRelay").commitMutation(a,babelHelpers["extends"]({mutation:i,updater:function(a){d("PagesCometAdminCompletionMeterUtils").updateStatusToCompleteOrIncomplete(a,{actionType:"add_cover_photo",isComplete:!0,pageID:j})},variables:{contextualProfileContext:e,input:{contextual_profile_context:e,cover_photo_id:h,focus:{x:f,y:g},target_user_id:j},scale:d("WebPixelRatio").get()}},c))}g.updateCoverPhoto=a}),98);
__d("ProfileCometCoverPhotoRepositioner.react",["ix","CometEntityHeaderCoverActionBar.react","CometEntityHeaderCoverMedia.react","CometRelay","ProfileCometContext","ProfileCometCoverPhotoEditContext","ProfileCometCoverPhotoEditStrings","ProfileCometCoverPhotoUpdateMutation","TetraIcon.react","TetraText.react","fbicon","logCometFunnelEvent","react","useProfileCometErrorDialog_DEPRECATED"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useContext,l=b.useRef,m=b.useState;function a(){var a;d("logCometFunnelEvent").useLogCometFunnelImpressionEvent("ProfileCometTimelineWebFunnelDefinition","[impression][cover photo][reposition]");var b=d("CometRelay").useRelayEnvironment(),e=k(c("ProfileCometCoverPhotoEditContext")),f=e.dispatch;e=e.state;var g=e.coverPhoto;e=k(c("ProfileCometContext"));var n=e.profileID;e=c("useProfileCometErrorDialog_DEPRECATED")(d("ProfileCometCoverPhotoEditStrings").SAVE_FAILED);var o=e[0];e=m(!1);var p=e[0],q=e[1];e=m({x:(e=g==null?void 0:g.focusX)!=null?e:.5,y:(e=g==null?void 0:g.focusY)!=null?e:.5});var r=e[0],s=e[1],t=l({x:(e=g==null?void 0:g.focusX)!=null?e:.5,y:(e=g==null?void 0:g.focusY)!=null?e:.5});e=j(function(a,b){t.current.x=a,t.current.y=b},[]);var u=j(function(){d("logCometFunnelEvent").logCometFunnelEvent("ProfileCometTimelineWebFunnelDefinition","[action][cover photo][reposition cancel]"),f({type:"REPOSITION_CANCEL"})},[f]),v=j(function(){var a;s(babelHelpers["extends"]({},t.current));q(!0);d("ProfileCometCoverPhotoUpdateMutation").updateCoverPhoto(b,{focusX:t.current.x,focusY:t.current.y,photoID:(a=g==null?void 0:g.id)!=null?a:"",profileID:n},{onCompleted:function(){d("logCometFunnelEvent").logCometFunnelEvent("ProfileCometTimelineWebFunnelDefinition","[action][cover photo][save success]"),f({type:"REPOSITION_CANCEL"})},onError:function(a){d("logCometFunnelEvent").logCometFunnelEvent("ProfileCometTimelineWebFunnelDefinition","[action][cover photo][save error]",{actionPayload:{error:a.description}}),a.message.includes("1341010")||o(a),f({type:"REPOSITION_CANCEL"})}})},[g,f,b,n,o]);return i.jsx(c("CometEntityHeaderCoverMedia.react"),{backgroundMedia:{focusX:r.x,focusY:r.y,height:(a=g==null?void 0:g.height)!=null?a:0,uri:(a=g==null?void 0:g.blurredURI)!=null?a:"",width:(a=g==null?void 0:g.width)!=null?a:0},coverActionBar:i.jsx(c("CometEntityHeaderCoverActionBar.react"),{confirmLabel:d("ProfileCometCoverPhotoEditStrings").REPOSITION_SAVE,description:i.jsxs("div",{className:"j83agx80 bp9cbjyn",children:[i.jsx("div",{className:"tvfksri0 j83agx80",children:i.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(h("560120"),20)})}),i.jsx(c("TetraText.react"),{color:"white",type:"headline4",children:d("ProfileCometCoverPhotoEditStrings").PRIVACY_DISCLAIMER})]}),disabled:p,onCancel:u,onConfirm:v}),coverMedia:{focusX:r.x,focusY:r.y,height:(a=g==null?void 0:g.height)!=null?a:0,mediaSource:(u=g==null?void 0:g.uri)!=null?u:"",width:(v=g==null?void 0:g.width)!=null?v:0},isDraggable:!p,onDrag:e,roundCorners:"bottom"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfilishCometCoverPhotoLoadingOverlay.react",["CometProgressIndicator.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={loadingOverlay:{backgroundColor:"hybvsw6c",display:"j83agx80",justifyContent:"taijpn5t",opacity:"ocubwz8y",position:"pmk7jnqg",width:"ina5je9e"},loadingSpinner:{position:"pmk7jnqg",top:"xz3nz3eg"},loadingSpinnerPages:{end:"r4d01lfu",position:"pmk7jnqg",top:"rk01pc8j"}};function a(a){var b=a.height,d=a.profilePhotoPosition;d=d===void 0?"center":d;a=a.xstyle;return h.jsx("div",{className:c("stylex")(i.loadingOverlay,a),style:{height:b},children:d==="start"?h.jsx("div",{className:c("stylex")(i.loadingSpinnerPages),children:h.jsx(c("CometProgressIndicator.react"),{})}):h.jsx("div",{className:c("stylex")(i.loadingSpinner),children:h.jsx(c("CometProgressIndicator.react"),{})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);