[{"Owner":"al404","Date":"2016-08-11T15:19:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI run my scene at 50 / 60 fps with LensRenderingPipeline on or off\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var parameters _eq_ {\n\t\t\t\tchromatic_aberration_dd_ 0.5_co_\n\t\t\t\tedge_blur_dd_ 0.5_co_\n\t\t\t\tdistortion_dd_ 1_co_\n\t\t\t\tdof_focus_distance_dd_ 260_co_\n\t\t\t\tdof_aperture_dd_ 1.2_co_\n\t\t\t}_sm_\n\t\t\t\nvar lensEffect _eq_ new BABYLON.LensRenderingPipeline(_t_lensEffects_t__co_ parameters_co_ scene_co_ 1.0_co_ camera)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\ti try to leave in parameters only distortion_dd_ 1 but the results does not change\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif i turn on LensRenderingPipeline i get the degration that you can see in image_co_ not sure if is my GPU too low or something expected to happen\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/57ac977d1dd8d_capture2016-08-11_05-14-15_PM.png.b30d5d8ca9aad22726a30d6676435611.png_qt_ data-fileid_eq__qt_8986_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_capture 2016-08-11_05-14-15_PM.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_8986_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/57ac977d1dd8d_capture2016-08-11_05-14-15_PM.png.b30d5d8ca9aad22726a30d6676435611.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/57ac977d75378_capture2016-08-11_05-13-28_PM.png.29d0068ce5e93757077331be2541948c.png_qt_ data-fileid_eq__qt_8987_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_capture 2016-08-11_05-13-28_PM.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_8987_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/57ac977d75378_capture2016-08-11_05-13-28_PM.png.29d0068ce5e93757077331be2541948c.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-11T17:24:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tUnfortunately this is because of render to texture which does not support antialiasing on WebGL1\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]