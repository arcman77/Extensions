[{"Owner":"chicagobob123","Date":"2016-06-02T19:40:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTried to load a babylon file. Nothing just darkness. No errors no anything. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t    _lt_br /_gt_\n\t    &lt_sm_script&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     window.addEventListener(_t_DOMContentLoaded_t__co_function() {\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     var canvas _eq_ document.getElementById(_t_renderCanvas_t_)_sm__lt_br /_gt_\n\t     var engine_eq_new BABYLON.Engine(canvas_co_true)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     var scene_sm__lt_br /_gt_\n\t     var createScene_eq_function()_lt_br /_gt_\n\t     {     _lt_br /_gt_\n\t        var url_eq__qt_models/BStraddleCarrier/_qt__sm_  _lt_br /_gt_\n\t        BABYLON.SceneLoader.Load(url_co__qt_Straddle_Carrier_001.babylon_qt__co_engine_co_ function (scene) {_lt_br /_gt_\n\t            // Wait for textures and shaders to be ready_lt_br /_gt_\n\t            scene.executeWhenReady(function() {_lt_br /_gt_\n\t            var camera _eq_ new BABYLON.ArcRotateCamera(_qt_camera1_qt__co_  0_co_ 0_co_ 0_co_ new BABYLON.Vector3(0_co_ 0_co_ -0)_co_ scene)_sm__lt_br /_gt_\n\t            camera.setPosition(new BABYLON.Vector3(0_co_ 0_co_ -50))_sm__lt_br /_gt_\n\t             camera.attachControl(canvas_co_ true)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t             var light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm__lt_br /_gt_\n\t             light.groundColor _eq_ new BABYLON.Color3(0.5_co_ 0.5_co_ 0.5)_sm__lt_br /_gt_\n\t             light.intensity _eq_ 0.7_sm__lt_br /_gt_\n\t                // Once the scene is loaded_co_ just register a render loop to render it_lt_br /_gt_\n\t                engine.runRenderLoop(function() {_lt_br /_gt_\n\t                    scene.render()_sm__lt_br /_gt_\n\t                })_sm__lt_br /_gt_\n\t            })_sm__lt_br /_gt_\n\t        }_co_ function (progress) {_lt_br /_gt_\n\t            // To do_dd_ give progress feedback to user_lt_br /_gt_\n\t        })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t      _lt_br /_gt_\n\t      \n_lt_/p_gt_\n\n_lt_p_gt_\n\t       return scene_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  }_sm_ // create scene\n_lt_/p_gt_\n\n_lt_p_gt_\n\t             _lt_br /_gt_\n\t  // call the createScene function_lt_br /_gt_\n\t  var scene_eq_createScene()_sm__lt_br /_gt_\n\t  _lt_br /_gt_\n\t  // the canvas/window resize event handler_lt_br /_gt_\n\t  window.addEventListener(_t_resize_t__co_ function(){_lt_br /_gt_\n\t      engine.resize()_sm__lt_br /_gt_\n\t  })_sm__lt_br /_gt_\n\t     }_co_ false)_sm__lt_br /_gt_\n\t        &lt_sm_/script&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you need the model I can upload it.  Did I do something wrong?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-02T22:00:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\they\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tis there error in the console? what about network monitor? maybe your server is not configured to handle babylon MIME type\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-06-03T00:25:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNothing no errors at all. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-03T16:07:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tnetwork monitor displays that it has returned the .babylon file to the client?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-06-03T18:25:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div style_eq__qt_table-layout_dd_fixed_sm_width_dd_1310.91px_sm_line-height_dd_1.6_sm_color_dd_rgb(39_co_42_co_52)_sm_font-size_dd_14px_sm_margin-bottom_dd_20px_sm_margin-top_dd_0px_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t_lt_p style_eq__qt_margin-top_dd_0px_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\t \n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_margin-top_dd_0px_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\tNetwork monitor displays that it has returned the .babylon file to the client? Here is what I have. Something called .manifest gets loaded? \n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_margin-top_dd_0px_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\t \n\t_lt_/p_gt_\n_lt_/div_gt_\n\n_lt_div style_eq__qt_float_dd_right_sm_color_dd_rgb(82_co_82_co_82)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_13px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_20px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t_lt_div style_eq__qt_background_dd_rgb(240_co_240_co_240)_sm_padding_dd_3px_sm_line-height_dd_16px_sm_float_dd_right_sm__qt__gt_\n\t\t_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/22944-babylon-3ds-export-didnt-load/?do_eq_repComment&amp_sm_comment_eq_131138&amp_sm_rep_eq_1&amp_sm_csrfKey_eq_d0a248b2db5307489a665cae3b696ef2_qt_ rel_eq__qt__qt_ style_eq__qt_color_dd_rgb(255_co_255_co_255)_sm_text-decoration_dd_none_sm_background_dd_rgb(45_co_71_co_96)_sm_font-size_dd_11px_sm_font-weight_dd_500_sm_text-align_dd_center_sm_vertical-align_dd_middle_sm_padding_dd_0px 7px_sm_border_dd_0px_sm_line-height_dd_18px_sm__qt__gt__lt_span_gt_ _lt_/span_gt_Like this_lt_/a_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_Capture2.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7966_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/Capture2.PNG.adea862826ccbb6192059af7dd179045.PNG_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIf I delete the manifest this is manifest file I get this which makes more sense. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_Capture1.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7965_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/Capture1.PNG.8fa8d43a7eb4ff736cb84bb96a4c681f.PNG_qt_ style_eq__qt_line-height_dd_1.6_sm__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNEITHER WORK\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-03T21:24:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tplease add scene.debugLayer.show() in your code\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou will be able to turn on/off various debug options (like displaying bounding boxes or clickable labels)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]