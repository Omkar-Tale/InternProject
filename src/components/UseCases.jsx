import React from 'react';
import { useTranslation } from 'react-i18next';
import UseCaseCard from './UseCaseCard';

const UseCases = () => {
  const { t } = useTranslation();
  const useCases = t('useCases.cards', { returnObjects: true }); // fetch array

  return (
    <div className="relative sm:p-20 p-10">
      <div className="text-center flex flex-col">
        <h1 className="font-bold sm:text-[48px] text-[20px] mx-auto font-poppins sm:max-w-full max-w-[60%]">
          {t('useCases.heading')}
        </h1>
        <p className="text-description font-roboto text-sm sm:text-[18px] text-center mx-auto sm:max-w-full max-w-[90%]">
          {t('useCases.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {useCases.map((feature, index) => (
          <UseCaseCard
            key={index}
            image={feature.image || "default.png"} 
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default UseCases;
