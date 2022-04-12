
import axios from 'axios'
export const PLUGINS_URL = {
  D3: [
    'https://cdn.bootcss.com/d3/3.5.17/d3.min.js',
    'http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.min.js'
  ],
  CarTrack: [
    'https://cdn.bootcss.com/d3/3.5.17/d3.min.js',
    'http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.min.js',
    'http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/CarTrack.min.js'
  ],
  HeatmapOverlay: [ 'http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/HeatmapOverlay.min.js' ],
  BufferTool: [
    'https://cdn.bootcss.com/Turf.js/3.0.14/turf.js',
    'http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/BufferTool.min.js'
  ],
  ImageOverLayer: [ 'http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/ImageOverlay.min.js' ]
};
export interface LoadConfig {
  v?: string;
  tk?: string;
  plugins?: (keyof typeof PLUGINS_URL)[];
}


const id = 'tdjs'

interface LoadTMapApiReturn {
  T: any,
  script: any
}

export function loadTMapApi (cfg: LoadConfig): Promise<LoadTMapApiReturn | undefined> {
  return new Promise<LoadTMapApiReturn | undefined>((resolve, reject) => {
    const tScript = globalThis.document.getElementById(id)
    if(tScript){
      resolve({T:globalThis.T, script: tScript})
    } else {
      const script = globalThis.document?.createElement('script');
      if (!script) resolve(undefined);
      const baseUrl = 'https://api.tianditu.gov.cn/api'
      script.src = `${baseUrl}?v=${cfg.v}&tk=${cfg.tk}`;
      script.id = 'tdjs';
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        resolve({T:globalThis.T, script: script})
      };
      script.onerror = e => {
        resolve({T:globalThis.T, script: script})
      };
      globalThis.document?.body.appendChild(script);
    }

  });
}

export function getCityNameByIP (){
  // return Promise.resolve()
  return axios.get(
    'https://location.tianditu.gov.cn/data/getCityName',
  ).then((res: any) => {
    console.log('%c 🍬 res1: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', res);
    if(res.status === 200) {
      return res.data.data
    }else{
      throw new Error('IP定位服务异常')
    }
  })
}


