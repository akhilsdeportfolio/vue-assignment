/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './'
import vuetify from './vuetify'



export function registerPlugins (app) {
  loadFonts()
  app.use(vuetify)
}
