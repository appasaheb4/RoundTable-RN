import moment from "moment";
import DeviceInfo from "react-native-device-info";

//TODO: Date Format
const getUnixTimeDate = date => {
  const dateTime = new Date( date ).getTime();
  const lastUpdateDate = Math.floor( dateTime / 1000 );
  return lastUpdateDate;
};

const getUnixToDateFormat = unixDate => {
  return moment.unix( unixDate ).format( "DD-MM-YYYY HH:mm:ss" );
};
const getUnixToNormaDateFormat = unixDate => {
  return moment.unix( unixDate ).format( "DD-MM-YYYY" );
};

//TODO: for sorting date wise transaction data
const sortFunction = ( a: any, b: any ) => {
  var dateA = new Date( a.received ).getTime();
  var dateB = new Date( b.received ).getTime();
  return dateA < dateB ? 1 : -1;
};

//TODO: func two date diff days count
const date_diff_indays = ( date1: any, date2: any ) => {
  try {
    let dt1 = new Date( date1 );
    let dt2 = new Date( date2 );
    return Math.floor(
      ( Date.UTC( dt2.getFullYear(), dt2.getMonth(), dt2.getDate() ) -
        Date.UTC( dt1.getFullYear(), dt1.getMonth(), dt1.getDate() ) ) /
      ( 1000 * 60 * 60 * 24 )
    );
  } catch ( error ) {
    console.log( error );
  }
};

const getDeviceModel = () => {
  let model = DeviceInfo.getModel();
  let modelName;
  if ( model == "iPhone 6s" || model == "iPhone 6" ) {
    modelName = "Iphone6";
  } else if (
    model == "iPhone XS" ||
    model == "iPhone XS Max" ||
    model == "iPhone XR" ||
    model == "iPhone X"
  ) {
    modelName = "IphoneX";
  }
  return modelName;
};


const getStatusBarHeight = () => {
  let model = DeviceInfo.getModel();
  let height;
  if (
    model == "iPhone XS" ||
    model == "iPhone XS Max" ||
    model == "iPhone XR" ||
    model == "iPhone X"
  ) {
    height = 44;
  }
  else {
    height = 20;
  }
  return height;
}


const getIphoneSize = () => {
  let model = DeviceInfo.getModel();
  var iphoneSeries = "IPhone X";
  if (
    model == "iPhone XS" ||
    model == "iPhone XS Max" ||
    model == "iPhone XR" ||
    model == "iPhone X"
  ) {
    iphoneSeries = "iphone X";
  }
  else {
    iphoneSeries = "!iphone X"
  }
  return iphoneSeries;
}

module.exports = {
  getUnixTimeDate,
  getUnixToDateFormat,
  getUnixToNormaDateFormat,
  sortFunction,
  date_diff_indays,
  getDeviceModel,
  getStatusBarHeight,
  getIphoneSize,
};
