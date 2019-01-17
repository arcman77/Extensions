[{"Owner":"Rodrix3","Date":"2018-07-20T06:36:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey there lovely community!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am such in love with this Babylon library and the entire community. _lt_br /_gt_\n\tI am so glad we made a switch to Babylon!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_My question is about PBR and normal maps (called bump maps on code)._lt_/strong_gt__lt_br /_gt_\n\tI am using a normal map (RGB blue map) in conjunction with PBR.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe result I am getting is horrible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_image.png.c38fc3f34e2c0b4facaefb9afaeeb107.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19300_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/image.png.c38fc3f34e2c0b4facaefb9afaeeb107.png_qt_ /_gt__lt_br /_gt_\n\tThe gloss/roughness effect is completely broken with very black shadows and the result looks very fake._lt_br /_gt_\n\tThat is supposed to be a_lt_strong_gt_ concrete floor _lt_/strong_gt_(and it looks like an ocean with hard shadows)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any setting that I am missing in order to make bump maps work nicely with PBR?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tS_lt_strong_gt_ome additional questions_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- How can I control bump  _lt_strong_gt_intensity_lt_/strong_gt_? I am now modifying the bumpTexture._lt_strong_gt_level_lt_/strong_gt__co_ but most likely that_t_s not the right way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- How can I change the bump _lt_strong_gt_scale_lt_/strong_gt_? I am now modifying the bumpTexture._lt_strong_gt_uScale_lt_/strong_gt_ and  bumpTexture._lt_strong_gt_vScale._lt_/strong_gt_ Is that correct?_lt_br /_gt_\n\t_lt_br /_gt_\n\t- Should the source image be inverted in any way and any setting should be enabled? I am using just the typical normal map you get from any library. _lt_br /_gt_\n\tMaybe Babylon uses a different covention from the typical?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Should I set _lt_strong_gt_useParallax_lt_/strong_gt_ _eq_ true?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Should I set _lt_strong_gt_useParallaxOcclusion_lt_/strong_gt_ _eq_ true?   (I tried both settings and I am still not getting nice results).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Should I set _lt_strong_gt_forceIrradianceInFragment_lt_/strong_gt_ _eq_ true? (I just found about this one and not sure about )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Is there anything I am missing?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tP.S_dd_ I am loading the material from a gtlf file. The gltf file was created on 3ds Studio Max._lt_br /_gt_\n\tNo matter how much I modify the intensity on 3ds Max it comes out similar_co_ so I want to modify the intensity via code but not sure how._lt_br /_gt_\n\t_lt_br /_gt_\n\tSurely I am missing something about this whole thing_co_ or maybe bump mapping is not fully supported on PBR?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tP.S.S_dd_ I don_t_t care about performance. I want the best results possible (target machine GTX 1080...)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-07-20T07:35:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAbout the intensity_co_ it_t_s indeed the level you have to tweak_co_ same for uScale &amp_sm_ vScale_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#K4S3GU%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#K4S3GU#11_lt_/a_gt_ (l.26 for scale_co_ l.33 for level).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDepending about your normal map (created for directX or OpenGL for example)_co_ you may have to_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.pbrmaterial#invertnormalmapy_qt_ rel_eq__qt_external nofollow_qt__gt_ invert Y or X_lt_/a_gt_ in your material.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAbout parallax I can_t_t say_co_ I don_t_t use it on BJS for now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-20T16:05:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-07-20T20:35:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLet me try to answer inline but a PG would really help in this case _lt_span_gt__lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe gloss/roughness effect is completely broken with very black shadows and the result looks very fake. That is supposed to be a_lt_strong_gt__lt_span_gt_ _lt_/span_gt_concrete floor _lt_/strong_gt_(and it looks like an ocean with hard shadows)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_Hard shadows might be the result of horizon or ambient occlusion tricks we are using in the prb. They are usually fine for small variations but might be too strong with big normal changes. You can try setting_dd_ _lt_/em_gt__lt_em_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_useHorizonOcclusion or _lt_/span_gt_useRadianceOcclusion to false._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tIs there any setting that I am missing in order to make bump maps work nicely with PBR?\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tS_lt_strong_gt_ome additional questions_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t- How can I control bump _lt_span_gt_ _lt_/span_gt__lt_strong_gt_intensity_lt_/strong_gt_? I am now modifying the bumpTexture._lt_strong_gt_level_lt_/strong_gt__co_ but most likely that_t_s not the right way.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt_The level of the texture is the right way._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t- How can I change the bump_lt_span_gt_ _lt_/span_gt__lt_strong_gt_scale_lt_/strong_gt_? I am now modifying the bumpTexture._lt_strong_gt_uScale_lt_/strong_gt__lt_span_gt_ _lt_/span_gt_and  bumpTexture._lt_strong_gt_vScale._lt_/strong_gt__lt_span_gt_ _lt_/span_gt_Is that correct?\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt_This changes like any texture in Babylon how tiling will be done with the texture assuming your texture is not in clamp mode._lt_/em_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t- Should the source image be inverted in any way and any setting should be enabled? I am using just the typical normal map you get from any library. _lt_br /_gt_\n\tMaybe Babylon uses a different covention from the typical?\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt_There is no typical convention_co_ just differnent ones _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_ As you rely on GLTF_co_ your image should follow the GLTF convention well detailed in the spec. In BABYLON by default the convention is not the same. You can play with _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_invertNormalMapX and _lt_/span_gt_invertNormalMapY to inverse some of the axis in order to match with your expected conventions._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t- Should I set_lt_span_gt_ _lt_/span_gt__lt_strong_gt_useParallax_lt_/strong_gt__lt_span_gt_ _lt_/span_gt__eq_ true?\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt_This is only to enable parallax_co_ and I do not think it is usefull in your case (ground concrete)._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t- Should I set_lt_span_gt_ _lt_/span_gt__lt_strong_gt_useParallaxOcclusion_lt_/strong_gt__lt_span_gt_ _lt_/span_gt__eq_ true?   (I tried both settings and I am still not getting nice results).\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt_Same here._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t- Should I set _lt_strong_gt_forceIrradianceInFragment_lt_/strong_gt__lt_span_gt_ _lt_/span_gt__eq_ true? (I just found about this one and not sure about )\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt_This would help getting more dynamicity from the environment irradiance at a bit of a perf cost. The irradiance will be computed per fragment instead of vertex so it will be more accurate at the expense of replacing the interpolation by a full compute of the irradiance per pixels._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t- Is there anything I am missing?\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt_I thin we covered it all but a playground would be nice here _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_ _lt_/span_gt__lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Rodrix3","Date":"2018-07-21T16:49:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222642_qt_ data-ipsquote-contentid_eq__qt_38975_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1532118944_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t20 hours ago_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tLet me try to answer inline but a PG would really help in this case _lt_span_gt__lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe gloss/roughness effect is completely broken with very black shadows and the result looks very fake. That is supposed to be a_lt_strong_gt__lt_span_gt_ _lt_/span_gt_concrete floor _lt_/strong_gt_(and it looks like an ocean with hard shadows)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_em_gt_Hard shadows might be the result of horizon or ambient occlusion tricks we are using in the prb. They are usually fine for small variations but might be too strong with big normal changes. You can try setting_dd_ _lt_/em_gt__lt_em_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_useHorizonOcclusion or _lt_/span_gt_useRadianceOcclusion to false._lt_/em_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\tIs there any setting that I am missing in order to make bump maps work nicely with PBR?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\tS_lt_strong_gt_ome additional questions_dd__lt_/strong_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t- How can I control bump _lt_span_gt_ _lt_/span_gt__lt_strong_gt_intensity_lt_/strong_gt_? I am now modifying the bumpTexture._lt_strong_gt_level_lt_/strong_gt__co_ but most likely that_t_s not the right way.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t_lt_em_gt_The level of the texture is the right way._lt_/em_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t- How can I change the bump_lt_span_gt_ _lt_/span_gt__lt_strong_gt_scale_lt_/strong_gt_? I am now modifying the bumpTexture._lt_strong_gt_uScale_lt_/strong_gt__lt_span_gt_ _lt_/span_gt_and  bumpTexture._lt_strong_gt_vScale._lt_/strong_gt__lt_span_gt_ _lt_/span_gt_Is that correct?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t_lt_em_gt_This changes like any texture in Babylon how tiling will be done with the texture assuming your texture is not in clamp mode._lt_/em_gt__lt_br /_gt_\n\t\t\t_lt_br /_gt_\n\t\t\t- Should the source image be inverted in any way and any setting should be enabled? I am using just the typical normal map you get from any library. _lt_br /_gt_\n\t\t\tMaybe Babylon uses a different covention from the typical?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t_lt_em_gt_There is no typical convention_co_ just differnent ones _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_ As you rely on GLTF_co_ your image should follow the GLTF convention well detailed in the spec. In BABYLON by default the convention is not the same. You can play with _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_invertNormalMapX and _lt_/span_gt_invertNormalMapY to inverse some of the axis in order to match with your expected conventions._lt_/em_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t- Should I set_lt_span_gt_ _lt_/span_gt__lt_strong_gt_useParallax_lt_/strong_gt__lt_span_gt_ _lt_/span_gt__eq_ true?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t_lt_em_gt_This is only to enable parallax_co_ and I do not think it is usefull in your case (ground concrete)._lt_/em_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t- Should I set_lt_span_gt_ _lt_/span_gt__lt_strong_gt_useParallaxOcclusion_lt_/strong_gt__lt_span_gt_ _lt_/span_gt__eq_ true?   (I tried both settings and I am still not getting nice results).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t_lt_em_gt_Same here._lt_/em_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t- Should I set _lt_strong_gt_forceIrradianceInFragment_lt_/strong_gt__lt_span_gt_ _lt_/span_gt__eq_ true? (I just found about this one and not sure about )\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t_lt_em_gt_This would help getting more dynamicity from the environment irradiance at a bit of a perf cost. The irradiance will be computed per fragment instead of vertex so it will be more accurate at the expense of replacing the interpolation by a full compute of the irradiance per pixels._lt_/em_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t- Is there anything I am missing?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t_lt_em_gt_I thin we covered it all but a playground would be nice here _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_ _lt_/span_gt__lt_/em_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAmazing! Thanks so much for answering all my questions _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems I am getting the right results by lowering the intensity to 0.01. So the effect is much more subtle. I will continue testing and keep you posted.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]