import React from 'react';
import instagramImageSrc from '../../Assets/Images/instagram-icon.png';
import appConfig from '../../Utils/AppConfig';

const applications = [
    {
      name: 'Instagram',
      description: 'Manage your instagram easily',
      imageSrc: instagramImageSrc,
      imageAlt: 'Instagram Data Manager',
      href: appConfig.instagramAuthorizationUrl,
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ];


export default function HomeScreen() {
  return (
    <div className="bg-gray-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">Applications</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-32 lg:space-y-0">
          {applications.map((application) => (
            <div key={application.name} className="group relative">
              <div className="relative overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={application.imageSrc}
                  alt={application.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href={application.href}>
                  <span className="absolute inset-0" />
                  {application.name}
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">{application.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}
