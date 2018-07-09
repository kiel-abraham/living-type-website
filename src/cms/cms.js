import CMS from 'netlify-cms';

import FooterPreview from './preview-templates/footer-preview';
import CustomsPreview from './preview-templates/customs-preview';

CMS.registerPreviewStyle('https://bootswatch.com/4/materia/bootstrap.min.css');
CMS.registerPreviewTemplate('footer', FooterPreview);
CMS.registerPreviewTemplate('customs', CustomsPreview);