
import './home.css';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../locales/i18n';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const demoVideoRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };


  // return (
  //   <div className="bg-gradient-to-r from-blue-100 to-green-100 min-h-screen flex items-center justify-center py-12">
  //     <div className="container max-w-6xl mx-auto p-8 bg-white rounded-3xl shadow-2xl">
  //       <div className="home-container">
  //         <div>
  //           <button onClick={() => changeLanguage('en')}>English</button>
  //           <button onClick={() => changeLanguage('ta')}>Tamil</button>
  //           <button onClick={() => changeLanguage('hi')}>Hindi</button>
  //         </div>
  //       </div>
  //       <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-8">
  //         {t('welcome')}
  //       </h1>
  //       <p className="text-2xl text-center text-gray-700 mb-12">
  //         {t('home_page_intro')}
  //       </p>
  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  //         <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl">
  //           <h2 className="text-3xl font-semibold text-gray-800 mb-4">
  //             {t('for_farmers')}
  //           </h2>
  //           <ul className="list-disc list-inside text-gray-700">
  //             <li>{t('connect_with_buyers')}</li>
  //             <li>{t('manage_contracts')}</li>
  //             <li>{t('secure_payments')}</li>
  //             <li>{t('collaborate')}</li>
  //           </ul>
  //         </div>
  //         <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl">
  //           <h2 className="text-3xl font-semibold text-gray-800 mb-4">
  //             {t('for_buyers')}
  //           </h2>
  //           <ul className="list-disc list-inside text-gray-700">
  //             <li>{t('find_reliable_farmers')}</li>
  //             <li>{t('purchase_products')}</li>
  //             <li>{t('secure_options')}</li>
  //             <li>{t('track_order')}</li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="mt-12">
  //         <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
  //           {t('why_choose_us')}
  //         </h2>
  //         <ul className="list-disc list-inside text-gray-700 text-center space-y-2">
  //           <li>{t('verification')}</li>
  //           <li>{t('escrow_account')}</li>
  //           <li>{t('chat_application')}</li>
  //           <li>{t('status_updates')}</li>
  //         </ul>
  //       </div>
  //       <div className="mt-8 text-center">
  //         <Link
  //           to="/signup"
  //           className="inline-block bg-green-500 text-white text-lg px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
  //         >
  //           {t('get_started')}
  //         </Link>
  //       </div>
  //     </div>
  const handleCard1Click = () => {
    navigate('/video-page');
  };

  const handleCard2Click = () => {
    navigate('/another-page');
  };

  // Scroll to the "Demo Video" card section
  const scrollToDemoVideo = () => {
    demoVideoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('src/assets/crop.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">{t('welcome')}</h1>
          <p className="text-2xl text-white mt-4">{t('home_page_intro')}</p>
          <div className="mt-8">
            <button
              onClick={() => changeLanguage('en')}
              className="mx-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('ta')}
              className="mx-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              தமிழ்
            </button>
            <button
              onClick={() => changeLanguage('hi')}
              className="mx-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              हिंदी
            </button>
          </div>
          {/* Demo Video Button */}
          <button
            onClick={scrollToDemoVideo}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            {t('demo_video')}
          </button>
        </div>
      </div>

      {/* What is Vishwas Section */}
<div className="container mx-auto p-8">
  <div className="flex flex-col md:flex-row-reverse items-center gap-8">
    {/* Image on the right side */}
    <div className="w-full md:w-1/2">
      <img
        src="src/assets/crop1.jpg"
        alt="What is Vishwas"
        className="object-cover w-full h-full rounded-lg shadow-md"
        style={{ maxHeight: '350px' }}
      />
    </div>

    {/* Content on the left side */}
    <div className="w-full md:w-1/2">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('what_is_vishwas')}</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        {t('vishwas_description')}
      </p>
      <ul className="list-none space-y-3 text-gray-600">
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-green-500 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          {t('building_trust')}
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-green-500 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          {t('ensuring_deals')}
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-green-500 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          {t('providing_platform')}
        </li>
      </ul>
    </div>
  </div>
</div>


     {/* Content Sections */}
<div className="container mx-auto p-8">
  <div className="grid grid-cols-1 gap-12">
    
    {/* For Farmers Section */}
    <div className="flex flex-col md:flex-row items-center">
      
      {/* Image Card on the left side */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src="src/assets/f2.jpg.jpg"
            alt="For Farmers"
            className="object-cover w-full rounded-t-lg"
            style={{ height: '300px' }}
          />
        </div>
      </div>
      
      {/* Content Card on the right side */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('for_farmers')}</h2>
          <ul className="list-none space-y-3 text-gray-600">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t('connect_with_buyers')}
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t('manage_contracts')}
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t('secure_payments')}
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                />
              </svg>
              {t('collaborate')}
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* For Buyers Section */}
    <div className="flex flex-col md:flex-row items-center">
      
      {/* Content Card on the left side */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('For Contractors')}</h2>
          <ul className="list-none space-y-3 text-gray-600">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                />
              </svg>
              {t('find_reliable_farmers')}
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                />
              </svg>
              {t('purchase_products')}
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                />
              </svg>
              {t('secure_options')}
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                />
              </svg>
              {t('track_order')}
            </li>
          </ul>
        </div>
      </div>
      
      {/* Image Card on the right side */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src="src/assets/b2.jpg"
            alt="For Buyers"
            className="object-cover w-full rounded-t-lg"
            style={{ height: '300px' }}
          />
        </div>
      </div>
    </div>
  </div>
</div>


        

      {/* Central Section with Two Cards */}
      <div
        ref={demoVideoRef}
        className="container mx-auto my-12 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div
          className="p-8 bg-green-100 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-green-400 hover:scale-105 active:bg-green-300 hover:shadow-2xl cursor-pointer"
          style={{ height: '150px' }}
          onClick={handleCard1Click}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">{t('demo_video')}</h2>
          <p className="text-center">{t('navi_video')}</p>
        </div>

        <div
          className="p-8 bg-green-100 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-green-400 hover:scale-105 active:bg-green-300 hover:shadow-2xl cursor-pointer"
          style={{ height: '150px' }}
          onClick={handleCard2Click}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">{t('about')}</h2>
          <p className="text-center">{t('navi_page')}</p>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
