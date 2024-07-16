import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import StyledSelectCategory from './StyledSelectCategory.ts';

interface CategoryProps {
  images: string;
  name: string;
  amount: number;
}

function SelectCategory(props: CategoryProps): React.ReactNode {
  const { images, name, amount } = props;
  const { t } = useTranslation();

  return (
    <StyledSelectCategory className="category">
      <Link to={`/shop/${name}`}>
        <img className="category__image" src={images} alt={name} />
      </Link>
      <div className="category__name">{`${name.charAt(0).toUpperCase() + name.slice(1)}`}</div>
      <div className="category__amount">{`${amount} ${t('models')}`}</div>
    </StyledSelectCategory>
  );
}

export default SelectCategory;
