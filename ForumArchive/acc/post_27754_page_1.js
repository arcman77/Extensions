[{"Owner":"Noyogi","Date":"2017-01-16T23:35:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs there something like a window texture?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#JDGX2%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#JDGX2#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis could be similar to replacing a skybox with a plane where there would be a window.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt could function like a digital window in an city apartment showing a country side landscape. The picture based on the user_t_s location and the rate of change could be based on how far the features in the picture are.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could have 4 skyboxes_co_ one within the other_co_ each smaller than the latter.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInside of all the skyboxes is your house/office/apartment or just a single window.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe window is a plane with the normals facing inward.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe texture for the window is based on the sky boxes_co_ the inner most skybox image on top of the second and so on.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe section of image pulled from the skybox for the window texture is based on the plane_t_s normals_co_ the distance and angle of the user to the window_co_ and the distance of each skybox to the window.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInfo is pulled from the sky boxes but there are no active skyboxes\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor with shapes that aren_t_t boxes\n_lt_/p_gt_\n\n_lt_p_gt_\n\tImagine yourself in a field and you are surrounded by mountains_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou take a beautiful panorama and isolate the mountains_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tapply the mountains to a cylinder with no caps and flipped normals_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcreate a sky gif with clouds or stars floating by and apply that to a dome_co_ cylinder section_co_ or plane\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand so on..\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-17T03:46:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBartender... I_t_ll have whatever Noyogi is having.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Make it a double! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWow_co_ what an envisioning!  Let_t_s talk about a couple things.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_159411_qt_ data-ipsquote-contentid_eq__qt_27754_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1484609710_qt_ data-ipsquote-userid_eq__qt_23619_qt_ data-ipsquote-username_eq__qt_Noyogi_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ Noyogi said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe section of image pulled from the skybox for the window texture is based on the plane_t_s normals_co_ the distance and angle of the user to the window_co_ and the distance of each skybox to the window.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat... is a challenge... and it needs to be updated just as fast as the main camera can move.  The BJS _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.5/RenderTargetTexture_qt_ rel_eq__qt_external nofollow_qt__gt_renderTargetTexture_lt_/a_gt_ (RTT) has some interesting power.  Here is our materials demo from the playground_co_ but with 4 cameras_co_ and 4 RTT_t_s on planes_co_ parented to the camera.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WROZH%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1WROZH#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEssentially_co_ an RTT allows you to use the view from a camera... as a texture.  Let_t_s stop there_co_ for a moment.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKnow about layer masks?  Back to demo.  Each plane that is parented to the camera ... I call a _qt_monitor_qt__co_ as in security-camera monitor.  The left-most monitor... is the view from camera 1_co_ which is also the main camera.  OR IS IT?  Why can_t_t we see the 4 security monitors... in monitor #1 (just like the main camera can see them)??\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is because...lines 79-124_co_ which create the 4 monitors and its background plane... all are set to layerMask 1.  And notice in lines 14-17_co_ all cameras are set layerMask 2.  LayerMask 2 cameras... won_t_t render layerMask 1 mesh.  Cool_co_ huh?   To top that off_co_ look at lines 62_co_ 67_co_ 72_co_ and 77.  We can set WHICH MESHES are displayed... for each RTT itself. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo now we have TWO _qt_mechanisms_qt_ for filtering/masking mesh in an RTT.  We can tell cameras which mesh to render_co_ and we can tell RTT_t_s which mesh to render.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNext_co_ think about this_co_ if you will.  Parent another camera to your main camera. (much like a stereoscopic camera _qt_rig mode_qt_.)  Now build your wall/window (with a plane where the glass would be).  With the 2nd cam (the rtt cam)_co_ filter ALL mesh from its view... except the skybox.  When you have it right_co_ cam2 RTT should be a picture of skybox/clouds... and since it is copying cam 1 orientations... those clouds should pan-around when cam 1 pans-around_co_ etc.  Now just install that cam 2 RTT... as a texture on the window glass plane.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou_t_re off and running... off to see how demented you can get.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_  Some very strange things could appear to happen... outside that window.  heh  (house appears to turn along-with players head)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOne minor issue.  Notice that the main cam is using some edgesRendering... a post-process thing.  RTT_t_s get their camera image BEFORE post-processing_co_ and thus we don_t_t see edgesRendering in monitor 1 (RTT 1).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRenderTargetTextures opens some doors (windows?)_co_ though.  Your _qt_big view_qt_ is within reach (if its not fake).  Start simple_co_ do some checks_co_ try some stuff.  Put yourself in a box with no holes for windows_co_ and see what you can fake.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Share_co_ if ya please.  Others may comment soon.  Good crazy thinkin_t__co_ Noyogi!  Let_t_s try all of it. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Noyogi","Date":"2017-01-17T22:38:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@Wingnut will have some juice of lime squeezed freshly into a cup with some sugar water and carbonated mineral water_co_ thank you bartender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#JDGX2%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#JDGX2#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit seems the issue here is that the monitors/windows are displaying the entirety of the rtt cameras_t_ fov_t_s_co_ rather than only what looking through the window would allow_co_ any ideas on how to change that?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-19T13:25:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLime juice?  How uneventful.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t(Wingy adds a big pile of whipped cream... atop his lime juice_co_ and sprinkles-on edible glitter)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ um... me thinks you need to move the rtt cameras... to a .position just behind each window.  Maybe?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour vision is so damned big_co_ my brain is having a difficult time holding it in view.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe the rtt camera for a given window_co_ should be just _lt_strong_gt_outside_lt_/strong_gt_ that window (aiming at skybox).  But yeah_co_ .fov and .fovMode could be important here.  .fovMode is used to determine if .fov should be applied to height_co_ or to width... I think.  _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_q_eq_fovmode&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_16_co_28_co_29_co_30_co_31_qt_ rel_eq__qt__qt__gt_Forum search link_lt_/a_gt_.  Also_co_ I don_t_t know what happens when a camera is set to orthogonal mode_co_ but that might be worth studying_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn general_co_ though_co_ there_t_s all sorts of trickery and foolery available.  There_t_s some extra things that you would need.  For example_co_ as player moves around inside the house-o-fake-windows_co_ what do the rtt images do?  Do they scroll a tiny bit?  Do you need to slightly rotate the rtt cams... so they show a slightly different section of the skybox images?  Little things... calibrating.  That_t_s how you would get the best fakery.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ you can make your windowed walls out of 4 planes_co_ so there_t_s a REAL hole in the middle.  Or use CSG and boolean-subtract a hole into a wall.  But_co_ there_t_s still something cool about fake windows that are actually big-screen TV_t_s_co_ eh?  Don_t_t try to stick your head out-of one_co_ though... and avoid spitting chewing tobacco out of those fake windows.  heh   [_lt_a href_eq__qt_https_dd_//www.youtube.com/watch?v_eq_A_peCIVBTAY_qt_ rel_eq__qt_external nofollow_qt__gt_fun!_lt_/a_gt_]\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]