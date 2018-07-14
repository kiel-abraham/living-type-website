import CMS from 'netlify-cms';

import ContactPreview from './preview-templates/contact-preview';
import CustomsPreview from './preview-templates/customs-preview';
import HeaderPreview from './preview-templates/header-preview';
import FooterPreview from './preview-templates/footer-preview';


CMS.registerPreviewStyle('https://bootswatch.com/4/materia/bootstrap.min.css');
CMS.registerPreviewTemplate('contact', ContactPreview);
CMS.registerPreviewTemplate('customs', CustomsPreview);
CMS.registerPreviewTemplate('header', HeaderPreview);
CMS.registerPreviewTemplate('footer', FooterPreview);
