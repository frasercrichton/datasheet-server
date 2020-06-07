import BP from './lib/blueprinters'

// state care
// 1lc_jXGPfVxTi3dfJmFEVg-3xOuRIvdpZsbg6ki76_l8

// Blair Peach
// 1iPE3QiIdvUtimH8DlVae3GGUydgBQDTkoNlN5cfjK_o

// FA
// 1ej3kEtANGYsEBUCTfWsIR0UhTSJIuXFHLYspti2sgHo
export default {
  gsheets: {
    sheets: [
      {
        name: 'forensic',
        id: '1ej3kEtANGYsEBUCTfWsIR0UhTSJIuXFHLYspti2sgHo',
        tabs: {
          moraldrift_export_events: [BP.deeprows, BP.rows],
          moraldrift_export_categories: [BP.groups, BP.rows],
          moraldrift_export_narratives: BP.rows,
          moraldrift_export_sources: BP.deepids,
          moraldrift_export_sites: BP.rows,
          moraldrift_export_tags: BP.tree
        }
      }
    ]
  }
}
