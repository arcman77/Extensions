[{"Owner":"ozRocker","Date":"2016-03-30T12:50:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_ve been trying to build a contact form on my website which uses tokens to authenticate its origin.  It broke when I added a Babylon.js scene.  The original session did not match the session from the contact form. Through the process of elimination I discovered that the call BABYLON.SceneLoader.Load creates a completely new session on completion.  Is there a way to stop Babylon.js from changing the session?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-30T14:36:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello...I_t_m not sure to understand. Load only initiates a XHR _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-03-30T15:27:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_122822_qt_ data-ipsquote-contentid_eq__qt_21575_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1459348597_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t45 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello...I_t_m not sure to understand. Load only initiates a XHR _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI have two files_dd_ session1.php and session2.php and I use those to compare the session.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tsession1.php - this is the web page that I will bring up on the browser\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_?php\n    session_start()_sm_\n    $token _eq_ md5(uniqid(microtime()_co_ true))_sm_  \n    $_SESSION[_t_token_t_] _eq_ $token_sm_ \n?&gt_sm_\n&lt_sm_html&gt_sm_\n    &lt_sm_head&gt_sm_\n        &lt_sm_script src_eq__qt_lib/jquery-latest.min.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_lib/babylon.2.3.core.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script type_eq__qt_text/javascript_qt_&gt_sm_\n            console.log(_qt_Token from session1.php_dd_ &lt_sm_?_eq_$token?&gt_sm__qt_)_sm_\n            function ajax(title) {\n                $.get(_qt_session2.php_qt__co_ function(data) {\n                    console.log(title+_qt_ - Token from session2.php_dd_ _qt_+data)_sm_\n                })_sm_            \n            }\n        &lt_sm_/script&gt_sm_            \n    &lt_sm_/head&gt_sm_\n    &lt_sm_body&gt_sm_\n        &lt_sm_canvas id_eq__qt_canvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_\n        &lt_sm_script type_eq__qt_text/javascript_qt_&gt_sm_\n            var canvas _eq_ document.getElementById(_qt_canvas_qt_)_sm_\n            var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n            \n            ajax(_qt_Before load_qt_)_sm_\n            BABYLON.SceneLoader.Load(_qt_title/3D/_qt__co_ _qt_title.babylon_qt__co_ engine_co_ function (newScene) {        \n                ajax(_qt_After load_qt_)_sm_\n            })_sm_\n    &lt_sm_/script&gt_sm_\n    &lt_sm_/body&gt_sm_\n&lt_sm_/html&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tsession2.php - this is to be called via AJAX\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_?php\n    session_start()_sm_\n    echo $_SESSION[_t_token_t_]_sm_\n?&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWhen I run session1.php my console output is this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tToken from session1.php_dd_ 1f5d4d890ef757cede71f6f31f8a9f6b_lt_br /_gt_\n\tBJS - [02_dd_21_dd_16]_dd_ Babylon.js engine (v2.3.0) launched_lt_br /_gt_\n\tBefore load - Token from session2.php_dd_ 1f5d4d890ef757cede71f6f31f8a9f6b_lt_br /_gt_\n\tAfter load - Token from session2.php_dd_ fd337e15839258c22c937a6cd79ac02d\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSomething happens in SceneLoader.Load that restarts the session.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-30T15:46:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can try adding a condition that checks if the $_SESSION[ _t_token_t_] is not created. if it is_co_ it does not recreate.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_?php\n    session_start()_sm_\n    $token _eq_ md5(uniqid(microtime()_co_ true))_sm_  \n    if($_SESSION[_t_token_t_] _eq__eq_ false) $_SESSION[_t_token_t_] _eq_ $token_sm_ \n?&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_I think XHR reloads the page and thus recreate the session_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-03-30T23:16:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_122837_qt_ data-ipsquote-contentid_eq__qt_21575_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1459352761_qt_ data-ipsquote-userid_eq__qt_5292_qt_ data-ipsquote-username_eq__qt_Dad72_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t7 hours ago_co_ Dad72 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYou can try adding a condition that checks if the $_SESSION[ _t_token_t_] is not created. if it is_co_ it does not recreate.\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt__lt_span_gt__lt_span_gt_&lt_sm_?php_lt_/span_gt_\n    session_start()_sm_\n    _lt_span_gt_$token_lt_/span_gt_ _eq_ md5(uniqid(microtime()_co_ _lt_span_gt_true_lt_/span_gt_))_sm_  \n    _lt_span_gt_if_lt_/span_gt_(_lt_span_gt_$_SESSION_lt_/span_gt_[_lt_span_gt__t_token_t__lt_/span_gt_] _eq__eq_ _lt_span_gt_false_lt_/span_gt_) _lt_span_gt_$_SESSION_lt_/span_gt_[_lt_span_gt__t_token_t__lt_/span_gt_] _eq_ _lt_span_gt_$token_lt_/span_gt__sm_ \n_lt_span_gt_?&gt_sm__lt_/span_gt__lt_/span_gt__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_I think XHR reloads the page and thus recreate the session_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat doesn_t_t do anything because its irrelevant where the initial session key came from.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tXHR itself shouldn_t_t reload the page or change the session (hence DeltaKosh_t_s confusion).  The jquery function $.get() that I_t_m calling above is XHR.  I can call that a hundred times and it won_t_t change the session.  There has to be some code in SceneLoader.Load that_t_s changing the session.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-31T00:55:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m not used to php but I can guarantee you that we are only doing XHR calls in Load function_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.tools.ts#L340_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.tools.ts#L340_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-03-31T02:40:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_122959_qt_ data-ipsquote-contentid_eq__qt_21575_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1459385754_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI_t_m not used to php but I can guarantee you that we are only doing XHR calls in Load function_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.tools.ts#L340_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.tools.ts#L340_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHow do I include the babylon.tools.ts or babylon.tools.js file in my project so I can try and isolate the problem?  What other files do I need to include?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-03-31T04:04:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually_co_ don_t_t worry about it.  A PHP session is just a cookie called PHPSESSID.  What I did was manually create my own cookie called sessionID and used that.  It works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsession1.php\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_?php\n    session_start()_sm_\n    $token _eq_ md5(uniqid(microtime()_co_ true))_sm_  \n    setcookie(_qt_sessionID_qt__co_$token)_sm_\n?&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tsession2.php\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_?php\n    session_start()_sm_\n    echo $_COOKIE[_t_sessionID_t_]_sm_\n?&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tMy _qt_contact form sent from website instead of hacker_qt_ verification now works.  YAY!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-31T11:28:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have never had a problem with the $_SESSION PHP_co_ but I always use it on the inside of a condition_co_ such as for example login form with a redirect. I already use session with Babylon_co_ and I have not seen this problem change sesssion\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn your $ .get function_co_ it is because the page is called session2.php. This page does not change the SESSION_co_ so no problem with the XMLHTTPREQUEST. As against the SceneLoader.Load function is called on the same page as the creation of the Session and therefore XMLHTTPREQUEST called page itself and recreate the session.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am pretty sure that with a condition on the creation of the Session the problem was resolved. But maybe he should destroy the session manually with session_destroy () on a page other before testing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to secure COOKIES_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_$delais _eq_ time() + 365*24*3600_sm_\nsetcookie(_t_pseudo_t__co_ $token_co_ $delais_co_ null_co_ null_co_ false_co_ true)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand this is no longer necessary with the use of COOKIE_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsession_start ()_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-03-31T22:51:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_123023_qt_ data-ipsquote-contentid_eq__qt_21575_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1459423724_qt_ data-ipsquote-userid_eq__qt_5292_qt_ data-ipsquote-username_eq__qt_Dad72_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ Dad72 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI have never had a problem with the $_SESSION PHP_co_ but I always use it on the inside of a condition_co_ such as for example login form with a redirect. I already use session with Babylon_co_ and I have not seen this problem change sesssion\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you for your help Dad72 _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I think this is a PHP problem_co_ or maybe a problem with the way I have PHP configured.  I can_t_t see why Babylon.js would have anything to do with a cookie called PHPSESSID.  Chances are no one else is having his problem and its just me \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]