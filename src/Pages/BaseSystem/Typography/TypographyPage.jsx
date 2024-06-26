import React from 'react'

import { Typography }  from '@mreycode/system-ui';

import typpographyVariants from '../../../types/typographyVariants';
import PageLayout from '../../../Layouts/PageLayout';


const TypographyPage = () => {
  return (
    <PageLayout title='Typography'>
      <Typography>Work-in-Progress</Typography>
      <div>
        {
          Object.entries(typpographyVariants).map(([typographyValue], index) => (
            <div key={`typography-${index}`}>
              <Typography variant={typographyValue} >{typographyValue}: Hello world!</Typography>
              <hr/>
            </div>
          ))
        }
      </div>
    </PageLayout>
  )
}

export default TypographyPage;