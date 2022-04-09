import { RiverReading } from './models/RiverReading'
import { fetchRiverReadingData } from './services/river_reading_service'
import { saveToCsvFile } from './utils/file_utils'

var date = new Date();
date.setDate(date.getDate() - 7);


const generateRiverDataFiles1 = async (
  stationCode: string,
  rio: string,
  initialDate: Date,
  finalDate: Date
) => {
  const readings: RiverReading[] = await fetchRiverReadingData(
    stationCode,
    rio,
    initialDate,
    finalDate
  )
  saveToCsvFile(readings, 'Aquidauana.csv')
  console.log('Mal feito desfeito')
}
generateRiverDataFiles1('66945000', 'Aquidauana', date, new Date())



const generateRiverDataFiles2 = async (
  stationCode: string,
  rio: string,
  initialDate: Date,
  finalDate: Date
) => {
  const readings: RiverReading[] = await fetchRiverReadingData(
    stationCode,
    rio,
    initialDate,
    finalDate
  )
  saveToCsvFile(readings, 'Taquari.csv')
  console.log('Mal feito desfeito')
}
generateRiverDataFiles2('66870000', 'Taquari', date, new Date())


const generateRiverDataFiles3 = async (
  stationCode: string,
  rio: string,
  initialDate: Date,
  finalDate: Date
) => {
  const readings: RiverReading[] = await fetchRiverReadingData(
    stationCode,
    rio,
    initialDate,
    finalDate
  )
  saveToCsvFile(readings, 'Paraguai.csv')
  console.log('Mal feito desfeito')
}
generateRiverDataFiles3('66825000', 'Paraguai', date, new Date())


const generateRiverDataFiles4 = async (
  stationCode: string,
  rio: string,
  initialDate: Date,
  finalDate: Date
) => {
  const readings: RiverReading[] = await fetchRiverReadingData(
    stationCode,
    rio,
    initialDate,
    finalDate
  )
  saveToCsvFile(readings, 'Miranda.csv')
  console.log('Mal feito desfeito')
}
generateRiverDataFiles4('66900000', 'Miranda', date, new Date())


const generateRiverDataFiles5 = async (
  stationCode: string,
  rio: string,
  initialDate: Date,
  finalDate: Date
) => {
  const readings: RiverReading[] = await fetchRiverReadingData(
    stationCode,
    rio,
    initialDate,
    finalDate
  )
  saveToCsvFile(readings, 'Pardo.csv')
  console.log('Mal feito desfeito')
}
generateRiverDataFiles5('63970000', 'Pardo', date, new Date())
