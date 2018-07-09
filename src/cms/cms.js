import CMS from 'netlify-cms';

import FooterPreview from './preview-templates/footer-preview';

CMS.registerPreviewStyle('https://bootswatch.com/4/materia/bootstrap.min.css');
CMS.registerPreviewTemplate('footer', FooterPreview);