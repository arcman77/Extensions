[{"Owner":"avoba","Date":"2017-04-08T21:43:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to show a text label when I hover the mouse over a mesh (sphere). It needs to show up at the exact position of the sphere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSomething like_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnPointerOverTrigger -&gt_sm_ show text label \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnPointerOutTrigger -&gt_sm_ hide text label\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/58e958cd049c6_ScreenShot2017-04-08at6_35_56PM.jpg.0680b9fef52da69d362045c6d84dd71b.jpg_qt_ data-fileid_eq__qt_12406_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Screen Shot 2017-04-08 at 6.35.56 PM.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12406_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/58e958cd049c6_ScreenShot2017-04-08at6_35_56PM.jpg.0680b9fef52da69d362045c6d84dd71b.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot sure if I have to use actions... trigger... pick()...text2d. Couldn_t_t figure it out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a way to do it using HTML?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlayground_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#NH8WYW_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#NH8WYW_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan anyone help me?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-04-09T01:51:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26380-avoba/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26380_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26380-avoba/_qt_ rel_eq__qt__qt__gt_@avoba_lt_/a_gt__co_ welcome. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#NH8WYW%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#NH8WYW#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a playground that shows mouseover/out label... using actionManager and world space canvas 2d.  Perhaps not the BEST way_co_ but it is ONE way.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Canvas 2d system is actually wonderful... powerful... takes some code to activate_co_ as you can see. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I say _qt_perhaps bad way_qt_... it is MY CODE that could be bad.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Canvas2d system is fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd yes_co_ you can use HTML_dd_  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#NH8WYW%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#NH8WYW#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAbsolute-position html elements!  Yay!  We just change our onOver and onOut handler funcs_co_ right?  Same actionManager operations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnfortunately_co_ in HTML_co_ the pop-up label aligns to its upper left corner.  I_t_m not sure _lt_strong_gt_how_lt_/strong_gt_ to _qt_center_qt_ the HTML label... perfectly atop the mouseOver point.  Sometimes difficult to make label align properly.  The values used in CSS _lt_em_gt_top _lt_/em_gt_and _lt_em_gt_left_lt_/em_gt_ (lines 45/46) are very important.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll let you study these two playgrounds_co_ and if you have questions_co_ ask them.  Freely do more edits_co_ hit RUN_t_s_co_ make saves_co_ get zips... you cannot hurt anything in our playground.  Do crazy experiments and have fun.  Hope this helps.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"avoba","Date":"2017-04-09T03:18:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAmazing! It worked out beautifully!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI ended up using the HTML_co_ and just had to tweak a little bit with the sty.top and sty.left as there were some issues with the screen width_co_ but rather than that_co_ it_t_s perfect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks a lot! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]