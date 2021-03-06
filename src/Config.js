import Storage from 'react-native-storage'
const storage = new Storage({
  // 最大容量，默认值1000条数据循环存储
  size: 1000,    

  // 数据过期时间，默认一整天（1000 * 3600 * 24秒），设为null则永不过期
  defaultExpires: 1000 * 3600 * 24,

  // 读写时在内存中缓存数据。默认启用。
  enableCache: true,

  // 如果storage中没有相应数据，或数据已过期，
  // 则会调用相应的sync同步方法，无缝返回最新数据。
  sync : {
    // 同步方法的具体说明会在后文提到
  }
})  
global.storage = storage;

//const serviceUrl = 'http://scorpioner.xicp.net/v1/' //测试url
const serviceUrl = 'http://192.168.1.201:8080/spring-security-1.0/v1/'

//const serviceUrl = 'http://192.168.1.201:8888/v1/' //本地url
export default {
  initTab:'Home',
  loginUrl:serviceUrl,
  registerUrl: serviceUrl + 'register',
  accountUrl: serviceUrl + 'account',
  accountSignUrl: serviceUrl + 'account/sign',
  fileUpload: serviceUrl + 'file/save',
  fileUrl: serviceUrl + 'file/'
};