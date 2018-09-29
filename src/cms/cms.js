import CMS from 'netlify-cms';

import '../style.scss';

import HomePreview from './preview-templates/home-preview';
import ContactPreview from './preview-templates/contact-preview';
import CustomsPreview from './preview-templates/customs-preview';
import SettingsPreview from './preview-templates/settings-preview';

CMS.registerPreviewTemplate('home', HomePreview);
CMS.registerPreviewTemplate('contact', ContactPreview);
CMS.registerPreviewTemplate('thankyou', CustomsPreview);
CMS.registerPreviewTemplate('blog', CustomsPreview);
CMS.registerPreviewTemplate('customs', CustomsPreview);
CMS.registerPreviewTemplate('404', CustomsPreview);
CMS.registerPreviewTemplate('settings', SettingsPreview);
