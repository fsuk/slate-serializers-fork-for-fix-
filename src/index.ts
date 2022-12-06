// Serializers
export { htmlToSlate } from './serializers/htmlToSlate'
export { slateToDom, slateToHtml } from './serializers/slatetoHtml'

// Configuration objects
// slateToDom
export { Config as SlateToDomConfig } from './config/slateToDom/types'
export { config as slateToDomConfig } from './config/slateToDom/default'
export { config as payloadSlateToDomConfig } from './config/slateToDom/payload'

// htmlToSlate
export { Config as HtmlToSlateConfig } from './config/htmlToSlate/types'
export { config as htmlToSlateConfig } from './config/htmlToSlate/default'
export { config as payloadHtmlToSlateConfig } from './config/htmlToSlate/payload'
export { config as slateDemoHtmlToSlateConfig } from './config/htmlToSlate/slateDemo'
