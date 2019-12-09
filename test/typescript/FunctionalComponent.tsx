// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react';


interface IProps {
  children: React.ReactNode
  page: number,
  pages: number,
  pageSize: number,
  isLoadingData: boolean,
}


export function StandardFunctionalComponent({
  children,
  page,
  pages,
  pageSize,
  isLoadingData,
}: IProps) {
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
  isLoadingData,
}: IProps) => (
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
