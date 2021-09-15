f = open("1.html", "r")
string = f.read()
string = '{"id":"216905257044778","name":"LA NUIT DES ROIS - Avant-premi\u00e8re\/Rencontre avec Philipe Lac\u00f4te, Laetitia Ky et Steve Tientcheu","is_canceled":false,"cover_media_renderer":{"__typename":"EventCoverPhotoRenderer","cover_photo":{"photo":{"image":{"uri":"https:\/\/scontent-cdg2-1.xx.fbcdn.net\/v\/t39.30808-6\/s261x260\/239915453_10159682678481926_5478282605366784206_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=340051&_nc_ohc=kRG0yMJXehsAX_qvaM4&_nc_ht=scontent-cdg2-1.xx&oh=8d3c5dd6fb79b43b43697ad88ce78616&oe=613AA03C"},"id":"10159682678471926"}},"__module_operation_EventCometItemImage_event":{"__dr":"EventCometItemPhotoRenderer_coverMedia$normalization.graphql"},"__module_component_EventCometItemImage_event":{"__dr":"EventCometItemPhotoRenderer.react"}},"discovery_categories":[],"event_connected_users":{"count":0,"edges":[]},"social_context":{"text":""},"start_date":"MAR. 7 SEPT.","start_time":"20:30 UTC+02"}},{"node":{"id":"844263706480009","name":"l\'Exposition - BAF BAF","is_canceled":false,"cover_media_renderer":{"__typename":"EventCoverPhotoRenderer","cover_photo":{"photo":{"image":{"uri":"https:\/\/scontent-cdg2-1.xx.fbcdn.net\/v\/t1.6435-9\/p118x118\/237694170_122993883399080_5390247853273945814_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=340051&_nc_ohc=jajN-Me-9xcAX_0z62P&_nc_ht=scontent-cdg2-1.xx&oh=77e7fe213a046687e355f637acc15d85&oe=615A8BFF"},"id":"122993876732414"}},"__module_operation_EventCometItemImage_event":{"__dr":"EventCometItemPhotoRenderer_coverMedia$normalization.graphql"},"__module_component_EventCometItemImage_event":{"__dr":"EventCometItemPhotoRenderer.react"}},"discovery_categories":[{"glyph_token":"arts"}],"event_connected_users":{"count":0,"edges":[]},"social_context":{"text":""},"start_date":"JEU. 9 SEPT.","start_time":"18:00 UTC+02"}},{"node":{"id":"383293466307628","name":"[ANNUL\u00c9] - We Love Green 2021","is_canceled":false,"cover_media_renderer":{"__typename":"EventCoverPhotoRenderer","cover_photo":{"photo":{"image":{"uri":"https:\/\/scontent-cdt1-1.xx.fbcdn.net\/v\/t1.6435-9\/s228x119\/238604869_4682845548403776_5386146334565692750_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=340051&_nc_ohc=Yb8Dtkzz6UsAX-PSn7I&_nc_ht=scontent-cdt1-1.xx&oh=460148148fac24d62aa1111cb19ea599&oe=615B0A5B"},"id":"4682845545070443"}},"__module_operation_EventCometItemImage_event":{"__dr":"EventCometItemPhotoRenderer_coverMedia$normalization.graphql"},"__module_component_EventCometItemImage_event":{"__dr":"EventCometItemPhotoRenderer.react"}},"discovery_categories":[],"event_connected_users":{"count":1,"edges":[{"node":{"__typename":"User","profile_picture":{"uri":"https:\/\/scontent-cdg2-1.xx.fbcdn.net\/v\/t1.6435-1\/cp0\/c0.5.48.48a\/p48x48\/209419412_948578605943004_2335105296707939066_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=PcBDCwO1NmEAX_rBNdf&_nc_ht=scontent-cdg2-1.xx&oh=5da343545958232a4235893ca757317b&oe=615B9E64"},"id":"100023726212384"}}]},"social_context":{"text":"Caroline"},"start_date":"VEN. 10 SEPT.","start_time":"13:00 UTC+02"}}]}}}}}},"extensions":{"is_final":true}},"sequence_number":0,"variables":{"eventID":"216905257044778","scale":2},"extra_context":null}}]],["RequireDeferredReference\u004087d1c406fe8d0a670bbe6d3547651c66","unblock",[],[["EventCometItemPhotoRenderer_coverMedia$normalization.graphql","EventCometItemPhotoRenderer.react"],"sd"]],["RequireDeferredReference\u004087d1c406fe8d0a670bbe6d3547651c66","unblock",[],[["EventCometItemPhotoRenderer_coverMedia$normalization.graphql","EventCometItemPhotoRenderer.react"],"css"]]]});});});'
pattern = '"id":"216905257044778"'

l = len(string)
print(f'length : {l}')

index = 0
while index >= 0:
	index = string.find(pattern, index+1)
	min_index = index
	while string[min_index] != '{':
		min_index = min_index - 1
	max_index  = index + 1
	nb_open = 1
	print(f'EXTRACT = {string[index-25:index+50]}')
	while nb_open > 0:
		if string[max_index] == '}':
			nb_open -= 1
		if string[max_index] == '{':
			nb_open += 1
		max_index = max_index + 1
	print(string[min_index:max_index+1])

