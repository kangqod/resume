import {
  KEY_COMPONENT_ABOUT,
  KEY_COMPONENT_CERTIFICATE,
  KEY_COMPONENT_EXPERIENCE,
  KEY_COMPONENT_SKILLS
} from '@/config'

type TKeyComponents =
  | typeof KEY_COMPONENT_ABOUT
  | typeof KEY_COMPONENT_SKILLS
  | typeof KEY_COMPONENT_EXPERIENCE
  | typeof KEY_COMPONENT_CERTIFICATE

export type TMenus = {
  key: TKeyComponents
  text: string
}
