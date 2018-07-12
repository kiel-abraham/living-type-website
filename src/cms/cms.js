import CMS from 'netlify-cms';

import CustomsPreview from './preview-templates/customs-preview';
import HeaderPreview from './preview-templates/header-preview';
import FooterPreview from './preview-templates/footer-preview';


CMS.registerPreviewStyle('https://bootswatch.com/4/materia/bootstrap.min.css');
CMS.registerPreviewTemplate('customs', CustomsPreview);
CMS.registerPreviewTemplate('header', HeaderPreview);
CMS.registerPreviewTemplate('footer', FooterPreview);
