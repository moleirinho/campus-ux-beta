/*
 * Licensed to the Sakai Foundation (SF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The SF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */
define(function(){
    var config = {
        URL: {
            // Static URLs
            GATEWAY_URL: "/",
            GROUP_DEFAULT_ICON_URL: "/dev/images/group_avatar_icon_64x64_nob.png",
            GROUP_DEFAULT_ICON_URL_LARGE: "/dev/images/group_avatar_icon_100x100_nob.png",
            I10N_BUNDLE_URL: "/dev/lib/misc/l10n/cultures/globalize.culture.__CODE__.js",
            I18N_BUNDLE_ROOT: "/dev/bundle/",
            INBOX_URL: "/me#l=messages/inbox",
            INVITATIONS_URL: "/me#l=messages/invitations",
            LOGOUT_URL: "/logout",
            MY_DASHBOARD_URL: "/me#l=dashboard",
            PROFILE_EDIT_URL: "/me#l=profile/basic",
            SEARCH_ACTIVITY_ALL_URL: "/var/search/activity/all.json",
            SEARCH_URL: "/search",
            TINY_MCE_CONTENT_CSS: "/dev/css/FSS/fss-base.css,/dev/css/sakai/main.css,/dev/css/sakai/sakai.corev1.css,/dev/css/sakai/sakai.base.css,/dev/css/sakai/sakai.editor.css,/dev/css/sakai/sakai.content_profile.css",
            USER_DEFAULT_ICON_URL: "/dev/images/default_User_icon_50x50.png",
            USER_DEFAULT_ICON_URL_LARGE: "/dev/images/default_User_icon_100x100.png",
            INFINITE_LOADING_ICON: "/dev/images/Infinite_Scrolling_Loader_v01.gif",

            // Services
            BATCH: "/system/batch",
            CAPTCHA_SERVICE: "/system/captcha",           
            CHAT_GET_SERVICE:"/var/message/chat/__KIND__.json",
            CHAT_UPDATE_SERVICE:"/var/message.chatupdate.json",
            CONTACTS_FIND: "/var/contacts/find.json",
            CONTACTS_FIND_STATE: "/var/contacts/findstate.json",
            CONTACTS_FIND_ALL: "/var/contacts/find-all.json",
            CREATE_USER_SERVICE: "/system/userManager/user.create.html",
            DISCUSSION_GETPOSTS_THREADED: "/var/search/discussions/threaded.json?path=__PATH__&marker=__MARKER__",
            GOOGLE_CHARTS_API: "http://chart.apis.google.com/chart",
            ONEALL_SOCIALIZE_API: "http://oneall.api.oneall.com/socialize/library.js",
            GROUP_CREATE_SERVICE: "/system/userManager/group.create.json",
            GROUPS_MANAGER: "/system/me/managedgroups.json",
            GROUPS_MEMBER: "/system/me/groups.json",
            IMAGE_SERVICE: "/var/image/cropit",
            LOGIN_SERVICE: "/system/sling/formlogin",
            LOGOUT_SERVICE: "/system/sling/logout?resource=/index",
            ME_SERVICE: "/system/me",
            MESSAGE_BOX_SERVICE: "/var/message/box.json",
            MESSAGE_BOXCATEGORY_SERVICE: "/var/message/boxcategory.json",
            MESSAGE_BOXCATEGORY_ALL_SERVICE: "/var/message/boxcategory-all.json",
            POOLED_CONTENT_MANAGER: "/var/search/pool/me/manager.json",
            POOLED_CONTENT_MANAGER_ALL: "/var/search/pool/me/manager-all.json",
            POOLED_CONTENT_VIEWER: "/var/search/pool/me/viewer.json",
            POOLED_CONTENT_VIEWER_ALL: "/var/search/pool/me/viewer-all.json",
            POOLED_CONTENT_SPECIFIC_USER: "/var/search/pool/manager-viewer.json",
            POOLED_CONTENT_ACTIVITY_FEED: "/var/search/pool/activityfeed.json",
            PRESENCE_SERVICE: "/var/presence.json",
            SAKAI2_TOOLS_SERVICE: "/var/proxy/s23/site.json?siteid=__SITEID__",
            WORLD_CREATION_SERVICE: "/system/world/create",
            WORLD_INFO_URL: "/var/templates/worlds.2.json",

            // Replace these in widgets with proper widgetsave functions from magic
            SEARCH_ALL_ENTITIES: "/var/search/general.json",
            SEARCH_ALL_ENTITIES_ALL: "/var/search/general-all.json",
            SEARCH_ALL_FILES: "/var/search/pool/all.json",
            SEARCH_ALL_FILES_ALL: "/var/search/pool/all-all.json",
            SEARCH_MY_BOOKMARKS: "/var/search/files/mybookmarks.json",
            SEARCH_MY_BOOKMARKS_ALL: "/var/search/files/mybookmarks-all.json",
            SEARCH_MY_CONTACTS: "/var/search/files/mycontacts.json",
            SEARCH_MY_FILES: "/var/search/files/myfiles.json",
            SEARCH_MY_FILES_ALL: "/var/search/files/myfiles-all.json",
            SEARCH_GROUP_MEMBERS: "/var/search/groupmembers.json",
            SEARCH_GROUP_MEMBERS_ALL: "/var/search/groupmembers-all.json",
            SEARCH_GROUPS: "/var/search/groups.infinity.json",
            SEARCH_GROUPS_ALL: "/var/search/groups-all.json",
            SEARCH_USERS_ACCEPTED: "/var/contacts/findstate.infinity.json",
            SEARCH_USERS: "/var/search/users.infinity.json",
            SEARCH_USERS_ALL: "/var/search/users-all.json",
            SEARCH_USERS_GROUPS: "/var/search/usersgroups.json",
            SEARCH_USERS_GROUPS_ALL: "/var/search/usersgroups-all.json",
            USER_CHANGEPASS_SERVICE: "/system/userManager/user/__USERID__.changePassword.html",
            USER_EXISTENCE_SERVICE: "/system/userManager/user.exists.html?userid=__USERID__"
        },

        PageTitles: {
            "prefix": "TITLE_PREFIX",
            "pages": {
                /**  403.html  **/
                /**  404.html  **/
                /**  500.html  **/
                /**  account_preferences.html  **/
                "/dev/account_preferences.html": "ACCOUNT_PREFERENCES",
                "/preferences": "ACCOUNT_PREFERENCES",
                /**  acknowledgements.html  **/
                "/dev/acknowledgements.html": "ACKNOWLEDGEMENTS",
                "/acknowledgements": "ACKNOWLEDGEMENTS",
                /**  allcategories.html  **/
                "/categories": "BROWSE_ALL_CATEGORIES",
                "/dev/allcategories.html": "BROWSE_ALL_CATEGORIES",
                /**  category.html  **/
                /**  content_profile.html  **/
                "/dev/content_profile.html": "CONTENT_PROFILE",
                "/content": "CONTENT_PROFILE",
                /**  create_new_account.html  **/
                "/dev/create_new_account.html": "CREATE_A_NEW_ACCOUNT",
                "/register": "CREATE_A_NEW_ACCOUNT",
                /**  explore.html  **/
                "/": "EXPLORE",
                "/dev": "EXPLORE",
                "/dev/": "EXPLORE",
                "/index.html": "EXPLORE",
                "/dev/explore.html": "EXPLORE",
                "/index": "EXPLORE",
                /**  logout.html  **/
                "/dev/logout.html": "LOGGING_OUT",
                "/logout": "LOGGING_OUT",
                /**  search.html  **/
                "/dev/search.html": "SEARCH",
                "/search": "SEARCH",
                /**  createnew.html  **/
                "/create": "CREATE"
            }
        },

        ErrorPage: {
            /*
             * These links are displayed in the 403 and 404 error pages.
             */
            Links: {
                whatToDo: [{
                    "title": "EXPLORE_THE_INSTITUTION",
                    "url": "/index"
                }, {
                    "title": "BROWSE_INSTITUTION_CATEGORIES",
                    "url": "/categories"
                }, {
                    "title": "VIEW_THE_INSTITUTION_WEBSITE",
                    "url": "http://sakaiproject.org/"
                }, {
                    "title": "VISIT_THE_SUPPORT_FORUM",
                    "url": "http://sakaiproject.org/"
                }],
                getInTouch: [{
                    "title": "SEND_US_YOUR_FEEDBACK",
                    "url": "http://sakaiproject.org/"
                }, {
                    "title": "CONTACT_SUPPORT",
                    "url": "http://sakaiproject.org/"
                }]
            }
        },

        Domain: {
            /*
             * These domain labels can be used anywhere on the site (i.e in the video
             * widget) to convert common domains into shorter, more readable labels
             * for display purposes.
             */
            Labels: {
                "youtube.com": "YouTube",
                "www.youtube.com": "YouTube",
                "youtube.co.uk": "YouTube",
                "www.youtube.co.uk": "YouTube",
                "vimeo.com": "Vimeo",
                "www.vimeo.com": "Vimeo",
                "vimeo.co.uk": "Vimeo",
                "www.vimeo.co.uk": "Vimeo",
                "video.google.com": "Google Video"
            }
        },

        Search: {
            MAX_CORRECT_SEARCH_RESULT_COUNT: 100
        },

        SakaiDomain: window.location.protocol + "//" + window.location.host,

        Permissions: {
            /*
             * A collection of permission keys and range of values to be referenced
             * for making permissions decisions. The values of properties are only
             * for reference, may not match designs and are not to be placed in the
             * UI (message bundles should be used to match up-to-date designs).
             */
            Groups: {
                joinable: {
                    "manager_add": "no", // Managers add people
                    "user_direct": "yes", // People can automatically join
                    "user_request": "withauth" // People request to join
                },
                visible: {
                    "members": "members-only", // Group members only (includes managers)
                    "allusers": "logged-in-only", // All logged in users
                    "public": "public" // Anyone on the Internet
                },
                "defaultaccess": "public", // public, logged-in-only or members-only (see above for role description)
                "defaultjoin": "yes", // no, yes, or withauth (see above for descriptions)
                "addcontentmanagers": true // true, false. If set to yes, group managers will be added as manager for a file 
                                           // added to a group library in context of that group
            },
            Content: {
                /*
                 * public - anyone
                 * everyone - logged in users
                 * private - private
                 */
                "defaultaccess": "public" // public, everyone or private (see above for role description)
            },
            Documents: {
                /*
                 * public - anyone
                 * everyone - logged in users
                 * private - private
                 */
                "defaultaccess": "public" // public, everyone or private (see above for role description)
            },
            Links: {
                "defaultaccess": "public" // public, everyone or private (see above for role description)
            },
            Copyright: {
                types: {
                    "creativecommons": {
                        "title": "CREATIVE_COMMONS_LICENSE"
                    },
                    "copyrighted": {
                        "title": "COPYRIGHTED"
                    },
                    "nocopyright": {
                        "title": "NO_COPYRIGHT"
                    },
                    "licensed": {
                        "title": "LICENSED"
                    },
                    "waivecopyright": {
                        "title": "WAIVE_COPYRIGHT"
                    }
                },
                defaults: {
                    "content": "creativecommons",
                    "sakaidocs": "creativecommons",
                    "links": "creativecommons",
                    "collections": "creativecommons"
                }
            }
        },

        allowPasswordChange: true,

        Profile: {
            /*
             * This is a collection of profile configuration functions and settings
             * The structure of the config object is identical to the storage object
             * When system/me returns profile data for the logged in user the profile_config and profile_data objects could be merged
             * "label": the internationalizable message for the entry label in HTML
             * "required": {Boolean} Whether the entry is compulsory or not
             * "display": {Boolean} Show the entry in the profile or not
             * "editable": {Boolean} Whether or not the entry is editable
             * For a date entry field use "date" as the type for MM/dd/yyyy and "dateITA" as the type for dd/MM/yyyy
             *
             */
            configuration: {

                defaultConfig: {

                    "basic": {
                        "label": "__MSG__PROFILE_BASIC_LABEL__",
                        "required": true,
                        "display": true,
                        "access": "everybody",
                        "modifyacl": false,
                        "permission": "anonymous",
                        "order": 0,
                        "elements": {
                            "firstName": {
                                "label": "__MSG__PROFILE_BASIC_FIRSTNAME_LABEL__",
                                "errorMessage": "__MSG__PROFILE_BASIC_FIRSTNAME_ERROR__",
                                "required": true,
                                "display": true,
                                "limitDisplayLength": 50
                            },
                            "lastName": {
                                "label": "__MSG__PROFILE_BASIC_LASTNAME_LABEL__",
                                "errorMessage": "__MSG__PROFILE_BASIC_LASTNAME_ERROR__",
                                "required": true,
                                "display": true,
                                "limitDisplayLength": 50
                            },
                            "picture": {
                                "label": "__MSG__PROFILE_BASIC_PICTURE_LABEL__",
                                "required": false,
                                "display": false
                            },
                            "preferredName": {
                                "label": "__MSG__PROFILE_BASIC_PREFERREDNAME_LABEL__",
                                "required": false,
                                "display": true
                            },
                            "email": {
                                "label": "__MSG__PROFILE_BASIC_EMAIL_LABEL__",
                                "errorMessage": "__MSG__PROFILE_BASIC_EMAIL_ERROR__",
                                "required": true,
                                "display": true,
                                "validation": "email"
                            },
                            "status": {
                                "label": "__MSG__PROFILE_BASIC_STATUS_LABEL__",
                                "required": false,
                                "display": false
                            },
                            "role": {
                                "label": "__MSG__PROFILE_BASIC_ROLE_LABEL__",
                                "required": false,
                                "display": true,
                                "type": "select",
                                "select_elements": {
                                    "academic_related_staff": "__MSG__PROFILE_BASIC_ROLE_ACADEMIC_RELATED_STAFF_LABEL__",
                                    "academic_staff": "__MSG__PROFILE_BASIC_ROLE_ACADEMIC_STAFF_LABEL__",
                                    "assistent_staff": "__MSG__PROFILE_BASIC_ROLE_ASSISTENT_STAFF_LABEL__",
                                    "graduate_student": "__MSG__PROFILE_BASIC_ROLE_GRADUATE_STUDENT_LABEL__",
                                    "undergraduate_student": "__MSG__PROFILE_BASIC_ROLE_UNDERGRADUATE_STUDENT_LABEL__",
                                    "non_academic_staff": "__MSG__PROFILE_BASIC_ROLE_NON_ACADEMIC_STAFF_LABEL__",
                                    "postgraduate_student": "__MSG__PROFILE_BASIC_ROLE_POSTGRADUATE_STUDENT_LABEL__",
                                    "research_staff": "__MSG__PROFILE_BASIC_ROLE_RESEARCH_STAFF_LABEL__",
                                    "other": "__MSG__PROFILE_BASIC_ROLE_OTHER_LABEL__"
                                }
                            },
                            "department": {
                                "label": "__MSG__PROFILE_BASIC_DEPARTMENT_LABEL__",
                                "required": false,
                                "display": true
                            },
                            "college": {
                                "label": "__MSG__PROFILE_BASIC_COLLEGE_LABEL__",
                                "required": false,
                                "display": true
                            },
                            "tags": {
                                "label": "__MSG__TAGS_AND_CATEGORIES__",
                                "required": false,
                                "display": true,
                                "type": "tags",
                                "tagField": true
                            }
                        }
                    },
                    "aboutme": {
                        "label": "__MSG__PROFILE_ABOUTME_LABEL__",
                        "required": true,
                        "display": true,
                        "access": "everybody",
                        "modifyacl": true,
                        "permission": "anonymous",
                        "order": 1,
                        "elements": {
                            "aboutme": {
                                "label": "__MSG__PROFILE_ABOUTME_LABEL__",
                                "required": false,
                                "display": true,
                                "type": "textarea"
                            },
                            "academicinterests": {
                                "label": "__MSG__PROFILE_ABOUTME_ACADEMICINTERESTS_LABEL__",
                                "required": false,
                                "display": true,
                                "type": "textarea"
                            },
                            "personalinterests": {
                                "label": "__MSG__PROFILE_ABOUTME_PERSONALINTERESTS_LABEL__",
                                "required": false,
                                "display": true,
                                "type": "textarea"
                            },
                            "hobbies": {
                                "label": "__MSG__PROFILE_ABOUTME_HOBBIES_LABEL__",
                                "required": false,
                                "display": true
                            }
                        }
                    },
                    "publications": {
                        "label": "__MSG__PROFILE_PUBLICATIONS_LABEL__",
                        "required": false,
                        "display": true,
                        "access": "everybody",
                        "modifyacl": true,
                        "permission": "anonymous",
                        "multiple": true,
                        "multipleLabel": "__MSG__PROFILE_PUBLICATION_LABEL__",
                        "order": 2,
                        //"template": "profile_section_publications_template",
                        "elements": {
                            "maintitle": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_MAIN_TITLE__",
                                "required": true,
                                "display": true,
                                "example": "__MSG__PROFILE_PUBLICATIONS_MAIN_TITLE_EXAMPLE__"
                            },
                            "mainauthor": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_MAIN_AUTHOR__",
                                "required": true,
                                "display": true
                            },
                            "coauthor": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_CO_AUTHOR__",
                                "required": false,
                                "display": true,
                                "example": "__MSG__PROFILE_PUBLICATIONS_CO_AUTHOR_EXAMPLE__"
                            },
                            "publisher": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_PUBLISHER__",
                                "required": true,
                                "display": true
                            },
                            "placeofpublication": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_PLACE_OF_PUBLICATION__",
                                "required": true,
                                "display": true
                            },
                            "volumetitle": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_VOLUME_TITLE__",
                                "required": false,
                                "display": true
                            },
                            "volumeinformation": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_VOLUME_INFORMATION__",
                                "required": false,
                                "display": true,
                                "example": "__MSG__PROFILE_PUBLICATIONS_VOLUME_INFORMATION_EXAMPLE__"
                            },
                            "year": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_YEAR__",
                                "required": true,
                                "display": true
                            },
                            "number": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_NUMBER__",
                                "required": false,
                                "display": true
                            },
                            "series title": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_SERIES_TITLE__",
                                "required": false,
                                "display": true
                            },
                            "url": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_URL__",
                                "required": false,
                                "display": true,
                                "validation": "appendhttp url"
                            }
                        }
                    }
                }
            },
            /*
             * set what name to display where only the first name is used
             */
            userFirstNameDisplay: "firstName",

            /*
             * set how the user's name is displayed across the entire system
             * - values can be compound, like "firstName lastName" or singular like "displayName"
             */
            userNameDisplay: "firstName lastName",

            /*
             * the default, if the user doesn't have the userNameDisplay property set in their
             * profile, use this one.
             * Note: the value for userNameDisplay and this value can be the same.
             *       If neither exists, nothing will show
             */
            userNameDefaultDisplay: "firstName lastName",

            /*
             * Set the user's short description to appear underneath their name
             * in search results
             */
            userShortDescription: "${role} in ${department} at ${college}",
            groupShortDescription: "asdf",

            /*
             * Set the default user settings in account preferences for automatic tagging
             * and auto-tagged notifications
             */
            defaultAutoTagging: true,
            defaultSendTagMsg: true
        },

        Groups: {
            /*
             * Email message that will be sent to group managers when a user requests
             * to join their group.
             * ${user} will be replaced by the name of the requesting user and ${group}
             * will be replaced with the group name.
             */
            JoinRequest: {
                title: "${user} has requested to join your group: ${group}",
                body: "${user} has requested to join your group: ${group}. Use the links below to respond to this request."
            }
        },

        Site: {
            Styles: {
                original: {
                    name: "Original sakai theme",
                    image: "/dev/images/sakai_grey.png",
                    URL: "/dev/skins/original/original.html"
                },
                camuniversity: {
                    name: "Cambridge University theme",
                    image: "/dev/skins/camuniversity/images/camuniversity.png",
                    URL: "/dev/skins/camuniversity/camuniversity.html"
                }
            },
            DefaultMember: "viewers"
        },

        SystemTour: {
            "enableReminders": true,
            "reminderIntervalHours": "168"
        },

        // Set this to true if you have an authentication system such as CAS
        // that needs to redirect the user's browser on logout
        followLogoutRedirects: false,

        // Set this to the hostname of your CLE instance if you're using CAS
        // proxy tickets
        hybridCasHost: false,

        Messages: {
            Types: {
                inbox: "inbox",
                sent: "sent",
                trash: "trash"
            },
            Categories: {
                message: "Message",
                announcement: "Announcement",
                chat: "Chat",
                invitation: "Invitation"
            },
            Subject: "subject",
            Type: "type",
            Body: "body",
            To: "to",
            read: "read"
        },
        Extensions:{
            "docx":"application/doc",
            "doc":"application/doc",
            "odt":"application/doc",
            "ods":"application/vnd.ms-excel",
            "xls":"application/vnd.ms-excel",
            "xlsx":"application/vnd.ms-excel",
            "odp":"application/vnd.ms-powerpoint",
            "ppt":"application/vnd.ms-powerpoint",
            "pptx":"application/vnd.ms-powerpoint",
            "odg":"image/jpeg",
            "png":"image/png",
            "jp2":"images/jp2",
            "jpg":"image/jpeg",
            "jpeg":"image/jpeg",
            "bmp":"image/bmp",
            "gif":"image/gif",
            "tif":"image/tiff",
            "tiff":"images/tiff",
            "pdf":"application/x-pdf",
            "swf":"application/x-shockwave-flash",
            "flv":"video/x-msvideo",
            "mpg":"video/x-msvideo",
            "mpeg":"video/x-msvideo",
            "mp4":"video/x-msvideo",
            "avi":"video/x-msvideo",
            "mov":"video/x-msvideo",
            "txt":"text/rtf",
            "rtf":"text/rtf",
            "htm":"text/html",
            "html":"text/html",
            "wav": "audio/x-wav",
            "mp3": "audio/mpeg",
            "tar": "application/zip",
            "zip": "application/zip",
            "other":"other"
        },
        MimeTypes: {
            "application/doc": {
                cssClass: "icon-doc-sprite",
                URL: "/dev/images/mimetypes/doc.png",
                description: "WORD_DOCUMENT"
            },
            "application/msword": {
                cssClass: "icon-doc-sprite",
                URL: "/dev/images/mimetypes/doc.png",
                description: "WORD_DOCUMENT"
            },
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
                cssClass: "icon-doc-sprite",
                URL: "/dev/images/mimetypes/doc.png",
                description: "WORD_DOCUMENT"
            },
            "application/pdf": {
                cssClass: "icon-pdf-sprite",
                URL: "/dev/images/mimetypes/pdf.png",
                description: "PDF_DOCUMENT"
            },
            "application/x-download": {
                cssClass: "icon-pdf-sprite",
                URL: "/dev/images/mimetypes/pdf.png",
                description: "PDF_DOCUMENT"
            },
            "application/x-pdf": {
                cssClass: "icon-pdf-sprite",
                URL: "/dev/images/mimetypes/pdf.png",
                description: "PDF_DOCUMENT"
            },
            "application/vnd.ms-powerpoint": {
                cssClass: "icon-pps-sprite",
                URL: "/dev/images/mimetypes/pps.png",
                description: "POWERPOINT_DOCUMENT"
            },
            "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
                cssClass: "icon-pps-sprite",
                URL: "/dev/images/mimetypes/pps.png",
                description: "POWERPOINT_DOCUMENT"
            },
            "application/vnd.oasis.opendocument.text": {
                cssClass: "icon-doc-sprite",
                URL: "/dev/images/mimetypes/doc.png",
                description: "OPEN_OFFICE_DOCUMENT"
            },
            "application/vnd.oasis.opendocument.presentation": {
                cssClass: "icon-pps-sprite",
                URL: "/dev/images/mimetypes/pps.png",
                description: "OPEN_OFFICE_PRESENTATION"
            },
            "application/vnd.oasis.opendocument.spreadsheet": {
                cssClass: "icon-pps-sprite",
                URL: "/dev/images/mimetypes/spreadsheet.png",
                description: "OPEN_OFFICE_SPREADSHEET"
            },

            "application/x-shockwave-flash": {
                cssClass: "icon-swf-sprite",
                URL: "/dev/images/mimetypes/swf.png",
                description: "FLASH_PLAYER_FILE"
            },
            "application/zip": {
                cssClass: "icon-zip-sprite",
                URL: "/dev/images/mimetypes/zip.png",
                description: "ARCHIVE_FILE"
            },
            "application/x-zip-compressed": {
                cssClass: "icon-zip-sprite",
                URL: "/dev/images/mimetypes/zip.png",
                description: "ARCHIVE_FILE"
            },
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
                cssClass: "icon-spreadsheet-sprite",
                URL: "/dev/images/mimetypes/spreadsheet.png",
                description: "SPREADSHEET_DOCUMENT"
            },
            "application/vnd.ms-excel": {
                cssClass: "icon-spreadsheet-sprite",
                URL: "/dev/images/mimetypes/spreadsheet.png",
                description: "SPREADSHEET_DOCUMENT"
            },
            "audio/x-wav": {
                cssClass: "icon-audio-sprite",
                URL: "/dev/images/mimetypes/sound.png",
                description: "SOUND_FILE"
            },
            "audio/mpeg": {
                cssClass: "icon-audio-sprite",
                URL: "/dev/images/mimetypes/sound.png",
                description: "SOUND_FILE"
            },
            "text/plain": {
                cssClass: "icon-txt-sprite",
                URL: "/dev/images/mimetypes/txt.png",
                description: "TEXT_DOCUMENT"
            },
            "text/rtf": {
                cssClass: "icon-txt-sprite",
                URL: "/dev/images/mimetypes/txt.png",
                description: "TEXT_DOCUMENT"
            },
            "image/png": {
                cssClass: "icon-image-sprite",
                URL: "/dev/images/mimetypes/images.png",
                description: "PNG_IMAGE"
            },
            "image/bmp": {
                cssClass: "icon-image-sprite",
                URL: "/dev/images/mimetypes/images.png",
                description: "BMP_IMAGE"
            },
            "image/gif": {
                cssClass: "icon-image-sprite",
                URL: "/dev/images/mimetypes/images.png",
                description: "GIF_IMAGE"
            },
            "image/jp2": {
                cssClass: "icon-image-sprite",
                URL: "/dev/images/mimetypes/images.png",
                description: "JPG2000_IMAGE"
            },
            "image/jpeg": {
                cssClass: "icon-image-sprite",
                URL: "/dev/images/mimetypes/images.png",
                description: "JPG_IMAGE"
            },
            "image/pjpeg": {
                cssClass: "icon-image-sprite",
                URL: "/dev/images/mimetypes/images.png",
                description: "JPG_IMAGE"
            },
            "image/tiff": {
                cssClass: "icon-image-sprite",
                URL: "/dev/images/mimetypes/images.png",
                description: "TIFF_IMAGE"
            },
            "text/html": {
                cssClass: "icon-html-sprite",
                URL: "/dev/images/mimetypes/html.png",
                description: "HTML_DOCUMENT"
            },
            "video/x-msvideo": {
                cssClass: "icon-video-sprite",
                URL: "/dev/images/mimetypes/video.png",
                description: "VIDEO_FILE"
            },
            "video/mp4": {
                cssClass: "icon-video-sprite",
                URL: "/dev/images/mimetypes/video.png",
                description: "VIDEO_FILE"
            },
            "video/quicktime": {
                cssClass: "icon-video-sprite",
                URL: "/dev/images/mimetypes/video.png",
                description: "VIDEO_FILE"
            },
            "video/x-ms-wmv": {
                cssClass: "icon-video-sprite",
                URL: "/dev/images/mimetypes/video.png",
                description: "VIDEO_FILE"
            },
            "folder": {
                cssClass: "icon-kmultiple-sprite",
                URL: "/dev/images/mimetypes/kmultiple.png",
                description: "FOLDER"
            },
            "x-sakai/link": {
                cssClass: "icon-url-sprite",
                URL: "/dev/images/mimetypes/html.png",
                description: "URL_LINK"
            },
            "x-sakai/document": {
                cssClass: "icon-sakaidoc-sprite",
                URL: "/dev/images/mimetypes/sakaidoc.png",
                description: "DOCUMENT"
            },
            "x-sakai/collection": {
                cssClass: "icon-collection-sprite",
                URL: "/dev/images/mimetypes/collection.png",
                description: "COLLECTION"
            },
            "kaltura/video": {
                cssClass: "icon-video-sprite",
                URL: "/dev/images/mimetypes/video.png",
                description: "VIDEO_FILE"
            },
            "kaltura/audio": {
                cssClass: "icon-sound-sprite",
                URL: "/dev/images/mimetypes/sound.png",
                description: "SOUND_FILE"
            },
            "other": {
                cssClass: "icon-unknown-sprite",
                URL: "/dev/images/mimetypes/unknown.png",
                description: "OTHER_DOCUMENT"
            }
        },

        Authentication: {
            "allowInternalAccountCreation": true,
            "internal": true,
            "external": [{
                label: "External Login System 1",
                url: "http://external.login1.com/"
            }, {
                label: "External Login System 2",
                url: "http://external.login2.com/"
            }],
            "hideLoginOn": ["/dev", "/dev/index.html", "/dev/create_new_account.html"]
        },

        notification: {
            type: {
                ERROR: {
                    image: "/dev/images/notifications_exclamation_icon.png",
                    time: 10000
                },
                INFORMATION: {
                    image: "/dev/images/notifications_info_icon.png",
                    time: 5000
                }
            }
        },

        Navigation: [{
            "url": "/me#l=dashboard",
            "id": "navigation_you_link",
            "anonymous": false,
            "label": "YOU",
            "append": "messages",
            "subnav": [{
                "url": "/me#l=dashboard",
                "id": "subnavigation_home_link",
                "label": "MY_HOME"
            }, {
                "url": "/me#l=messages/inbox",
                "id": "subnavigation_messages_link",
                "label": "MY_MESSAGES"
            }, {
                "id": "subnavigation_hr"
            }, {
                "url": "/me#l=profile/basic",
                "id": "subnavigation_profile_link",
                "label": "MY_PROFILE"
            }, {
                "url": "/me#l=library",
                "id": "subnavigation_content_link",
                "label": "MY_LIBRARY"
            }, {
                "url": "/me#l=memberships",
                "id": "subnavigation_memberships_link",
                "label": "MY_MEMBERSHIPS"
            }, {
                "url": "/me#l=contacts",
                "id": "subnavigation_contacts_link",
                "label": "MY_CONTACTS_CAP"
            }]
        }, {
            "url": "#",
            "id": "navigation_create_and_add_link",
            "anonymous": false,
            "label": "CREATE_AND_COLLECT",
            "append": "collections",
            "subnav": [{
                "id": "subnavigation_add_content_link",
                "label": "ADD_CONTENT",
                "url": "#"
            }, {
                "id": "subnavigation_add_collection_link",
                "label": "ADD_COLLECTION",
                "url": "#"
            }, {
                "id": "subnavigation_hr"
            }]
        }, {
            "url": "/index",
            "id": "navigation_explore_link",
            "anonymous": false,
            "label": "EXPLORE",
            "subnav": [{
                "id": "subnavigation_explore_categories_link",
                "label": "BROWSE_ALL_CATEGORIES",
                "url": "/categories"
            },{
                "id": "subnavigation_hr"
            },{
                "id": "subnavigation_explore_content_link",
                "label": "CONTENT",
                "url": "/search#l=content"
            }, {
                "id": "subnavigation_explore_people_link",
                "label": "PEOPLE",
                "url": "/search#l=people"
            }]
        }, {
            "url": "/index",
            "id": "navigation_anon_explore_link",
            "anonymous": true,
            "label": "EXPLORE",
            "subnav": [{
                "id": "subnavigation_explore_categories_link",
                "label": "BROWSE_ALL_CATEGORIES",
                "url": "/categories"
            },{
                "id": "subnavigation_hr"
            },{
                "id": "subnavigation_explore_content_link",
                "label": "CONTENT",
                "url": "/search#l=content"
            }, {
                "id": "subnavigation_explore_people_link",
                "label": "PEOPLE",
                "url": "/search#l=people"
            }]
        }, {
            "url": "/register",
            "id": "navigation_anon_signup_link",
            "anonymous": true,
            "label": "SIGN_UP"
        }],

        /*
         * Are anonymous users allowed to browse/search
         */
        anonAllowed: true,
        /*
         * List of pages that require a logged in user
         */
        requireUser: ["/me", "/dev/me.html", "/dev/search_sakai2.html", "/create", "/dev/createnew.html"],

        /*
         * List of pages that require an anonymous user
         */
        requireAnonymous: ["/register", "/dev/create_new_account.html"],
        /*
         * List of pages that will be added to requireUser if
         * anonAllowed is false
         */
        requireUserAnonNotAllowed: ["/me", "/dev/me.html", "/dev/search_sakai2.html"],
        /*
         * List of pages that will be added to requireAnonymous if
         * anonAllowed is false
         */
        requireAnonymousAnonNotAllowed: [],
        /*
         * List op pages that require additional processing to determine
         * whether the page can be shown to the current user. These pages
         * are then required to call the sakai.api.Security.showPage
         * themselves
         */
        requireProcessing: ["/dev/user.html", "/me" ,"/dev/me.html", "/dev/content_profile.html", "/dev/content_profile.html", "/dev/group_edit.html", "/dev/show.html", "/content"],

        useLiveSakai2Feeds: false,
        /*
         * List of custom CLE Tool names. This can be used to override the translated
         * tool name in the Sakai 2 Tools Widget drop down, or name a custom CLE tool
         * that has been added to your CLE installation. You can see the list of
         * enabled CLE tools at /var/basiclti/cletools.json, and configure them in
         * Nakamura under the org.sakaiproject.nakamura.basiclti.CLEVirtualToolDataProvider
         * configuration.
         */
        sakai2ToolNames: {
            /* "sakai.mytoolId" : "My Custom Tool Title" */
        },

        displayDebugInfo: false,
      
        // Array of css files to load in each page
        skinCSS: ["/dev/skins/campus/campus.css"],

        Languages: [{
            "country": "PT",
            "language": "pt",
            "displayName": "Português"
        }, {
            "country": "GB",
            "language": "en",
            "displayName": "English (United Kingdom)"
        }, {
            "country": "US",
            "language": "en",
            "displayName": "English (United States)"
        }],

        // Default Language for the deployment, must be one of the language_COUNTRY pairs that exists above
        defaultLanguage: "pt_PT",

        defaultUserTemplate: "defaultuser",
        defaultGroupTemplate: "defaultgroup",

        enableChat: true,
        enableCategories: true,

        Editor: {
            tinymceLanguagePacks: ['ar','ch','en','gl','id','lb','nb','ru','sv','uk','az','cn','eo','gu','is','lt','nl',
                'sc','ta','ur','be','cs','es','he','it','lv','nn','se','te','vi','bg','cy','et','hi','ja','mk','no','si',
                'th','zh-cn','bn','da','eu','hr','ka','ml','pl','sk','tn','zh-tw','br','de','fa','hu','kl','mn','ps','sl',
                'tr','zh','bs','dv','fi','hy','km','ms','pt','sq','tt','zu','ca','el','fr','ia','ko','my','ro','sr','tw']
        },

        defaultSakaiDocContent: "",

        /*
         * _canEdit: can change the area permissions on this page
         * _reorderOnly: can reorder this item in the navigation, but cannot edit the name of the page
         * _nonEditable: cannot edit the contents of this page
         * _canSubedit:
         */

        

        widgets: {
            "groups": ["Administrators", "Lecturers & Supervisors", "Researchers", "Students"],
            "layouts": {
                "onecolumn": {
                    "name": "One column",
                    "widths": [100],
                    "siteportal": true
                },
                "dev": {
                    "name": "Dev Layout",
                    "widths": [50, 50],
                    "siteportal": true
                },
                "threecolumn": {
                    "name": "Three equal columns",
                    "widths": [33, 33, 33],
                    "siteportal": false
                }
            },
            "defaults": {
                "personalportal": {
                    "layout": "dev",
                    "columns": [["mygroups", "mycontacts"], ["mycontent", "recentmessages"]]
                },
                "siteportal": {
                    "layout": "dev",
                    "columns": [["sitemembers"], []]
                }
            }
        }
    };

    return config;
});
