[{"Owner":"macavalon","Date":"2015-07-14T22:32:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve exported from blender(2.74) a 3d model that includes animation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The model &amp_sm_ animation is a simple character_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In blender the models works fine_co_ and animates as expected_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2015/post-15430-0-29165500-1436911425.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2015/post-15430-0-29165500-1436911425.jpg_qt_ data-fileid_eq__qt_4634_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-15430-0-29165500-1436911425.jpg_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I then export the model from blender to babylon (using io_export_babylon.py)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I load into a babylon scene by following _qt_Loading bones_qt_ from _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/How-to-use-bones-and-skeletons_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/How-to-use-bones-and-skeletons_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt__lt_em_gt_BABYLON.SceneLoader.ImportMesh(meshToLoad_co_ loadDir_co_ sceneFileName_co_ scene_co_ MeshLoaded)_sm__lt_/em_gt__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2015/post-15430-0-30840400-1436911424.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2015/post-15430-0-30840400-1436911424.jpg_qt_ data-fileid_eq__qt_4633_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-15430-0-30840400-1436911424.jpg_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_MeshLoaded() has debug so I can review what_t_s loaded _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt_function MeshLoaded(newMeshes_co_ particleSystems_co_ skeletons)_lt_/span_gt__lt_/div_gt__lt_div_gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt_{_lt_/span_gt__lt_/div_gt__lt_div style_eq__qt_margin-left_dd_40px_sm__qt__gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt_console.log(_qt_meshes loaded _dd_ _qt_ + newMeshes.length)_sm__lt_/span_gt__lt_/div_gt__lt_div style_eq__qt_margin-left_dd_40px_sm__qt__gt__lt_div_gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt_   _lt_/span_gt__lt_/div_gt__lt_div_gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt_console.log(_qt_skeletons loaded _dd_ _qt_ + skeletons.length)_sm__lt_/span_gt__lt_/div_gt__lt_/div_gt__lt_div_gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt_}_lt_/span_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_but there seems to be no skeleton loaded by import mesh_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2015/post-15430-0-35726500-1436912945.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2015/post-15430-0-35726500-1436912945.jpg_qt_ data-fileid_eq__qt_4638_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-15430-0-35726500-1436912945.jpg_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_in _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_4637_qt__gt_simplefigure_weighted.zip_lt_/a_gt_ is the .blend file and the .babylon file_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_please any suggestions on how to get access to the skeleton so I can then invoke beginAnimation !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_thanks_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@macavalon_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_p.s. additional info_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The version of the babylon export script (io_export_babylon.py) I downloaded from github on 04/07/2015_lt_/p_gt__lt_p_gt_I export to babylon successfully_co_ the export log file see _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_4636_qt__gt_simplefigure_weighted.log.txt_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m using the latest babylon i.e._lt_/p_gt__lt_p_gt_&lt_sm_script src_eq__qt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/babylon.js%22_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/a_gt_ )_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-07-15T15:21:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Your version of exporter is too old. (About to get older soon_co_ as I am preparing version 3.0 _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_).  Up until very recently_co_ you had to parent your mesh to the armature_co_ but Jack Caron (no forum ID) PRed a way for the exporter to handle this without parenting._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"macavalon","Date":"2015-07-15T16:54:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Very good. I look forward to the latest exporter._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]