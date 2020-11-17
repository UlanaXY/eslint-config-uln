// eslint-disable-next-line import/no-extraneous-dependencies, no-use-before-define
import * as React from 'react';


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
  return (
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
