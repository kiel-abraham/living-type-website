import CMS from 'netlify-cms'

import FooterPreview from './preview-templates/footer-preview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('settings', FooterPreview)