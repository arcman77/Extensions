[{"Owner":"JohnK","Date":"2017-05-19T20:49:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTrying to help this topic\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/30522-newbie-questionhow-to-generate-floor-plan-with-shape-points-and-apply-textrue-images/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tThe problem is scaling texture on the caps of an extrusion.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat is needed is something like this on the caps\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_tile.jpg.ebd5a9adf53303cf6d82288df361592c.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13081_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/tile.jpg.ebd5a9adf53303cf6d82288df361592c.jpg_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\twhat I get is\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TF811Y%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TF811Y#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tany suggestions\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-05-20T03:24:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou most correct the uv \n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut we have  shader Builder solution \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TF811Y%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TF811Y#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-05-20T08:16:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ magic_lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-05-20T08:23:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ Sorry to be pinging you twice in a couple of days but I am trying to solve this issue for a newbie_co_ lhx880619 (see first post) and have NasimiAsl_t_s brilliant magic solution but was wondering if a muggle solution was better for lhx880619. Do you have one?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-05-20T08:25:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou can set your uv when you wanna crate extrude face (in face top and bottom )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou notic just vertex position (x and z ) and calculate uv with that uv.x _eq_ position.x and uv.y _eq_ position.z\n_lt_/p_gt_\n\n_lt_p_gt_\n\t* need change Extrude geometry maker function\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-05-20T08:42:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_I think both your solutions are amazing and if it was my problem I would use your shaderBuilder solution. However this newbie_co_ lhx880619_co_ is trying to transition from three.js where he can do what he needs in three simple code lines so I do not think he is ready for delving into vertexData.  However it looks like the only way would be a re-write of the extrusion cap code so perhaps there is not a simple way. I will show lhx880619 your solution and see what he says.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-05-20T12:51:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmmmh... currently the cap the computed from the model shape barycenter what is fast (especially when the mesh is dynamically morphed) but doesn_t_t fit the needs for people just wanting a fixed mesh and more versatility in the cap management.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis means I will have to implement something like a staticCap feature_co_ a cap computed from a triangulation algo with some predictible positions_co_ so uvs_co_ if possible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor now_co_  the capping algo can_t_t do this unfortunately. The best choices are either to use the powerful shaderBuilder_co_ either to design your own cap from a mesh appart_co_ then to merge it to a un-capped extrusion\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-05-20T14:24:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWingnut has a dumb idea_co_ as usual.  Use a decal.  Unfortunately_co_ decals are not really dynamically updatable_co_ and they are square/rect-only_co_ at this point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf a decal could be shaped by the shape data of an extrudeShape_co_ we might have a chance.  But decals are a clipping festival _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.meshBuilder.ts#L928_qt_ rel_eq__qt_external nofollow_qt__gt_inside their code_lt_/a_gt__co_ and I_t_m not sure if they can handle being ANY shape with ANY number of shape-points.  They would HAVE TO match shape and size perfectly_co_ or else they might wrap onto sides of mesh_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJohn... this reminds us of Neshville_co_ again_co_ eh?  (No_co_ NOT the country music town in Tennessee USA). Nesh 108. Overhead cam_co_ black background_co_ screen-grab RTT frame_co_ send it thru Nesh_t_s image thickener_co_ use as cap.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t[Wingy slides a _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1Z89KY%2310_qt_ rel_eq__qt_external nofollow_qt__gt_texture into the gel-frame_lt_/a_gt_ of a spotlight_co_ and tries to use this _qt_slide projector_qt_ to project an image onto a cap_co_ but then laughs at himself.   Then he accidentally stares into the spotlight and burns his retinas.]  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-05-28T13:29:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt__co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ as usual I miss the obvious and get tied in knots. There is a simple solution that I have used before and completely forgotten about and that is PolygonMeshBuilder. Mind you it is easily forgotten as the documentation is very little_co_ just the class. However I am working on this. Also working on a possible PR for MeshBuilder that includes MeshBuilder.CreatePolygon and MeshBuilder.ExtrudePolygon. Both will use PolygonMeshBuilder under the hood but will look more like the normal methods of building a mesh. Should a PR be OK then will of course do the documentation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPG using PolygonMeshBuilder is _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#PTTMVI_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#PTTMVI_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-05-28T18:44:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\ti think we need Wall and some stair stuff too\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-05-29T01:34:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  Yeah_co_ that_t_s a good idea... IF it can handle the birdData.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#165IV6%2336_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#165IV6#36_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe bird data FROM the polygonMeshBuilder demo... is the perfect demo data for capping tests... because of its _qt_back-bays_qt_ (like an overhead view of a lake with lots of bays).  There_t_s surely a more-tech-correct name for back-bays_co_ though.  heh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think... writing meshBuilder code that can _qt_cap the bird_qt_... is no small (bird) feat. If I were you_co_ I would keep a medical team nearby... while you work on this.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMeshBuilder.CreatePolygon + MeshBuilder.ExtrudePolygon _eq__eq_ ExtrudeShape_co_ yes?  *shrug*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt almost seems like it needs some kind of AI _qt_mesh crawler_qt_... so that the wagon-wheel-style cap.... can be avoided. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFolks might tend to say... in a knee-jerk reaction... _qt_Wingnut_co_ we_t_re talking about UV mapping on the cap_co_ not capping styles_qt_.  But those two subjects are intimately co-mingled (quite related)_co_ I think.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you can cap the bird (with re-usable code)_co_ John... it_t_s a steak dinner on me.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-05-29T08:45:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_176003_qt_ data-ipsquote-contentid_eq__qt_30542_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1496021669_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tMeshBuilder.CreatePolygon + MeshBuilder.ExtrudePolygon _eq__eq_ ExtrudeShape_co_ yes?  *shrug*\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNo quite_co_ MeshBuilder.ExtrudePolygon by itself will be a limited form of extrusion. ExtrudeShape allows you to do rotation and scaling along the extrusion path. ExtrudePolygon will only allow a linear extrusion normal to the polygon by a set depth_co_ currently no texture on _qt_bottom cap_qt_ (no drawing picture of a bottom cap please). ExtrudePolygon will not use ExtrudeShape but just another way of calling PolygonMeshBuilder with a depth parameter added. CreatePolygon will call PolygonMeshBuilder without a depth parameter.  The idea is if they look like the usual creation functions they might get more use but they are no more than a call to existing code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn meantime have added _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Documentation/blob/master/content/tutorials/02_Mid_Level/PolygonMeshBuilder.md_qt_ rel_eq__qt_external nofollow_qt__gt_PolygonMeshBuilder documentation_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHey Wingy am I getting close to the steak dinner _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1ZAXRO%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1ZAXRO#3_lt_/a_gt_ _lt_img alt_eq__qt__dd_blink_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_blink.png_qt_ title_eq__qt__dd_blink_dd__qt_ /_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT Texture on bottom was a lighting problem (adapting another PG and forgot to check lighting dhhh _lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt_) _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1ZAXRO%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1ZAXRO#5_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-05-29T11:19:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh man_co_ you got it_co_ JK!  Holy crap... well done.  Check out _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1ZAXRO%236_qt_ rel_eq__qt_external nofollow_qt__gt_the wireframe of that cap_lt_/a_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow the hell... hmm.  What a cap!  You_t_re a God_co_ John!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell shut my mouth wide open!  Coooooooooool.  It_t_s done with code_co_ right? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCongrats_co_ ya won_co_ and ya did it in short-order!  Amazing.  Drop me a PM with a PayPal-allowed email address or mailing address... whatever the best method for you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan your methods help Nesh108 do his thing... with less code?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-05-29T11:34:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI cannot really take the credit all I did was re-discover PolyMeshBuilder which uses the earcut function and as it says in babylon.max.js\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// All the credit goes to this project and the guy who_t_s behind it https_dd_//github.com/mapbox/earcut\n// Huge respect for a such great lib. \n// Earcut license_dd_\n// Copyright (c) 2016_co_ Mapbox_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tEarcut is the function that does all the hard work of_lt_a href_eq__qt_https_dd_//en.wikipedia.org/wiki/Polygon_triangulation#Ear_clipping_method_qt_ rel_eq__qt_external nofollow_qt__gt_ triangulating a polygon _lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-05-29T11:50:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFantastic.  Ya know... being honorable and forthright about code origins... gets you FOUR steak dinners!   _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  These days_co_ it seems that _lt_em_gt_those_lt_/em_gt_ characteristics are more rare than proper-working earcut code. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m pinging-in _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26123-nesh108/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26123_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26123-nesh108/_qt_ rel_eq__qt__qt__gt_@Nesh108_lt_/a_gt_ to make sure he sees this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll this stuff is good good good!  Exciting and useful new tools!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYa know those _lt_a href_eq__qt_https_dd_//images-na.ssl-images-amazon.com/images/I/41VtxRKZxJL._AC_UL320_SR170_co_320_.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_foam rubber #1 hand-things_lt_/a_gt_?  Well_co_ a guy could make a website... that accepts these extruded models (and a handful of money) as inputs_co_ and produces one of them foam rubber thingies... as output. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s see... texture.convertToFlatTexturedFoamThing(_lt_em_gt_scale_lt_/em_gt_).  We might need some helper funcs_co_ too_co_ like mixMonomers() and foamCutter.onSuccess_co_ etc.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-05-29T12:29:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEarcut is a third party library that was integrated into BJS at the time Canvas2d was released_co_ so it_t_s (and should be) responsible for all the triangulation processes _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.earcut.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.earcut.ts_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s soon the time I come back to some BJS dev_co_ I think_co_ as the list of requests for features and other fixes about what I provided so far gets longer and longer _sm_-)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nesh108","Date":"2017-05-29T16:56:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ thanks for the ping! And yeah_co_ we should totally create _lt_a href_eq__qt_https_dd_//rubberhandify.com_qt_ rel_eq__qt_external nofollow_qt__gt_rubberhandify.com_lt_/a_gt_ _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ awww that is a pretty sweet solution. Too bad I_t_ve finished my little project already _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-05-29T17:33:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26123-nesh108/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26123_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26123-nesh108/_qt_ rel_eq__qt__qt__gt_@Nesh108_lt_/a_gt__co_ when you_t_re a BJS inventor_co_ you_t_re NEVER finished.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  We just want to steal your edge detector numbers and feed them into the polywollydoodle() func that John is torturing_co_ and see what happens.  PolyMeshBuilder might trim some code from your thingy_co_ which looked pretty fat_co_ last time I looked. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow about _lt_a href_eq__qt_https_dd_//vignette4.wikia.nocookie.net/disney/images/1/16/Mickey_Mouse_image_transparent.png_qt_ rel_eq__qt_external nofollow_qt__gt_THIS image_lt_/a_gt_?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHey Mickey_co_ you_t_re so fine... etc.  First person to deliver the shape data for that pic... gets one of John_t_s steak dinners!  errr... no.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWha-da-ya-think?  No more than 4k of shape data?  Too much?  Not enough?  hmm.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nesh108","Date":"2017-05-29T18:22:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ Something like this? _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\t _lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13204_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/mickey.png.1a6909f538e43c08e86adeca89677f91.png_qt_ alt_eq__qt_mickey.png.1a6909f538e43c08e86adeca89677f91.png_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-05-29T18:52:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thehe.  Cooooool!  How many shape points is that?  Didja happen to notice?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m wandering off-topic_co_ aren_t_t I?  This thread was about tiling on the caps.  Sorry guys.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]