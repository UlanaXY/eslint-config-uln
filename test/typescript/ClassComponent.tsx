// eslint-disable-next-line import/no-extraneous-dependencies, no-use-before-define
import * as React from 'react';
import SimpleComponent from './SimpleComponent';


export interface ReactTableState {
  page: number,
  pageSize: number,
  pages: number,
}

interface ResponseData {
  data: object[],
  page: number,
  totalPages: number,
  perPage: number,
}

export interface IContext {
  data: object[],
  page: number,
  pages: number,
  pageSize: number,
  isLoadingData: boolean,
  additionalHttpGetArgs: object,
  setAdditionalHttpGetArgs: null | ((additionalHttpGetArgs: object, callback: () => void) => void),
  fetchData: null | ((args: ReactTableState) => void),
}

export const defaultContext = {
  data: [],
  page: 0,
  pages: -1, // -1 means that we don't know number of pages
  pageSize: 10,
  isLoadingData: true,
  additionalHttpGetArgs: {},
  setAdditionalHttpGetArgs: null,
  fetchData: null,
};

const ServerSideTableContext = React.createContext<IContext>(defaultContext);

interface IProps {
  children: React.ReactNode,
  rawFetchData: (args: {
    page: number,
    perPage: number,
  }) => Promise<{
    data: object[],
    page: number,
    totalPages: number,
    perPage: number,
  }>,
}

interface IState extends IContext {}

class ServerSideTableContextProvider extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      ...defaultContext,
      fetchData: this.fetchData,
      setAdditionalHttpGetArgs: this.setAdditionalHttpGetArgs,
    };
  }

  fetchData = (tableState: ReactTableState) => {
    const { rawFetchData } = this.props;
    const { additionalHttpGetArgs } = this.state;
    const state = tableState || this.state;

    if (rawFetchData == null) {
      // eslint-disable-next-line no-console
      console.error('rawFetchData function is null');
      return;
    }

    this.setState({
      isLoadingData: true,
    });
    const body = {
      // react-table indexes page from 0, but backend use indexing from 1
      page: state.page + 1,
      perPage: state.pageSize,
      ...(additionalHttpGetArgs),
    };

    rawFetchData(body)
      .then((responseData: ResponseData) => {
        this.setState({
          data: responseData.data,
          // react-table indexes page from 0, but backend use indexing from 1
          page: responseData.page - 1,
          pages: responseData.totalPages,
          pageSize: responseData.perPage,
          isLoadingData: false,
        });
      });
  };

  setAdditionalHttpGetArgs = (additionalHttpGetArgs: object, callback: () => void) => {
    this.setState({
      additionalHttpGetArgs,
    }, callback);
  };


  render() {
    const { children } = this.props;
    const {
      data,
      page,
      pages,
      pageSize,
      isLoadingData,
      fetchData,
      setAdditionalHttpGetArgs,
      additionalHttpGetArgs,
    } = this.state;

    const value = {
      data,
      page,
      pages,
      pageSize,
      isLoadingData,
      fetchData,
      setAdditionalHttpGetArgs,
      additionalHttpGetArgs,
    };

    return (
      <ServerSideTableContext.Provider value={value}>
        <SimpleComponent />
        {children}
      </ServerSideTableContext.Provider>
    );
  }
}

export default ServerSideTableContextProvider;
