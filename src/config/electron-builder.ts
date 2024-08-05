import type { Configuration } from 'electron-builder'
import path from 'path'

export default {
  productName: 'Image Optimizer',
  appId: 'com.antonreshetov.image-optimizer',
  directories: {
    output: path.resolve(__dirname, '../../../dist')
  },
  linux: {
    desktop: {
      StartupNotify: 'false',
      Encoding: 'UTF-8',
      MimeType: 'x-scheme-handler/deeplink'
    },
    target: ['AppImage']
  },
  nsis: {
    // oneClick: false,
    // perMachine: false,
    // allowToChangeInstallationDirectory: true,
    shortcutName: 'Image Optimizer',
    deleteAppDataOnUninstall: true,
    include: 'installer/win/nsis-installer.nsh'
  },
  mac: {
    target: [
      { target: 'dmg', arch: 'arm64' },
      { target: 'dmg', arch: 'x64' }
    ]
  },
  win: {
    target: 'nsis'
  },
  extraMetadata: {
    main: 'src/main/index.js'
  },
  fileAssociations: [
    { name: 'JPG', ext: 'jpg' },
    { name: 'PNG', ext: 'png' },
    { name: 'GIF', ext: 'gif' },
    { name: 'SVG', ext: 'svg' }
  ],
  files: [
    '!**/node_modules/*/{CHANGELOG.md,README.md,README,readme.md,readme}',
    '!**/node_modules/*/{test,__tests__,tests,powered-test,example,examples}',
    '!**/node_modules/*.d.ts',
    '!**/node_modules/.bin',
    'package.json',
    {
      from: 'build/src',
      to: 'src',
      filter: ['main/**/*.js', 'renderer/**/*']
    }
  ]
} as Configuration
