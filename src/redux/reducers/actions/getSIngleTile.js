import { titles } from '../../mockData'

export default function getSingleTile (name) {
  return titles.find(t => t.name === name)
}
