export interface Branch {
  id: number
  name: string
  address: string
  city: string
  phone: string
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
  mapEmbedSrc: string
  mapUrl: string
  image: string
  healthInsurances: string[]
}

export const branches: Branch[] = [
  {
    id: 1,
    name: 'Rodyna Caseros',
    address: 'Av. Marcelo T. de Alvear 4787',
    city: 'Caseros',
    phone: '+5491164127300',
    hours: {
      weekdays: '9:00 – 13:00 y 16:00 – 20:00 hs',
      saturday: '9:00 – 13:00 hs',
      sunday: 'Cerrado',
    },
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.1153242042974!2d-58.56744168881245!3d-34.62652585859004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8063c4fc6e5%3A0x5efe3a5baabe88df!2sAv.%20Marcelo%20Torcuato%20de%20Alvear%204787%2C%20B1678%20Buenos%20Aires%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1773447341522!5m2!1ses!2sar',
    mapUrl: 'https://maps.google.com/?q=Av.+Marcelo+T.+de+Alvear+4787+Caseros+Buenos+Aires',
    image: 'https://placehold.co/600x400/1d2343/9dc761?text=Caseros',
    healthInsurances: ['OSDE', 'Medife', 'Swiss Medical', 'PAMI', 'IOMA', 'Luis Pasteur'],
  },
  {
    id: 2,
    name: 'Rodyna Liniers',
    address: 'Carhue 99',
    city: 'Liniers',
    phone: '+5491161333590',
    hours: {
      weekdays: '9:00 – 19:00 hs',
      saturday: '9:00 – 14:00 hs',
      sunday: 'Cerrado',
    },
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.5808578748333!2d-58.530009252886956!3d-34.64003088984384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc847382b8827%3A0x5ec92fd0edb82340!2sFarmacia%20Social%20Hunko!5e0!3m2!1ses!2sar!4v1773447466666!5m2!1ses!2sar',
    mapUrl: 'https://maps.google.com/?q=Carhue+99+Liniers+Buenos+Aires',
    image: 'https://placehold.co/600x400/1d2343/9dc761?text=Liniers',
    healthInsurances: ['OSDE', 'Swiss Medical', 'PAMI'],
  },
  {
    id: 3,
    name: 'Rodyna Almagro',
    address: 'Av. Díaz Vélez 4500',
    city: 'Almagro',
    phone: '+5491122622826',
    hours: {
      weekdays: '8:00 – 20:00 hs',
      saturday: '9:00 – 14:00 hs',
      sunday: 'Cerrado',
    },
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.814159312437!2d-58.43287288881336!3d-34.608860557656755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca68f510bf33%3A0x901e86dc2ecb6a5f!2sAv.%20D%C3%ADaz%20V%C3%A9lez%204500%2C%20C1200AAY%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1773447520216!5m2!1ses!2sar',
    mapUrl: 'https://maps.google.com/?q=Av.+Diaz+Velez+4500+Almagro+CABA',
    image: 'https://placehold.co/600x400/1d2343/9dc761?text=Almagro',
    healthInsurances: ['OSDE', 'Medife', 'Swiss Medical', 'PAMI', 'Galeno', 'Medicus', 'Osseg', 'Centro Médico Pueyrredón', 'Policía Federal', 'Ospical'],
  },
  {
    id: 4,
    name: 'Rodyna Palermo',
    address: 'Bulnes 2001',
    city: 'Palermo',
    phone: '+5491171538375',
    hours: {
      weekdays: '9:00 – 20:00 hs',
      saturday: '9:00 – 13:00 hs',
      sunday: 'Cerrado',
    },
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6393021523004!2d-58.41397488881431!3d-34.58799225655478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca82289ba017%3A0x53c0b33fab8636ee!2sBulnes%202001%2C%20C1425DKI%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1773447562872!5m2!1ses!2sar',
    mapUrl: 'https://maps.google.com/?q=Bulnes+2001+Palermo+CABA',
    image: 'https://placehold.co/600x400/1d2343/9dc761?text=Palermo',
    healthInsurances: ['Swiss Medical', 'Galeno'],
  },
]
