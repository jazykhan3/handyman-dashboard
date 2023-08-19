//---------------------------------------client------------------------------//
//layout
export {default as ClientLayout} from './client/layout';
//Find handyman
export {default as FindHandyman} from './client/FindHandyman';
//Posted job 
export {default as PostedJOB} from './client/PostedJob';
//Change email
export {default as ChangeEmail} from './client/ChangeEmail';
//Change password
export {default as ChangePassword} from './client/ChangePassword'
//Accept Offers
export {default as AcceptOffers} from './client/AcceptOffers';
//Deleted jobs
export {default as DeletedJob} from './client/DeletedJobs'
//Messages
export {default as ClientMessages} from './client/Messages';

//---------------------------------------handyman------------------------------//
//layout 
export {default as HandymanLayout} from './handyman/layout';
//Edit profile
export {default as EditProfile} from './handyman/EditProfile'; 
//Job Listing
export {default as JobLisitng} from './handyman/JobListing';
//Payment Packages
export {default as PaymentPackages} from './handyman/PaymentPackages';
//Receive offer by email
export {default as ReceiveOfferByEmail} from './handyman/ReceiveOfferByEmail';
//Change email 
export {default as ChangeEmailHandyman} from './handyman/ChangeEmail';
//Change password
export {default as ChangePasswordHandyman} from './handyman/ChangePassword';
//Messages 
export {default as HandyManMessages} from './handyman/Messages';
//Orders 
export {default as Orders} from './handyman/Orders';

//---------------------------------------Admin------------------------------//
// ->Client section
export {default as AdminDashBoard} from './admin/layout';
//Client profile
export {default as ClientProfile} from './admin/ClientProfile';
//Login details 
export {default as LoginDetailsCS} from './admin/LoginDetailsCS';
//Active listing 
export {default as ActiveListingCS} from './admin/ActiveListingCS';
//Accepted Offer
export {default as AcceptedOfferCS} from './admin/AcceptedOfferCS';
//Un accepted Offers
export {default as UnacceptedOffersCS} from './admin/UnacceptedOffersCS';

//->Handyman section

//Handyman Profile
export {default as HandymanProfile} from './admin/HandymanProfile';
//Login details
export {default as LoginDetailsHS} from './admin/LoginDetailsHS';
//Active listing 
export {default as ActiveListingHS} from './admin/ActiveListingHS';
//Sent Offers
export {default as SentOffersHS} from './admin/SentOfferHS';
//Sent Offers
export {default as AcceptedOfferHS} from './admin/AcceptedOfferHS';
//Un accepted Offers
export {default as UnacceptedOffersHS} from './admin/UnacceptedOffersHS';
//Change email 
export {default as ChangedEmailCS} from './admin/ChangedEmailCS';
//Review section
export {default as ReviewSectionCS} from './admin/ReviewSectionCS';
//Activation Setting
export {default as ActivationSettingHS} from './admin/ActivationSettingHS';
//Upload document 
export {default as UploadedDocumentsHS} from './admin/UploadedDocumentsHS';
//All new profiles
export {default as AllNewProfileHS} from './admin/AllnewProfileHS';
//Rating 
export {default as RatingsHS} from './admin/RatingsHS';