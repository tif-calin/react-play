import React from 'react';

const PageTitle: React.FC<{}> = ({ children }) => {
  return (
    <h2 className="PageTitle">
      {children}
    </h2>
  );
};

export default PageTitle;