import React from 'react';
import Heading from '../headings/headings';

const Location = () => {
  return (
    <div>
      <Heading id='#location'>Location</Heading>
      <div className='w-4/5'>
        <iframe
          title='location'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.5377333352044!2d88.31135941475884!3d22.48399928522848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027b1c20583a95%3A0x337feb4e95e37027!2sThe%20Big%20Stock%20Academy!5e0!3m2!1sen!2sin!4v1679337695869!5m2!1sen!2sin'
          width='100%'
          height='400'
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default Location;
