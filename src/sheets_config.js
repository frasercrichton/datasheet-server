import BP from './lib/blueprinters'

// state care
// 1lc_jXGPfVxTi3dfJmFEVg-3xOuRIvdpZsbg6ki76_l8

// Blair Peach
// 1iPE3QiIdvUtimH8DlVae3GGUydgBQDTkoNlN5cfjK_o

// FA
// 1ej3kEtANGYsEBUCTfWsIR0UhTSJIuXFHLYspti2sgHo
export default {
  googleSheets: {
    sheets: [
      {
        name: 'forensic',
        id: '1ej3kEtANGYsEBUCTfWsIR0UhTSJIuXFHLYspti2sgHo',
        tabs: {
          welfare_export_events: [BP.deeprows, BP.rows],
          welfare_export_categories: [BP.groups, BP.rows],
          welfare_export_narratives: BP.rows,
          welfare_export_sources: BP.deepids,
          welfare_export_sites: BP.rows,
          welfare_export_tags: BP.tree
        }
      }
    ]
  }
}
