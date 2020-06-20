import BP from './lib/blueprinters'

function prefixedTabs (prefix, cfg) {
  if (!cfg) cfg = {}
  const prf = key => cfg[key] ? `${prefix}_` : ''
  return {
    [`${prf('events')}export_events`]: BP.deeprows,
    [`${prf('categories')}export_categories`]: [BP.groups, BP.rows],
    [`${prf('filters')}export_filters`]: BP.tree,
    [`${prf('narratives')}export_narratives`]: BP.rows,
    [`${prf('sources')}export_sources`]: BP.deepids,
    [`${prf('sites')}export_sites`]: BP.rows
  }
}

export const timemap = {
  default: prefixedTabs(),
  prefixedTabs
}
