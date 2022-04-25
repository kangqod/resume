import { TMenus } from '@/models'
import {
  KEY_COMPONENT_ABOUT,
  KEY_COMPONENT_CERTIFICATE,
  KEY_COMPONENT_EXPERIENCE,
  KEY_COMPONENT_SKILLS
} from './keys'

export const Menus: TMenus[] = [
  {
    key: KEY_COMPONENT_ABOUT,
    text: 'About'
  },
  {
    key: KEY_COMPONENT_SKILLS,
    text: 'Skills'
  },
  {
    key: KEY_COMPONENT_EXPERIENCE,
    text: 'Experience'
  },
  {
    key: KEY_COMPONENT_CERTIFICATE,
    text: 'Certificate'
  }
]
