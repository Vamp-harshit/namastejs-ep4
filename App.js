import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://waahads.com/wp-content/uploads/2024/09/LOGO-removebg-preview.png"></img>
            </div>
            <div className="nav-items">
            <ul>
            <li>Home </li>
            <li>Restrunts </li>
            <li>Cart </li>
            </ul>
            </div>
        </div>
    )
};
 const datas = [
    {

        "info": {
              "id": "612059",
              "name": "Domino's Pizza",
              "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
              "locality": "Sadar Bazar",
              "areaName": "Sector 11",
              "costForTwo": "₹400 for two",
              "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
              ],
              "avgRating": 4.2,
              "parentId": "2456",
              "avgRatingString": "4.2",
              "totalRatingsString": "1K+",
              "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 0.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "0.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 02:55:00",
                    "opened": true
              },
              "badges": {
                    "imageBadges": [
                          {
                                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                "description": "Delivery!"
                          }
                    ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": {
                                "badgeObject": [
                                      {
                                            "attributes": {
                                                  "description": "Delivery!",
                                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                            }
                                      }
                                ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "₹150 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/dominos-pizza-sadar-bazar-sector-11-rest612059",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "411518",
              "name": "McDonald's",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/47e32c1d-e3da-4612-acb3-45952ec26c4c_411518.JPG",
              "locality": "Sector 48",
              "areaName": "Sohna Road",
              "costForTwo": "₹400 for two",
              "cuisines": [
                    "American"
              ],
              "avgRating": 4.5,
              "parentId": "630",
              "avgRatingString": "4.5",
              "totalRatingsString": "10K+",
              "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 4.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "4.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 04:00:00",
                    "opened": true
              },
              "badges": {
                    "imageBadges": [
                          {
                                "imageId": "Rxawards/_CATEGORY-Burger.png",
                                "description": "Delivery!"
                          }
                    ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": {
                                "badgeObject": [
                                      {
                                            "attributes": {
                                                  "description": "Delivery!",
                                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                            }
                                      }
                                ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹49"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/mcdonalds-sector-48-sohna-road-rest411518",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "751437",
              "name": "La Pino'z Pizza",
              "cloudinaryImageId": "f44bc9708c514cd2dd6ae0d8b4677214",
              "locality": "Sec 31",
              "areaName": "Main Huda Commercial Market",
              "costForTwo": "₹250 for two",
              "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Desserts",
                    "Beverages"
              ],
              "avgRating": 4.1,
              "parentId": "4961",
              "avgRatingString": "4.1",
              "totalRatingsString": "1K+",
              "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 09:00:00",
                    "opened": true
              },
              "badges": { },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹90"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/la-pinoz-pizza-sec-31-main-huda-commercial-market-rest751437",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "39292",
              "name": "KFC",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/76795500-8115-430e-8634-fa86dc2be090_39292.JPG",
              "locality": "Huda Market",
              "areaName": "Sector 14",
              "costForTwo": "₹450 for two",
              "cuisines": [
                    "Burgers",
                    "Fast Food",
                    "Rolls & Wraps"
              ],
              "avgRating": 4,
              "parentId": "547",
              "avgRatingString": "4.0",
              "totalRatingsString": "10K+",
              "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 03:00:00",
                    "opened": true
              },
              "badges": { },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/kfc-huda-market-sector-14-rest39292",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "807690",
              "name": "Pizza Hut",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/19/4ea243cc-2991-446b-8309-62afc7ac5d04_807690.jpg",
              "locality": "Jailland",
              "areaName": "Sector- 11",
              "costForTwo": "₹350 for two",
              "cuisines": [
                    "Pizzas"
              ],
              "avgRating": 4,
              "parentId": "721",
              "avgRatingString": "4.0",
              "totalRatingsString": "100+",
              "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 0.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "0.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 04:45:00",
                    "opened": true
              },
              "badges": { },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹189"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/pizza-hut-jailland-sector-11-rest807690",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "446543",
              "name": "Dhaba 1947",
              "cloudinaryImageId": "xv8tch8ndiy45zbmcpbe",
              "locality": "Huda City",
              "areaName": "Huda City",
              "costForTwo": "₹300 for two",
              "cuisines": [
                    "North Indian",
                    "Snacks"
              ],
              "avgRating": 4.2,
              "parentId": "14248",
              "avgRatingString": "4.2",
              "totalRatingsString": "5K+",
              "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 4.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 03:00:00",
                    "opened": true
              },
              "badges": {
                    "imageBadges": [
                          {
                                "imageId": "Rxawards/_CATEGORY-Butter%20Chicken.png",
                                "description": "Delivery!"
                          },
                          {
                                "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                                "description": "Delivery!"
                          }
                    ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": {
                                "badgeObject": [
                                      {
                                            "attributes": {
                                                  "description": "Delivery!",
                                                  "imageId": "Rxawards/_CATEGORY-Butter%20Chicken.png"
                                            }
                                      },
                                      {
                                            "attributes": {
                                                  "description": "Delivery!",
                                                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                                            }
                                      }
                                ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹129"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/dhaba-1947-huda-city-rest446543",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "769964",
              "name": "Olio - The Wood Fired Pizzeria",
              "cloudinaryImageId": "4b44c7921b1b6073a4ffa58b38f8def1",
              "locality": "Sector 33",
              "areaName": "Near Goga Mandir",
              "costForTwo": "₹300 for two",
              "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Fast Food",
                    "Snacks",
                    "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "11633",
              "avgRatingString": "4.3",
              "totalRatingsString": "500+",
              "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 05:00:00",
                    "opened": true
              },
              "badges": {
                    "imageBadges": [
                          {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                          }
                    ],
                    "textExtendedBadges": [
                          {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                          }
                    ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": {
                                "badgeObject": [
                                      {
                                            "attributes": {
                                                  "description": "Gourmet",
                                                  "imageId": "newg.png"
                                            }
                                      }
                                ]
                          },
                          "textBased": { },
                          "textExtendedBadges": {
                                "badgeObject": [
                                      {
                                            "attributes": {
                                                  "description": "",
                                                  "fontColor": "#7E808C",
                                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                                  "shortDescription": "options available"
                                            }
                                      }
                                ]
                          }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹179"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/olio-the-wood-fired-pizzeria-sector-33-near-goga-mandir-rest769964",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "6244",
              "name": "Burger Singh (Big Punjabi Burgers)",
              "cloudinaryImageId": "972a37599772cdc7df93a0855ad87591",
              "locality": "Sushant Lok",
              "areaName": "Sushant Lok",
              "costForTwo": "₹300 for two",
              "cuisines": [
                    "Snacks",
                    "Fast Food",
                    "Indian",
                    "American",
                    "Beverages",
                    "Desserts",
                    "Mughlai",
                    "North Indian",
                    "Biryani",
                    "Tibetan",
                    "Chinese",
                    "Continental"
              ],
              "avgRating": 4.4,
              "parentId": "375065",
              "avgRatingString": "4.4",
              "totalRatingsString": "10K+",
              "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 6.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "6.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 07:00:00",
                    "opened": true
              },
              "badges": { },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "100+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/burger-singh-big-punjabi-burgers-sushant-lok-rest6244",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "56988",
              "name": "Subway",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/b81f167b-ccfc-4cc5-98af-571c34e401e6_56988.JPG",
              "locality": "Huda Market",
              "areaName": "Sector 15",
              "costForTwo": "₹350 for two",
              "cuisines": [
                    "Fast Food",
                    "Salads",
                    "Snacks",
                    "Desserts",
                    "Beverages"
              ],
              "avgRating": 4.2,
              "parentId": "2",
              "avgRatingString": "4.2",
              "totalRatingsString": "10K+",
              "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 2.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 04:00:00",
                    "opened": true
              },
              "badges": {
                    "textExtendedBadges": [
                          {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                          }
                    ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": { },
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": {
                                "badgeObject": [
                                      {
                                            "attributes": {
                                                  "description": "",
                                                  "fontColor": "#7E808C",
                                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                                  "shortDescription": "options available"
                                            }
                                      }
                                ]
                          }
                    }
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/subway-huda-market-sector-15-rest56988",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "607958",
              "name": "Crusty Culture- Artisan Pizzas",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/29/ca345810-ea2d-4a2a-80d2-7dc5dabf5095_607958.jpg",
              "locality": "Sector 51",
              "areaName": "Sector 51",
              "costForTwo": "₹700 for two",
              "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "244215",
              "avgRatingString": "4.3",
              "totalRatingsString": "1K+",
              "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 6.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "6.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 03:00:00",
                    "opened": true
              },
              "badges": {
                    "imageBadges": [
                          {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                          }
                    ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": {
                                "badgeObject": [
                                      {
                                            "attributes": {
                                                  "description": "Gourmet",
                                                  "imageId": "newg.png"
                                            }
                                      }
                                ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹299"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "10+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/crusty-culture-artisan-pizzas-sector-51-rest607958",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "771982",
              "name": "Cultured Burgers - By Crusty Culture",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/1/79da496c-04a5-44fa-8690-e4662b31619e_771982.jpg",
              "locality": "J.P Market",
              "areaName": "Jalvayu Towers",
              "costForTwo": "₹400 for two",
              "cuisines": [
                    "Fast Food",
                    "Burgers"
              ],
              "avgRating": 4.4,
              "parentId": "522967",
              "avgRatingString": "4.4",
              "totalRatingsString": "50+",
              "sla": {
                    "deliveryTime": 36,
                    "lastMileTravel": 6.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "6.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 03:00:00",
                    "opened": true
              },
              "badges": {
                    "imageBadges": [
                          {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                          }
                    ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": {
                                "badgeObject": [
                                      {
                                            "attributes": {
                                                  "description": "Gourmet",
                                                  "imageId": "newg.png"
                                            }
                                      }
                                ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹199"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/cultured-burgers-by-crusty-culture-j-p-market-jalvayu-towers-rest771982",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "263688",
              "name": "Shravan Specials by Lunchbox",
              "cloudinaryImageId": "iibcnez9kbwg3bgrc7gi",
              "locality": "Huda Complex",
              "areaName": "Sector 12",
              "costForTwo": "₹200 for two",
              "cuisines": [
                    "Biryani",
                    "North Indian",
                    "Desserts",
                    "Beverages"
              ],
              "avgRating": 4.6,
              "veg": true,
              "parentId": "21938",
              "avgRatingString": "4.6",
              "totalRatingsString": "100+",
              "sla": {
                    "deliveryTime": 23,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 03:00:00",
                    "opened": true
              },
              "badges": {
                    "imageBadges": [
                          {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                          }
                    ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": {
                                "badgeObject": [
                                      {
                                            "attributes": {
                                                  "description": "pureveg",
                                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                            }
                                      }
                                ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹159"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/shravan-specials-by-lunchbox-huda-complex-sector-12-rest263688",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "837850",
              "name": "The Pizza Project by Oven Story",
              "cloudinaryImageId": "f1b907b0b8f86c62e4fc347c6b1434e6",
              "locality": "Huda Complex",
              "areaName": "Sector 12",
              "costForTwo": "₹400 for two",
              "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Desserts",
                    "Beverages"
              ],
              "avgRating": 3.6,
              "parentId": "497031",
              "avgRatingString": "3.6",
              "totalRatingsString": "10+",
              "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 03:00:00",
                    "opened": true
              },
              "badges": { },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹99"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/the-pizza-project-by-oven-story-huda-complex-sector-12-rest837850",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "566244",
              "name": "Faasos Signature Wraps & Rolls",
              "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
              "locality": "Huda Complex",
              "areaName": "Sector 12",
              "costForTwo": "₹350 for two",
              "cuisines": [
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "Desserts",
                    "Beverages"
              ],
              "avgRating": 4.2,
              "parentId": "340366",
              "avgRatingString": "4.2",
              "totalRatingsString": "50+",
              "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 03:00:00",
                    "opened": true
              },
              "badges": {
                    "textExtendedBadges": [
                          {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                          }
                    ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": {
                                "badgeObject": [
                                      {
                                            "attributes": {
                                                  "description": "",
                                                  "fontColor": "#7E808C",
                                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                                  "shortDescription": "options available"
                                            }
                                      }
                                ]
                          }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹139"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/faasos-signature-wraps-and-rolls-huda-complex-sector-12-rest566244",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "575011",
              "name": "Veg Daawat by Behrouz",
              "cloudinaryImageId": "2b579171cefc545ce6479e21c0016798",
              "locality": "Huda Complex",
              "areaName": "Sector 12",
              "costForTwo": "₹700 for two",
              "cuisines": [
                    "Biryani",
                    "North Indian",
                    "Kebabs",
                    "Mughlai",
                    "Beverages",
                    "Desserts"
              ],
              "avgRating": 4.5,
              "veg": true,
              "parentId": "344904",
              "avgRatingString": "4.5",
              "totalRatingsString": "20+",
              "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 03:00:00",
                    "opened": true
              },
              "badges": {
                    "imageBadges": [
                          {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                          }
                    ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": {
                                "badgeObject": [
                                      {
                                            "attributes": {
                                                  "description": "pureveg",
                                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                            }
                                      }
                                ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹249"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/veg-daawat-by-behrouz-huda-complex-sector-12-rest575011",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "801255",
              "name": "Makhani Darbar",
              "cloudinaryImageId": "c583da4b69d264ffe705e5918fad0e98",
              "locality": "Gurgaon 14",
              "areaName": "Huda Complex",
              "costForTwo": "₹500 for two",
              "cuisines": [
                    "Biryani",
                    "North Indian",
                    "Kebabs",
                    "Mughlai",
                    "Beverages",
                    "Desserts"
              ],
              "avgRating": 4.1,
              "parentId": "478595",
              "avgRatingString": "4.1",
              "totalRatingsString": "10+",
              "sla": {
                    "deliveryTime": 28,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 03:00:00",
                    "opened": true
              },
              "badges": { },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹249"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/makhani-darbar-14-huda-complex-rest801255",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "800982",
              "name": "Kebabs & Curries Company",
              "cloudinaryImageId": "89207177f3db7aa13308b296d4770998",
              "locality": "Sector 31",
              "areaName": "Huda City",
              "costForTwo": "₹800 for two",
              "cuisines": [
                    "Fast Food",
                    "North Indian",
                    "Mughlai",
                    "Lucknowi",
                    "Indian",
                    "Beverages"
              ],
              "avgRating": 4.1,
              "parentId": "6302",
              "avgRatingString": "4.1",
              "totalRatingsString": "50+",
              "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "4.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 04:00:00",
                    "opened": true
              },
              "badges": {
                    "imageBadges": [
                          {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                          }
                    ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": {
                                "badgeObject": [
                                      {
                                            "attributes": {
                                                  "description": "Gourmet",
                                                  "imageId": "newg.png"
                                            }
                                      }
                                ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹95"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/kebabs-and-curries-company-sector-31-huda-city-rest800982",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "800028",
              "name": "Vital Bowls - Salads & more",
              "cloudinaryImageId": "63a3c2a8873eb3e8d5c86f68defd5370",
              "locality": "Huda Market",
              "areaName": "Sector 10 A",
              "costForTwo": "₹500 for two",
              "cuisines": [
                    "Healthy Food",
                    "Salads",
                    "Beverages",
                    "Keto"
              ],
              "avgRating": 4.5,
              "parentId": "478149",
              "avgRatingString": "4.5",
              "totalRatingsString": "9",
              "sla": {
                    "deliveryTime": 43,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 03:00:00",
                    "opened": true
              },
              "badges": {
                    "textExtendedBadges": [
                          {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "brand",
                                "fontColor": "#7E808C"
                          }
                    ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": {
                                "badgeObject": [
                                      {
                                            "attributes": {
                                                  "description": "",
                                                  "fontColor": "#7E808C",
                                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                                  "shortDescription": "brand"
                                            }
                                      }
                                ]
                          }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹199"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/vital-bowls-salads-and-more-huda-market-sector-10-a-rest800028",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "769965",
              "name": "Crusto's - Gourmet Cheese Burst Pizza",
              "cloudinaryImageId": "c77fe42b7997c566f491e84b540701ca",
              "locality": "Sector 33",
              "areaName": "Near Goga Mandir",
              "costForTwo": "₹300 for two",
              "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Fast Food",
                    "Snacks",
                    "Beverages"
              ],
              "avgRating": 4.4,
              "parentId": "268955",
              "avgRatingString": "4.4",
              "totalRatingsString": "50+",
              "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 05:00:00",
                    "opened": true
              },
              "badges": { },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹179"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": { },
        "cta": {
              "link": "https://www.swiggy.com/city/gurgaon/crustos-gourmet-cheese-burst-pizza-sector-33-near-goga-mandir-rest769965",
              "type": "WEBLINK"
        }

  },
  {

        "info": {
              "id": "831215",
              "name": "Pastas By Pizza Hut",
              "cloudinaryImageId": "dce75bf0d124fb1fa390597828d8ffd9",
              "locality": "Sector 14",
              "areaName": "Rajeev Nagar",
              "costForTwo": "₹400 for two",
              "cuisines": [
                    "Pastas"
              ],
              "avgRating": 4.1,
              "parentId": "306806",
              "avgRatingString": "4.1",
              "totalRatingsString": "10+",
              "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                    "nextCloseTime": "2024-09-02 04:00:00",
                    "opened": true
              },
              "badges": { },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                    "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                    }
              },
              "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹149"
              },
              "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                    }
              },
              "reviewsSummary": { },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": { },
              "externalRatings": {
                    "aggregatedRating": {
                          "rating": "--"
                    }
              },    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"    },     "analytics": { },    "cta": {      "link": "https://www.swiggy.com/city/gurgaon/pastas-by-pizza-hut-sector-14-rajeev-nagar-rest831215",     "type": "WEBLINK"} 
       },
        {

            "info": {
                  "id": "739335",
                  "name": "Burger Farm",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_739335.JPG",
                  "locality": "sector 31",
                  "areaName": "Huda City",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                        "Burgers",
                        "American",
                        "Beverages"
                  ],
                  "avgRating": 4.5,
                  "parentId": "4660",
                  "avgRatingString": "4.5",
                  "totalRatingsString": "1K+",
                  "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                        "nextCloseTime": "2024-09-02 03:00:00",
                        "opened": true
                  },
                  "badges": { },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                        "entityBadges": {
                              "imageBased": { },
                              "textBased": { },
                              "textExtendedBadges": { }
                        }
                  },
                  "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                  },
                  "orderabilityCommunication": {
                        "title": { },
                        "subTitle": { },
                        "message": { },
                        "customIcon": { }
                  },
                  "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": { },
                              "video": { }
                        }
                  },
                  "reviewsSummary": { },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": { },
                  "externalRatings": {
                        "aggregatedRating": {
                              "rating": "--"
                        }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                  "context": "seo-data-9722e16f-7007-4a66-80d9-4eb5652579e7"
            },
            "cta": {
                  "link": "https://www.swiggy.com/city/gurgaon/burger-farm-sector-31-huda-city-rest739335",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

      },
      {

            "info": {
                  "id": "608351",
                  "name": "M.C. Tadka - The Punjab Special",
                  "cloudinaryImageId": "4702538da82f375bb47ebd1d0b3abb51",
                  "locality": "Sanjay Gram Colony",
                  "areaName": "Sector 14",
                  "costForTwo": "₹500 for two",
                  "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Mughlai",
                        "Thalis",
                        "Snacks",
                        "Biryani"
                  ],
                  "avgRating": 4.2,
                  "parentId": "387567",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "1K+",
                  "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                        "nextCloseTime": "2024-09-02 06:00:00",
                        "opened": true
                  },
                  "badges": { },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                        "entityBadges": {
                              "imageBased": { },
                              "textBased": { },
                              "textExtendedBadges": { }
                        }
                  },
                  "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                  },
                  "orderabilityCommunication": {
                        "title": { },
                        "subTitle": { },
                        "message": { },
                        "customIcon": { }
                  },
                  "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": { },
                              "video": { }
                        }
                  },
                  "reviewsSummary": { },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": { },
                  "externalRatings": {
                        "aggregatedRating": {
                              "rating": "--"
                        }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                  "context": "seo-data-9722e16f-7007-4a66-80d9-4eb5652579e7"
            },
            "cta": {
                  "link": "https://www.swiggy.com/city/gurgaon/m-c-tadka-the-punjab-special-sanjay-gram-colony-sector-14-rest608351",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

      },
      {

            "info": {
                  "id": "348183",
                  "name": "DN Snacks - Indian,Chinese & More",
                  "cloudinaryImageId": "jx7ljnjgr0zupqf2seks",
                  "locality": "Sector 39",
                  "areaName": "Sector 39",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                        "Continental",
                        "North Indian",
                        "Chinese",
                        "Snacks",
                        "Fast Food"
                  ],
                  "avgRating": 4.2,
                  "parentId": "474815",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "1K+",
                  "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                        "nextCloseTime": "2024-09-02 04:00:00",
                        "opened": true
                  },
                  "badges": { },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                        "entityBadges": {
                              "imageBased": { },
                              "textBased": { },
                              "textExtendedBadges": { }
                        }
                  },
                  "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                  },
                  "orderabilityCommunication": {
                        "title": { },
                        "subTitle": { },
                        "message": { },
                        "customIcon": { }
                  },
                  "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": { },
                              "video": { }
                        }
                  },
                  "reviewsSummary": { },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": { },
                  "externalRatings": {
                        "aggregatedRating": {
                              "rating": "4.0",
                              "ratingCount": "20+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                  "context": "seo-data-9722e16f-7007-4a66-80d9-4eb5652579e7"
            },
            "cta": {
                  "link": "https://www.swiggy.com/city/gurgaon/dn-snacks-indian-chinese-and-more-sector-39-rest348183",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

      },
      {

            "info": {
                  "id": "596516",
                  "name": "Manshi Rasoi",
                  "cloudinaryImageId": "aeut2r1gzvjvz9beqje1",
                  "locality": "U Block",
                  "areaName": "DLF Phase 3",
                  "costForTwo": "₹149 for two",
                  "cuisines": [
                        "Indian",
                        "Chinese",
                        "Tandoor"
                  ],
                  "avgRating": 4.2,
                  "parentId": "356706",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "5K+",
                  "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 9.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "9.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                        "nextCloseTime": "2024-09-08 00:00:00",
                        "opened": true
                  },
                  "badges": { },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                        "entityBadges": {
                              "imageBased": { },
                              "textBased": { },
                              "textExtendedBadges": { }
                        }
                  },
                  "aggregatedDiscountInfoV3": {
                        "header": "₹40 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL"
                  },
                  "orderabilityCommunication": {
                        "title": { },
                        "subTitle": { },
                        "message": { },
                        "customIcon": { }
                  },
                  "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": { },
                              "video": { }
                        }
                  },
                  "reviewsSummary": { },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": { },
                  "externalRatings": {
                        "aggregatedRating": {
                              "rating": "--"
                        }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                  "context": "seo-data-9722e16f-7007-4a66-80d9-4eb5652579e7"
            },
            "cta": {
                  "link": "https://www.swiggy.com/city/gurgaon/manshi-rasoi-u-block-dlf-phase-3-rest596516",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

      },
 ]
const RestarauntCard = (props) =>{
    const {resData}=props;
    return (
        <div className="res-card" >
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}></img>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.avgRating}⭐ • {resData.info.sla.deliveryTime} min </h4>
            <p>{resData.info.cuisines.join(", ")}</p>
            <p>{resData.info.areaName}</p>
        </div>
    )
};
const Body = () =>{
    return(
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container">
            {
                datas.map( restraunt => <RestarauntCard key={restraunt.info.id}resData={restraunt}/>)
            }
            </div>
        </div>
    )
};
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);