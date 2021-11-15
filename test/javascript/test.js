// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';


// eslint-disable-next-line no-console
(() => { console.log() })();

const Button = (props) => (<div {...props} />);
const FormGroup = (props) => (<div {...props} />);
const Input = (props) => (<div {...props} />);
const Label = (props) => (<div {...props} />);
const Nav = (props) => (<div {...props} />);
const NavItem = (props) => (<div {...props} />);
const NavLink = (props) => (<div {...props} />);


if (Math.random() === 12) {
  setCookie('12', 12, 12);
}


const defaultCookieConfig = [
  {
    shortTitle: 'Google',
    title: 'Google Analytics',
    info: 'Używamy tych ciasteczek aby monitorować ruch na stronie i badać, jak nasi użytkownicy z niej korzystają. Zbierane dane są całkowicie anonimowe.',
    cookies: ['_ga', '_gat*', '_gid'],
  },
];

const defaultTranslation = {
  cookieBar: {
    infoText: 'Ta strona wykorzystuje pliki Cookies w celu zapewnienia jej poprawnego działania oraz do monitorowania ruchu na stronie.',
    settingsButton: 'Ustawienia Prywatności',
    confirmButton: 'Zgadzam się',
  },
  cookieModal: {
    modalTitle: 'Centrum Ustawień Prywatności',
    saveSettings: 'Zapisz ustawienia',
    consentText: 'Wyrażam zgode na wybrane ciasteczka',
  },

};


function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
}

function getCookie(name) {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    // eslint-disable-next-line eqeqeq
    while (c.charAt(0) == ' ') { c = c.substring(1, c.length) }
    // eslint-disable-next-line eqeqeq
    if (c.indexOf(nameEQ) == 0) { return c.substring(nameEQ.length, c.length) }
  }
  return null;
}

export function areThisCookiesAllowed(cookies) {
  const allowedCookies = { ...JSON.parse(getCookie('allowedCookies')) };

  // eslint-disable-next-line no-restricted-syntax
  for (const cookie of cookies) {
    if (!allowedCookies[cookie]) {
      return false;
    }
  }
  return true;
}

/**
 * @type {{cookiesConfig: array, translation: object, editSettingsMode: boolean}}
 *  ask for permissions for chosen cookies and create cookie 'allowedCookies',
 *  which store json object with following structure:
 *
 *  {
 *      'cookiename': bool(isAllowed),
 *      _ga: true,
 *      _fa: false,
 *  }
 *
 *  if flag 'editSettingsMode' is true, then componet will render setting button instead of cookibar
 *
 */
export default class CookiesConsent extends React.Component {
  static propTypes = {
    translation: PropTypes.shape({
      cookieBar: PropTypes.shape({
        infoText: PropTypes.string,
        settingsButton: PropTypes.string,
        confirmButton: PropTypes.string,
      }),
      cookieModal: PropTypes.shape({
        modalTitle: PropTypes.string,
        saveSettings: PropTypes.string,
        consentText: PropTypes.string,
      }),
    }),
    editSettingsMode: PropTypes.bool,
    cookiesConfig: PropTypes.arrayOf(PropTypes.shape({
      shortTitle: PropTypes.string,
      title: PropTypes.string,
      info: PropTypes.string,
      cookies: PropTypes.arrayOf(PropTypes.string),
    })),
  };

  static defaultProps = {
    translation: defaultTranslation,
    cookiesConfig: defaultCookieConfig,
    editSettingsMode: false,
  };

  constructor(props) {
    super(props);

    // console.log(allCookies);

    this.state = {
      showCookieBar: false,
      showConfigModal: false,
      activeTab: 0,
      acceptedCookies: {},
    };
  }

  componentDidMount() {
    const { cookiesConfig } = this.props;

    let shouldShowInfo = false;
    const newCookies = {};

    let loadedCookies = JSON.parse(getCookie('allowedCookies'));
    if (loadedCookies === null) {
      shouldShowInfo = true;
      loadedCookies = {};
    }

    cookiesConfig.forEach(({ cookies }) => {
      cookies.forEach((cookie) => {
        if (loadedCookies[cookie] === undefined) {
          shouldShowInfo = true;
          // console.log(' to jest undef', cookie);
          newCookies[cookie] = true;
        }
      });
    });

    const allCookies = {
      ...newCookies,
      ...loadedCookies,
    };

    this.setState({
      showCookieBar: shouldShowInfo,
      acceptedCookies: allCookies,
    });
  }

  showModal = () => this.setState({ showConfigModal: true });

  hideModal = () => this.setState({ showConfigModal: false });

  // areThisCookiesAllowed = cookies => false;
  areThisCookiesAllowed = (cookies) => {
    let allowed = true;
    const { acceptedCookies } = this.state;
    cookies.forEach((cookie) => {
      if (!acceptedCookies[cookie]) {
        allowed = false;
      }
    });
    return allowed;
  };

  acceptAllCookies = () => {
    const { acceptedCookies } = this.state;
    const newCookies = {};

    // setting all cookies to true
    // eslint-disable-next-line no-restricted-syntax
    for (const cookie in acceptedCookies) {
      // eslint-disable-next-line no-prototype-builtins
      if (acceptedCookies.hasOwnProperty(cookie)) {
        newCookies[cookie] = true;
      }
    }

    this.setState({
      acceptedCookies: newCookies,
    }, this.acceptCookies);
  };

  acceptCookies = () => {
    const { acceptedCookies } = this.state;
    this.setState({
      showConfigModal: false,
      showCookieBar: false,
    });
    setCookie('allowedCookies', JSON.stringify(acceptedCookies), 365);
  };


  toggleSelected = (shouldBeAllowed, cookies) => {
    const { acceptedCookies } = this.state;
    const newCookies = {};
    // console.log(shouldBeAllowed);

    cookies.forEach((cookie) => { newCookies[cookie] = shouldBeAllowed });
    this.setState({
      acceptedCookies: {
        ...acceptedCookies,
        ...newCookies,
      },
    });
    // console.log({
    //     ...acceptedCookies,
    //     ...newCookies,
    // });
  };

  renderModalContent = () => {
    const { translation, cookiesConfig } = this.props;
    const { activeTab } = this.state;
    const navTabs = [];
    const contents = [];

    cookiesConfig.forEach((cookieObject, i) => {
      navTabs.push(
        <NavItem key={cookieObject.shortTitle}>
          <NavLink
            active={activeTab === i}
            onClick={() => this.setState({ activeTab: i })}
          >
            {cookieObject.shortTitle}
          </NavLink>
        </NavItem>
      );
      contents.push(
        <div key={cookieObject.shortTitle}>
          <div className="cookieInfoTitle">
            {cookieObject.title}
          </div>
          <p className="cookieInfo">
            {cookieObject.info}
          </p>
          <div className="checkboxContainerAndCookieList">
            <FormGroup
              check
              className="checkboxContainer"
            >
              <Label className="checkboxLabel" check>
                <Input
                  type="checkbox"
                  checked={this.areThisCookiesAllowed(cookieObject.cookies)}
                  onChange={(e) => this.toggleSelected(e.target.checked, cookieObject.cookies)}
                />
                {translation.cookieModal.consentText}
              </Label>
            </FormGroup>
            <div className="cookieList">
              {cookieObject.cookies.join(', ')}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="cookiesModalContent">
        <Nav tabs>
          {navTabs}
        </Nav>
        <div className="tabContent">
          {contents[activeTab]}
        </div>
      </div>
    );
  };

  render() {
    const { translation, editSettingsMode } = this.props;
    const { showCookieBar, showConfigModal } = this.state;


    return (
      <>
        { (showCookieBar && !editSettingsMode)
        && (
          <div id="cookieBar" className="cookieBarContainer">
            <div className="content">
              <div className="info">
                {translation.cookieBar.infoText}
              </div>
              <div className="buttons">
                <Button
                  text={translation.cookieBar.settingsButton}
                  onClick={this.showModal}
                />
                <Button
                  text={translation.cookieBar.confirmButton}
                  onClick={this.acceptAllCookies}
                />
              </div>
            </div>
          </div>
        )}
        { editSettingsMode
        && (
          <Button
            text={translation.cookieBar.settingsButton}
            onClick={this.showModal}
          />
        )}
        { showConfigModal
        && (
          <div id="cookiesModal" className="cookiesModalContainer">
            <div className="cookiesModal">
              <div className="cookiesModalBody">
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  type="button"
                  className="cookiesModalClose"
                  aria-label="close"
                  onClick={this.hideModal}
                />
                <div className="cookiesModalTitle">
                  {translation.cookieModal.modalTitle}
                </div>
                {this.renderModalContent()}
                <div className="cookiesModalFooter">
                  <Button
                    text={translation.cookieModal.saveSettings}
                    onClick={this.acceptCookies}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
