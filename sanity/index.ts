import { ourHistory } from './schemas/components/about/ourHistory'
import { staff } from './schemas/components/about/staff'
// import about from './schemas/pages/aboutSchema'
import { about } from './schemas/pages/aboutSchema'
import { home } from './schemas/pages/homeSchema'
import { staffList } from './schemas/components/about/staffList'
import { worship } from './schemas/pages/worshipSchema'
import { worshipSchedule } from './schemas/components/worship/worshipSchedule'
import { sermon } from './schemas/components/worship/sermon'
import { speaker } from './schemas/components/worship/speaker'
import { rental } from './schemas/pages/facilityRentalSchema'
import { socialMediaPlatform as social } from './schemas/components/contact/socialMedia'
import { contactUs } from './schemas/pages/contactSchema'
import { pastoralCare } from './schemas/components/contact/pastoralCare'


const schemas = [
  home,
  about,
  ourHistory,
  staff,
  staffList,
  worship,
  worshipSchedule,
  sermon,
  speaker,
  rental,
  social,
  contactUs,
  pastoralCare
]

export default schemas