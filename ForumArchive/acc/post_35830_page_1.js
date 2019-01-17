[{"Owner":"dsman","Date":"2018-02-20T20:49:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow do we continue current webvr camera view inside HMD after loading another model using BABYLON.SceneLoader.Append?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe have a scene_co_ and a button to view in WebVR which works fine. Then there_t_s some WebVR controller based interaction (Oculus controllers) that triggers loading of another model (basically something like teleporting to completely different model) using BABYLON.SceneLoader.Append. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt just works fine just that Inside Oculus HMD_co_ I see default oculus black screen with small loading graphic in bottom right  (which the other model is being loaded) and then I see black screen forever (after the other model has finished loading). Although if I remove HMD and look at the page_co_ it shows webVR split-screen view. But neither it tracks the HMD (The split screen view doesn_t_t move based on HMD orientation) nor is there any display inside HMD. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried camera.detachControl before calling BABYLON.SceneLoader.Append and camera.attachControl in the success callback of it. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-20T20:58:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe problem is mostly because of how webVR works. We must keep the camera active. And this SHOULD work with Append as it is not changing the activeCamera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you repro in the PG? There must be something else \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2018-02-22T13:02:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think this is due to browser behavior of killing VR connection if WebGL app doesn_t_t render a frame for certain period. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince BABYLON.SceneLoader is not async_co_ frame freezes in HMD and then it goes black. Actually_co_ it goes black because I have disabled Oculus Client Software exe process using process blocker. Other I see Oculus home after 4-5 seconds. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will try to reproduce in PG. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2018-02-23T23:06:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe problem was something else. The camera was somehow reset/affected by our code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-02-24T02:18:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAs far as I tested it so far_co_ the Append call works in winmr vr. I don_t_t see the issues you mentioned. But I do have to keep using the same scene objectt_co_ as multiple scene objects will kick me out of webvr session and back to the cliff house. (looks like the webvr got reset or something) \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]