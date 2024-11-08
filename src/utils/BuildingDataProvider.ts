import { useState, useEffect } from 'react';
import floorsRaw from '../data/building.json'
const floors = floorsRaw as Floor[]

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  useEffect(()=>{
    setBuildingData(floors)
  },[])


  const getFloorByIndex = (floorIndex: number): Floor | undefined =>
  {
    return buildingData[floorIndex] || undefined
  }
  const getListOfActivities = ():string[]=>{
    return buildingData.map(floor => floor.activity)
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
