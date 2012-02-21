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
define(["config/config"], function(config) {

    // Custom CSS Files to load in
    // config.skinCSS = ["/dev/skins/default/skin.css"];

    /**
     * Kaltura Settings
     */
    config.kaltura = {
        enabled: false, // Enable/disable Kaltura player
        serverURL:  "http://www.kaltura.com", //INSERT_KALTURA_INSTALLATION_URL_HERE
        partnerId:  816072, //INSERT_YOUR_PARTNER_ID_HERE vida2009!!
        playerId: 100 //INSERT_YOUR_PLAYER_ID_HERE
    };
        
    config.Profile.configuration.defaultConfig = {
        "basic": {
            "label": "__MSG__PROFILE_BASIC_LABEL__",
            "required": true,
            "display": true,
            "access": "everybody",
            "modifyacl": true,
            "permission": "anonymous",
            "order": 0,
            "elements": {
                "firstName": { // Google: given_name
                    "label": "__MSG__PROFILE_BASIC_FIRSTNAME_LABEL__",
                    "errorMessage": "__MSG__PROFILE_BASIC_FIRSTNAME_ERROR__",
                    "required": true,
                    "display": true,
                    "limitDisplayLength": 50
                },
                "lastName": { // Google: family_name
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
                    "display": false,
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
                    "display": false,
                    "type": "select",
                    "select_elements": {
                        "academic_related_staff": "__MSG__PROFILE_BASIC_ROLE_ACADEMIC_RELATED_STAFF_LABEL__",
                        "academic_staff": "__MSG__PROFILE_BASIC_ROLE_ACADEMIC_STAFF_LABEL__",
                        "assistent_staff": "__MSG__PROFILE_BASIC_ROLE_ASSISTENT_STAFF_LABEL__",
                        "individual_student": "__MSG__PROFILE_BASIC_ROLE_INDIVIDUAL_STUDENT_LABEL__",
                        "college_student": "__MSG__PROFILE_BASIC_ROLE_COLLEGE_STUDENT_LABEL__",
                        "non_academic_staff": "__MSG__PROFILE_BASIC_ROLE_NON_ACADEMIC_STAFF_LABEL__",
                        "company_student": "__MSG__PROFILE_BASIC_ROLE_COMPANY_STUDENT_LABEL__",
                        "research_staff": "__MSG__PROFILE_BASIC_ROLE_RESEARCH_STAFF_LABEL__",
                        "other": "__MSG__PROFILE_BASIC_ROLE_OTHER_LABEL__"
                     }
                },
                "department": {
                    "label": "__MSG__PROFILE_BASIC_DEPARTMENT_LABEL__",
                    "required": false,
                    "display": false
                },
                "college": {
                    "label": "__MSG__PROFILE_BASIC_COLLEGE_LABEL__",
                    "required": false,
                    "display": false
                },
                "tags": {
                    "label": "__MSG__TAGS_AND_CATEGORIES__",
                    "required": false,
                    "display": true,
                    "type": "tags",
                    "tagField": true
                },
                "user_token": {
                    "label": "__MSG__PROFILE_BASIC_USER_TOKEN_LABEL__",
                    "required": false,
                    "display": false
                },
                "freshbooks_client_id": {
                    "label": "__MSG__PROFILE_BASIC_FRESHBOOKS_CLIENT_ID_LABEL__",
                    "required": false,
                    "display": false
                }
            }
        },
        "aboutme": {
            "label": "__MSG__PROFILE_ABOUTME_LABEL__",
            "required": true,
            "display": true,
            "access": "everybody",
            "modifyacl": true,
            "permission": "everyone",
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
                    "display": true,
                    "type": "textarea"
                },
                "gender": {
                    "label": "__MSG__PROFILE_BASIC_SEX_LABEL__",
                    "required": false,
                    "display": true,
                    "type": "select",
                    "select_elements": {
                        "male": "__MSG__PROFILE_BASIC_SEX_MALE_LABEL__",
                        "female": "__MSG__PROFILE_BASIC_SEX_FEMALE_LABEL__",
                        "other": "__MSG__PROFILE_BASIC_SEX_OTHER_LABEL__"
                    }
                },
                "birth": {
                    "label": "__MSG__DATE_OF_BIRTH__",
                    "required": false,
                    "display": true,
                    "type": "dateITA",
                    "validation": "date"
                },
                "preferredLanguague": {
                    "label": "Língua Preferida",
                    "required": false,
                    "display": true,
                    "type": "select",
                    "select_elements": {
                        "portugues": "Português",
                        "ingles": "English",
                        "espanhol": "Español",
                        "frances": "Français"
                    }
                }
            }
        },
        "contact": {
            "label": "Contactos",
            "required": true,
            "display": true,
            "access": "everybody",
            "modifyacl": true,
            "permission": "everyone",
            "order": 2,
            "elements": {
                "contactaddress": {
                    "label": "__MSG__PROFILE_CONTACT_ADDRESS__",
                    "required": false,
                    "display": true,
                    "type": "textarea"
                },
                "contactphone": {
                    "label": "__MSG__PROFILE_CONTACT_PHONE__",
                    "required": false,
                    "display": true
                },
                "contactmobile": {
                    "label": "__MSG__PROFILE_CONTACT_MOBILE__",
                    "required": false,
                    "display": true
                },
                "contactmail": {
                    "label": "__MSG__PROFILE_CONTACT_EMAIL__",
                    "errorMessage": "__MSG__PROFILE_BASIC_EMAIL_ERROR__",
                    "required": false,
                    "display": true,
                    "validation": "email"
                },
                "facebook": {
                    "label": "Facebook",
                    "required": false,
                    "display": true
                },
                "twitter": {
                    "label": "Twitter",
                    "required": false,
                    "display": true
                },
                "googleplus": {
                    "label": "Google+",
                    "required": false,
                    "display": true
                },
                "linkedid": {
                    "label": "LinkedId",
                    "required": false,
                    "display": true
                }
            }
        }
    };
            /*
             * Set the user's short description to appear underneath their name
             * in search results
             */
    config.Profile.userShortDescription = "${role} no Campus";

            /*
             * Set the default user settings in account preferences for automatic tagging
             * and auto-tagged notifications
             */
    config.Profile.defaultAutoTagging = true;
    config.Profile.defaultSendTagMsg = true;
        
    config.Relationships = {
            /*
             * Relationships used by the add contacts widget to define what relationship the contacts can have
             */
            "contacts": [{
                "name": "__MSG__CLASSMATE__",
                "definition": "__MSG__IS_MY_CLASSMATE__",
                "selected": true
            //}, {
            //    "name": "__MSG__SUPERVISOR__",
            //    "inverse": "__MSG__SUPERVISED__",
            //    "definition": "__MSG__IS_MY_SUPERVISOR__",
            //    "selected": false
            //}, {
            //    "name": "__MSG__SUPERVISED__",
            //    "inverse": "__MSG__SUPERVISOR__",
            //    "definition": "__MSG__IS_SUPERVISED_BY_ME__",
            //    "selected": false
            }, {
                "name": "__MSG__LECTURER__",
                "inverse": "__MSG__STUDENT__",
                "definition": "__MSG__IS_MY_LECTURER__",
                "selected": false
            }, {
                "name": "__MSG__STUDENT__",
                "inverse": "__MSG__LECTURER__",
                "definition": "__MSG__IS_MY_STUDENT__",
                "selected": false
            }, {
                "name": "__MSG__COLLEAGUE__",
                "definition": "__MSG__IS_MY_COLLEAGUE__",
                "selected": false
            }, {
                "name": "__MSG__COLLEGE_MATE__",
                "definition": "__MSG__IS_MY_COLLEGE_MATE__",
                "selected": false
            }, {
                "name": "__MSG__SHARES_INTERESTS__",
                "definition": "__MSG__SHARES_INTEREST_WITH_ME__",
                "selected": false
            }]
        };
    
    config.Directory = {
            sustentabilidadesocial: {
                title: "__MSG__SUSTENTABILIDADE_SOCIAL__",
                children: {
                    comunidade: {
                        title: "__MSG__COMUNIDADE__",
                    },
                    culturadepaz: {
                        title: "__MSG__CULTURA_DE_PAZ__",
                    },
                    empoderamentopessoalelideranca: {
                        title: "__MSG__EMPODERAMENTO_PESSOAL_E_LIDERANCA__",
                    },
                    saudeecura: {
                        title: "__MSG__SAUDE_E_CURA__",
                    }
                }
            },
            sustentabilidadeeconomica: {
                title: "__MSG__SUSTENTABILIDADE_ECONOMICA__",
                children: {
                    transformaraeconomia: {
                        title: "__MSG__TRANSFORMAR_A_ECONOMIA__",
                    },
                    economiaalternativa: {
                        title: "__MSG__ECONOMIA_ALTERNATIVA__",
                    },
                    consumojusto: {
                        title: "__MSG__CONSUMO_JUSTO__",
                    }
                }
            },
            sustentabilidadeecologica: {
                title: "__MSG__SUSTENTABILIDADE_ECOLOGICA__",
                children: {
                    permacultura: {
                        title: "__MSG__PERMACULTURA__",
                    },
                    ecologiaprofunda: {
                        title: "__MSG__ECOLOGIA_PROFUNDA__",
                    },
                    bioconstrucao: {
                        title: "__MSG__BIO_CONSTRUCAO__",
                    },
		    biodinamica: {
                        title: "__MSG__BIO_DINAMICA__",
                    },
                    tecnologia: {
                        title: "__MSG__TECNOLOGIA__",
                    }
                }
            },
            visaodomundo: {
                title: "__MSG__VISAO_DO_MUNDO__",
                children: {
                    visaoholisticadomundo: {
                        title: "__MSG__VISAO_HOLISTICA_DO_MUNDO__",
                    },
                    reconectarsecomanatureza: {
                        title: "__MSG__RECONECTAR_SE_COM_A_NATUREZA__",
                    },
                    celebracaodavida: {
                        title: "__MSG__CELEBRACAO_DA_VIDA__",
                    }
                }
            }
        };
        
    config.ErrorPage = {
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
                    "url": "http://ser.sustentavel.com.pt/"
                }, {
                    "title": "VISIT_THE_SUPPORT_FORUM",
                    "url": "http://suporte.ser.sustentavel.com.pt/"
                }],
                getInTouch: [{
                    "title": "SEND_US_YOUR_FEEDBACK",
                    "url": "http://suporte.ser.sustentavel.com.pt/customer/portal/emails/new"
                }, {
                    "title": "CONTACT_SUPPORT",
                    "url": "http://ser.sustentavel.com.pt/suporte/contactos/"
                }]
            }
        };
        
    config.Footer = {
            leftLinks: [{
                "title": "__MSG__HOME_SER__",
                "href": "http://ser.sustentavel.com.pt/",
                "newWindow": true
            }, {
                "title": "__MSG__HELP__",
                "href": "http://wiki.ser.sustentavel.com.pt/",
                "newWindow": true
            }, {
                "title": "__MSG__PRIVACIDADE__",
                "href": "http://ser.sustentavel.com.pt/estaticas/privacidade/campus",
                "newWindow": true
            }, {
                "title": "__MSG__TERMOS__",
                "href": "http://ser.sustentavel.com.pt/estaticas/termos/campus",
                "newWindow": true
            }, {
                "title": "__MSG__COPYRIGHT__",
                "href": "http://ser.sustentavel.com.pt/estaticas/copyright/campus",
                "newWindow": true
            }],
            rightLinks: [{
                "title": "__MSG__COLABORA__",
                "href": "http://ser.sustentavel.com.pt/estaticas/colaboracao/campus",
                "newWindow": true
            }, {
                "title": "__MSG__ACKNOWLEDGEMENTS__",
                "href": "/acknowledgements"
            }, {
                "title": "__MSG__BROWSE__",
                "href": "/categories"
            }, {
                "title": "__MSG__EXPLORE__",
                "href": "/"
            }]
        };
        
    /**
         * In order to set permissions on specific private areas, the following parameter should be added:
         *   _view: "anonymous" // Area is visible to all users by default
         *   _view: "everyone" // Area is visible to all logged in users by default
         *   _view: "contacts" // Area is visible to all contacts by default
         *   _view: "private" // Area is not visible to other users by default
         */
    
    config.defaultprivstructure = {
            "structure0": {
                "dashboard": {
                    "_ref": "${refid}0",
                    "_title": "__MSG__MY_DASHBOARD__",
                    "_order": 0,
                    "_canEdit": true,
                    "_reorderOnly": true,
                    "_nonEditable": true,
                    "main": {
                        "_ref": "${refid}0",
                        "_order": 0,
                        "_title": "__MSG__MY_DASHBOARD__"
                    }
                },
                "messages": {
                    "_title": "__MSG__MY_MESSAGES__",
                    "_ref": "${refid}1",
                    "_order": 1,
                    "_canEdit": true,
                    "_reorderOnly": true,
                    "_canSubedit": true,
                    "_nonEditable": true,
                    "inbox": {
                        "_ref": "${refid}1",
                        "_order": 0,
                        "_title": "__MSG__INBOX__",
                        "_nonEditable": true
                    },
                    "invitations": {
                        "_ref": "${refid}2",
                        "_order": 1,
                        "_title": "__MSG__INVITATIONS__",
                        "_nonEditable": true
                    },
                    "sent": {
                        "_ref": "${refid}3",
                        "_order": 2,
                        "_title": "__MSG__SENT__",
                        "_nonEditable": true
                    },
                    "trash": {
                        "_ref": "${refid}4",
                        "_order": 3,
                        "_title": "__MSG__TRASH__",
                        "_nonEditable": true
                    }
                },
                "support": {
                    "_ref": "${refid}15",
                    "_order": 2,
                    "_title": "__MSG__SUPPORT__",
                    "_canEdit": true,
                    "_reorderOnly": true,
                    "_canSubedit": true,
                    "_nonEditable": true,
                    "subscriptions": {
                        "_title": "__MSG__SUBSCRIPTION__",
                        "_order": 0,
                        "_ref": "${refid}15",
                        "_nonEditable": true
                    },
                    "guiaestudante": {
                        "_title": "__MSG__GUIA_ESTUDANTE__",
                        "_order": 1,
                        "_ref": "${refid}16",
                        "_nonEditable": true
                    },
                    "foruns": {
                        "_title": "__MSG__FORUM_SUPPORT__",
                        "_order": 2,
                        "_ref": "${refid}17",
                        "_nonEditable": true
                    },
                    "surveys": {
                        "_title": "__MSG__SURVEY__",
                        "_order": 3,
                        "_ref": "${refid}18",
                        "_nonEditable": true
                    },
                    "contactus": {
                        "_title": "__MSG__CONTACTUS__",
                        "_order": 4,
                        "_ref": "${refid}19",
                        "_nonEditable": true
                    }
                }
            },
            "${refid}0": {
                "page": "<div class='fl-force-right'><button type='button' class='s3d-button s3d-margin"+
                "-top-5 s3d-header-button s3d-header-smaller-button dashboard_change_layout' dat"+
                "a-tuid='${refid}5'>__MSG__EDIT_LAYOUT__</button><button type='button' class='s3d-button "+
                "s3d-margin-top-5 s3d-header-button s3d-header-smaller-button dashboard_global_a"+
                "dd_widget' data-tuid='${refid}5'>__MSG__ADD_WIDGET__</button></div><div class='s3d-conte"+
                "ntpage-title'>__MSG__MY_DASHBOARD__</div><div id='widget_carousel' class='widget_inline'"+
                "></div><br/><div id='widget_dashboard_${refid}5' class='widget_inline'></div>"
            },
            "${refid}1": {
                "page": "<div id='widget_inbox_${refid}6' class='widget_inline'/>"
            },
            "${refid}2": {
                "page": "<div id='widget_inbox_${refid}7' class='widget_inline'/>"
            },
            "${refid}3": {
                "page": "<div id='widget_inbox_${refid}8' class='widget_inline'/>"
            },
            "${refid}4": {
                "page": "<div id='widget_inbox_${refid}9' class='widget_inline'/>"
            },
            "${refid}5": {
                "dashboard": {
                    "layout": "threecolumn",
                    "columns": {
                        "column1": [{
                            "uid": "${refid}10",
                            "visible": "block",
                            "name": "recentchangedcontent"
                        }],
                        "column2": [{
                            "uid": "${refid}11",
                            "visible": "block",
                            "name": "recentmemberships"
                        }],
                        "column3": [{
                            "uid": "${refid}12",
                            "visible": "block",
                            "name": "recentcontactsnew"
                        }]
                    }
                }
            },
            "${refid}6": {
                "box": "inbox",
                "category": "message",
                "title": "__MSG__INBOX__"
            },
            "${refid}7": {
                "box": "inbox",
                "category": "invitation",
                "title": "__MSG__INVITATIONS__"
            },
            "${refid}8": {
                "box": "outbox",
                "category": "*",
                "title": "__MSG__SENT__"
            },
            "${refid}9": {
                "box": "trash",
                "category": "*",
                "title": "__MSG__TRASH__"
            },
            "${refid}15": {
                "page": "<div id='widget_subscriptions' class='widget_inline'></div>"
            },
            "${refid}16": {
                "page": "<div id='widget_guiadoestudante' class='widget_inline'></div>"
            },
            "${refid}17": {
                "page": "<div id='widget_foruns' class='widget_inline'></div>"
            },
            "${refid}18": {
                "page": "<div id='widget_surveys' class='widget_inline'></div>"
            },
            "${refid}19":{
                "page": "<div id='widget_contactus' class='widget_inline'></div>"
            }
        };
        
    config.defaultpubstructure = {
            "structure0": {
                "profile": {
                    "_title": "__MSG__MY_PROFILE__",
                    "_altTitle": "__MSG__MY_PROFILE_OTHER__",
                    "_order": 0,
                    "_view": "contacts",
                    "_reorderOnly": true,
                    "_nonEditable": true
                },
                "library": {
                    "_ref": "${refid}0",
                    "_order": 1,
                    "_title": "__MSG__MY_LIBRARY__",
                    "_altTitle": "__MSG__MY_LIBRARY_OTHER__",
                    "_reorderOnly": true,
                    "_nonEditable": true,
                    "_view": "contacts",
                    "main": {
                        "_ref": "${refid}0",
                        "_order": 0,
                        "_title": "__MSG__MY_LIBRARY__"
                    }
                },
                "memberships": {
                    "_title": "__MSG__MY_MEMBERSHIPS__",
                    "_order": 2,
                    "_ref": "${refid}1",
                    "_altTitle": "__MSG__MY_MEMBERSHIPS_OTHER__",
                    "_reorderOnly": true,
                    "_nonEditable": true,
                    "_view": "contacts",
                    "main": {
                        "_ref": "${refid}1",
                        "_order": 0,
                        "_title": "__MSG__MY_MEMBERSHIPS__"
                    }
                },
                "contacts": {
                    "_title": "__MSG__MY_CONTACTS__",
                    "_order": 3,
                    "_ref": "${refid}2",
                    "_altTitle": "__MSG__MY_CONTACTS_OTHER__",
                    "_reorderOnly": true,
                    "_nonEditable": true,
                    "_view": "contacts",
                    "main": {
                        "_ref": "${refid}2",
                        "_order": 0,
                        "_title": "__MSG__MY_CONTACTS__"
                    }
                },
                "badges": {
                    "_title": "__MSG__MY_BADGES__",
                    "_order": 4,
                    "_ref": "${refid}3",
                    "_altTitle": "__MSG__MY_BADGES_OTHER__",
                    "_reorderOnly": true,
                    "_nonEditable": true,
                    "_view": "contacts",
                    "main": {
                        "_ref": "${refid}3",
                        "_order": 0,
                        "_title": "__MSG__MY_BADGES__"
                    }
                }
            },
            "${refid}0": {
                "page": "<div id='widget_mylibrary' class='widget_inline'></div>"
            },
            "${refid}1": {
                "page": "<div id='widget_joinrequestbuttons' class='widget_inline'></div> " +
                    "<div id='widget_tooltip' class='widget_inline'></div> " +
                    "<div id='widget_mymemberships' class='widget_inline'></div>"
            },
            "${refid}2": {
                "page": "<div id='widget_contacts' class='widget_inline'></div>"
            },
            "${refid}3": {
                "page": "<div id='widget_badges' class='widget_inline'></div>"
            }
        };
    
    // Make all content (uploaded to or created in Sakai OAE) visible to
    // logged in users only by default.
    config.Permissions.Content.defaultaccess = "everyone";
    config.Permissions.Documents.defaultaccess = "everyone";
    config.Permissions.Groups.defaultaccess = "logged-in-only";
    // Make memberships visible to logged in users only by default and
    // allow users to edit that settting:
    config.defaultpubstructure.structure0.memberships._reorderOnly = false;
    config.defaultpubstructure.structure0.memberships._view = "everyone";
    // Make contacts visible to logged in users only by default and
    // allow users to edit that settting:
    config.defaultpubstructure.structure0.contacts._reorderOnly = false;
    config.defaultpubstructure.structure0.contacts._view = "everyone";
    
    config.defaultpubstructure.structure0.badges._reorderOnly = false;
    config.defaultpubstructure.structure0.badges._view = "everyone";
    
    config.Languages = [{
            "country": "PT",
            "language": "pt",
            "displayName": "Português"
        }];
    
    config.defaultLanguage = "pt_PT";

    return config;
});
