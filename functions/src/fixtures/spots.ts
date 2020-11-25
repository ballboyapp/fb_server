import { https } from 'firebase-functions'
import { SPORTS } from '../constants'
import { Cities, Spots } from '../db'
import { promiseDocReference } from '../types'

export const spotsFixture = https.onRequest(async (req, res) => {
  try {
    const cities = await Cities.getAll()

    const enschedeId = cities.find((city) => city?.name === 'Enschede')?.id
    const rotterdamId = cities.find((city) => city?.name === 'Rotterdam')?.id

    const SPOTS = [{
      cityId: enschedeId,
      spotname: 'Sport Club Enschede',
      address: 'Weggelhorstweg 30, 7541 WJ Enschede, Netherlands',
      coordinates: { lat: 52.2048187, lng: 6.8983154 },
      images: ['https://res.cloudinary.com/dxot4z4ma/image/upload/v1594623979/Screenshot_from_2020-07-13_09-06-16_wiyxvt.png'],
      sports: [SPORTS.FOOTBALL],
    }, {
      cityId: enschedeId,
      spotname: 'Rigtersbleek Beach Volleyball',
      address: 'G.J. van Heekstraat 15, 7521 EB Enschede, Netherlands',
      coordinates: { lat: 52.2262906, lng: 6.8734922 },
      images: ['https://res.cloudinary.com/dxot4z4ma/image/upload/v1594624277/Screenshot_from_2020-07-13_09-08-19_qttc1n.png'],
      sports: [SPORTS.BEACH_VOLLEYBALL],
    }, {
      cityId: enschedeId,
      spotname: 'Performance Factory',
      address: 'Hoge Bothofstraat 31-49, 7511 ZA Enschede, Netherlands',
      coordinates: { lat: 52.2236654, lng: 6.9029265 },
      images: ['https://res.cloudinary.com/dp4vo5nq4/image/upload/v1557481330/jfytpw0aa5ioa7v3a4rb.jpg'],
      sports: [SPORTS.FOOTBALL],
    }, {
      cityId: enschedeId,
      spotname: 'Rigtersbleek',
      address: 'G.J. van Heekstraat 15, 7521 EB Enschede, Netherlands',
      coordinates: { lat: 52.2263591, lng: 6.8730052 },
      images: ['https://res.cloudinary.com/dp4vo5nq4/image/upload/v1564347619/IMG_20180601_184705_761-ConvertImage.jpg'],
      sports: [SPORTS.FOOTBALL],
    }, {
      cityId: enschedeId,
      spotname: 'Beachveld',
      address: 'Campuslaan, 7522 NB Enschede, Netherlands',
      coordinates: { lat: 52.2462745, lng: 6.8494801 },
      images: ['https://res.cloudinary.com/dp4vo5nq4/image/upload/v1551798266/kvtqwxbywkp3oae11fjk.jpg'],
      sports: [SPORTS.BEACH_VOLLEYBALL],
    }, {
      cityId: rotterdamId,
      spotname: 'Lage Filterweg',
      address: 'Lage Filterweg 16, 3063 SB Rotterdam, Netherlands',
      coordinates: { lat: 51.9105469, lng: 4.5218993 },
      images: ['https://res.cloudinary.com/dp4vo5nq4/image/upload/v1564348028/52706501_579245615905290_6640661627421065216_n.jpg'],
      sports: [SPORTS.FOOTBALL],
    }, {
      cityId: rotterdamId,
      spotname: 'Erasmuspad',
      address: 'Erasmuspad 9, 3052 KP Rotterdam, Netherlands',
      coordinates: { lat: 51.947885, lng: 4.4654503 },
      images: ['https://res.cloudinary.com/dp4vo5nq4/image/upload/v1573942160/RKSV_Leonidas.jpg'],
      sports: [SPORTS.FOOTBALL],
    }, {
      cityId: rotterdamId,
      spotname: 'De Wilgenring',
      address: 'Melanchtonweg 70, 3052 KV Rotterdam, Netherlands',
      coordinates: { lat: 51.9486202, lng: 4.4696616 },
      images: ['https://res.cloudinary.com/dp4vo5nq4/image/upload/v1573942600/sportcentrum-wilgenring-9.jpg'],
      sports: [
        SPORTS.BASKETBALL,
        SPORTS.FOOTBALL,
        SPORTS.BADMINTON,
        SPORTS.BEACH_VOLLEYBALL,
      ],
    }, {
      cityId: rotterdamId,
      spotname: 'Hazelaarweg',
      address: 'Hazelaarweg 40, 3053 PM Rotterdam, Netherlands',
      coordinates: { lat: 51.9659456, lng: 4.4778496 },
      images: ['https://res.cloudinary.com/dp4vo5nq4/image/upload/v1573943474/zGvMldtztetiBCWSIknLM4WbSy0S636BjkyHAl8s.jpg'],
      sports: [SPORTS.FOOTBALL],
    }, {
      cityId: rotterdamId,
      spotname: 'Kralingen',
      address: 'Slaak 15, 3061 CR Rotterdam, Netherlands',
      coordinates: { lat: 51.9257414, lng: 4.4969802 },
      images: ['https://res.cloudinary.com/dp4vo5nq4/image/upload/v1573943603/Y1j8TBSxQzlefAtRc044jNg7twpRpbo9FoRSFC6s.jpg'],
      sports: [
        SPORTS.BASKETBALL,
        SPORTS.FOOTBALL,
        SPORTS.BADMINTON,
        SPORTS.BEACH_VOLLEYBALL,
      ],
    }]

    const promises: promiseDocReference[] = []

    SPOTS.forEach((s) => {
      promises.push(Spots.add(s))
    })

    await Promise.all(promises)

    res.status(200).send('Spots fixtures success')
  } catch (e) {
    console.log(e)
    res.status(500).send('Spots fixtures failed')
  }
})
