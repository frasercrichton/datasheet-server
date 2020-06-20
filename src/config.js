import { timemap } from './lib'

const tabPrefixes = {
  events: 'moraldrift',
  narratives: 'moraldrift',
  sources: 'moraldrift',
  sites: 'moraldrift',
  categories: 'moraldrift',
    filters: 'moraldrift',
    tags: 'moraldrift',

}

export default {
  gsheets: [{
    name: 'forensic',
    id: '1ej3kEtANGYsEBUCTfWsIR0UhTSJIuXFHLYspti2sgHo',
    tabs: timemap.prefixedTabs('moraldrift', tabPrefixes)
  },]
}
