import { Dimensions, Platform } from 'react-native';

export var APP_VERSION = "";
export var AUTH_TOKEN = "";
{ Platform.OS == "android" ? APP_VERSION = "2.0.1" : "" }
{ Platform.OS == "android" ? AUTH_TOKEN = "xttqeMn2dYtthp8aaUr2" : "" }
{ Platform.OS == "ios" ? APP_VERSION = "1.0.3" : "" }
{ Platform.OS == "ios" ? AUTH_TOKEN = "VJ8WEaqygbpYSMzBtsGz" : "" }
{ Platform.OS == "web" ? AUTH_TOKEN = "" : "" }
export const VIDEO_AUTH_TOKEN = "q5u8JMWTd2698ncg7q4Q";
export const SECRET_KEY = "2fd66b173c16e012e90e";
export const BASE_URL = "https://prod.api.etvwin.com";
export const ACCESS_TOKEN = "Ay6KCkajdBzztJ4bptpW";
export const FIRETV_BASE_URL = "http://ott-api-prod-vpc-1804679922.ap-south-1.elb.amazonaws.com/"; //testing
//export const FIRETV_BASE_URL ="https://firetvapi.etvwin.com/"; //prod
export const BACKGROUND_COLOR = "#00021c";
export const BACKGROUND_TRANSPARENT_COLOR = "rgba(0, 2, 28, 0.4)";
export const SIDEBAR_BACKGROUND_COLOR = "#01031A";
export const SLIDER_PAGINATION_SELECTED_COLOR = "#FFC908";
export const SLIDER_PAGINATION_UNSELECTED_COLOR = "#3a3d68";
export const MORE_LINK_COLOR = "#FFC908";
export const TAB_COLOR = "#7249BF";
export const HEADING_TEXT_COLOR = "#ffffff";
export const NORMAL_TEXT_COLOR = "#ffffff";
export const IMAGE_BORDER_COLOR = "#6b9fd7";
export const DETAILS_TEXT_COLOR = "#b1cccc";
export const DARKED_BORDER_COLOR = "#343636";
export const PAGE_WIDTH = Dimensions.get('window').width;
export const PAGE_HEIGHT = Dimensions.get('window').height;
export const NO_CAST_DEVICES = "noDevicesAvailable";
export const VIDEO_TYPES = ["show_episode", "video", "episode", "videolist", "movie", "livetv"];
export const LAYOUT_TYPES = ["Vertical", "Horizontal"];