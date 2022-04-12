import React, { useEffect, useState } from 'react';
import { Select } from 'antd'
import { getCityNameByIP, LoadConfig, loadTMapApi } from './util';
import './picker.less'

interface PickerProps {
  className?: string
  config: LoadConfig
}
const Picker: React.FC<PickerProps> = (props) =>{
  const {className,config} = props

  const [ id, setId ] = useState('')
  const [ T,setT ] = useState<any>(null)
  const [ map, setMap ] = useState<any>(null)

  let clsArr = [
    'tmap-region-picker'
  ]
  className && clsArr.push(className)

  useEffect(()=>{
    const nId = `tmap-container-${Date.now()}`
    setId(nId)
    loadTMapApi(config).then(res=>{
      res?.T && setT(res?.T)
    })
  },[])

  useEffect(()=>{
    if(T) {
      const tmap = new T.Map(id);
      setMap(tmap)
      let center = [ 116.397428, 39.90923 ]
      getCityNameByIP().then((data: any) => {
        const {lng, lat} = data
        center = [ lng, lat ]
      }).finally(() => {
        tmap.centerAndZoom(new T.LngLat(center[0], center[1]), 11);
        // initLocalSearch()
      })
    }
  },[T])

  return (
    <div className={clsArr.join(' ')}>
      <div className="tmap-region-picker__cascader">
        <Select placeholder="请选择省份"></Select>
        <Select placeholder="请选择城市"></Select>
        <Select placeholder="请选择区"></Select>
      </div>
      <div className="tmap-region-picker__map-container">
        <div className="tmap-region-picker__map" id={ id }></div>
      </div>
    </div>
  )
}
export default Picker