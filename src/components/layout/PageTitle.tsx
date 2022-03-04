import React from 'react';

const PageTitle: React.FC<any> = ({ children }) => {
  return (
    <h1 className="PageTitle">
      {children}
    </h1>
  );
};

export default PageTitle;
