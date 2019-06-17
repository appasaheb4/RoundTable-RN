import Config from "react-native-config";

//Colors  
var colors = {
  appColor: "#2595D6",
  tabbarActiveColor: "#2D71B6",
  black: "#000000",
  white: "#FFFFFF",
  Saving: "#E6A620",
  Secure: "#30A2F3",
  Vault: "#679F37",
  Joint: "#660000",
  placeholder: "#5F5F5F"
};

const assetsImages = "../../assets/images/";
var images = {
  appBackgound: require( assetsImages + "icons/RoundTable.jpeg" ),
  logo: require( assetsImages + "icons/icon.jpg" ),
};

var asyncStorageKeys = {
  flag_Pincode: "flag_Pincode",
  selectDeiceInfo: "selectDeiceInfo"
}

//Rest Full Api    
const domain = Config.API_DOMIN_ROUND_CMSHUAWEI;
var apiary = {
  domain: domain,
  getAllDevices: domain + Config.API_GETALLDEVICES,
  getRemainingDevice: domain + Config.API_GETREMAININGDEVICE,
  insertDeviceUserInfo: domain + Config.API_INSERTDEVICEUSERINFO,
};


//Socket Url set
var socketurl = {
  socketUrlMain: Config.SOCKET_ROUND_CMSHUAWEI
}


export {
  colors,
  images,
  asyncStorageKeys,
  apiary,
  socketurl
};   
