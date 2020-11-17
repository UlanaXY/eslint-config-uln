// eslint-disable-next-line import/no-extraneous-dependencies, no-use-before-define
import React, { useState, useEffect } from 'react';


interface StandardFunctionalComponentProps {
  children: React.ReactNode,
  page: number,
  pages: number,
  pageSize: number,
  isLoadingData?: boolean,
}


export function StandardFunctionalComponent({
  children,
  page,
  pages,
  pageSize,
  isLoadingData = true,
}: StandardFunctionalComponentProps) {
  const [a, setA] = useState<number>(6);

  useEffect(() => {
    setA(page);
  }, [page]);

  return (
    <div>
      <span>
        {a}
      </span>
      <span>
        {page}
      </span>
      <span>
        {pages}
      </span>
      <span>
        {pageSize}
      </span>
      <span>
        {isLoadingData}
      </span>
      {children}
    </div>
  );
}


const ArrowComponent = ({
  children,
  page,
  pages,
  pageSize,
  isLoadingData = true,
}: StandardFunctionalComponentProps) => (
  <div>
    <span>
      {page}
    </span>
    <span>
      {pages}
    </span>
    <span>
      {pageSize}
    </span>
    <span>
      {isLoadingData}
    </span>
    {children}
  </div>
);

export default ArrowComponent;
