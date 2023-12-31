'use strict'
const ArrayToObject = require('./arrayToObject')
module.exports = async()=>{
  try{
    const units = (await mongo.find('autoComplete', {_id: 'unit'}, {data: {value: 0}}))[0]
    if(units?.data?.length > 0){
      const tempUnits = await ArrayToObject(units.data, 'baseId')
      if(Object.values(tempUnits)?.length > 0) return tempUnits
    }
  }catch(e){
    console.error(e)
  }
}
