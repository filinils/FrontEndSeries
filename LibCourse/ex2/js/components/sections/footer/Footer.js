import * as React from "react";
import { connect } from "react-redux";
import InfoColumn from "./InfoColumn";
import { Fragment } from "react";

class RenderFooter extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            footer: props.footer
                ? props.footer
                : {
                      InfoColumns: [],
                      MainOffice: {
                          OfficeName: "",
                          PhoneNumber: "",
                          Fax: "",
                          EmailAddress: ""
                      },
                      FooterLinks: {
                          Links: []
                      }
                  }
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.footer !== this.props.footer) {
            this.setState({ footer: nextProps.footer });
        }
    }

    render() {
        return (
            <Fragment>
                <div className="l-footer-content">
                    {this.state.footer.InfoColumns.map((column, index) => {
                        let extraClass = index > 0 ? "is-hidden-in-mobile" : "";
                        return (
                            <InfoColumn
                                content={column.Content}
                                propertyName={column.Type}
                                key={index}
                                extraClass={extraClass}
                            />
                        );
                    })}
                </div>

                <div className="l-footer-contact">
                    <div className="c-mainoffice-info">
                        <a href={this.state.footer.MainOffice.OfficeName}>
                            {this.state.footer.MainOffice.OfficeName}
                        </a>
                    </div>
                    <div className="c-mainoffice-info">
                        <a
                            href={
                                "tel:" +
                                this.state.footer.MainOffice.PhoneNumber
                            }
                        >
                            {this.state.footer.MainOffice.PhoneNumber}
                        </a>
                    </div>
                    <div className="c-mainoffice-info">
                        <a href={"tel:" + this.state.footer.MainOffice.Fax}>
                            {this.state.footer.MainOffice.Fax}
                        </a>
                    </div>
                    <div className="c-mainoffice-info">
                        <a
                            href={
                                "mailto:" +
                                this.state.footer.MainOffice.EmailAddress
                            }
                        >
                            {this.state.footer.MainOffice.EmailAddress}
                        </a>
                    </div>
                    <div className="l-share-buttons-container">
                        <span className="c-share-title">[FOLLOW]</span>

                        <a
                            href="//www.facebook.com/pages/Alfa-Laval/171132542929029"
                            title="Follow us on Facebook"
                            className="c-share-link"
                        >
                            <i class="fa fa-facebook" aria-hidden="true" />
                        </a>
                        <a
                            href="//twitter.com/Alfa_Laval"
                            title="Follow us on Twitter"
                            className="c-share-link"
                        >
                            <i class="fa fa-twitter" aria-hidden="true" />
                        </a>
                        <a
                            href="//www.linkedin.com/company/alfa-laval"
                            title="Follow us on LinkedIn"
                            className="c-share-link"
                        >
                            <i class="fa fa-linkedin" aria-hidden="true" />
                        </a>
                        <a
                            href="//www.youtube.com/user/alfalaval"
                            title="Follow us on YouTube"
                            className="c-share-link"
                        >
                            <i class="fa fa-youtube" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <div className="l-footer-country-selector" />
                <div className="l-footer-copy">
                    <div className="c-copyright">© 2010-2017, ALFA LAVAL</div>
                    <div className="l-legal-links">
                        {this.state.footer.FooterLinks.Links.map(link => {
                            return (
                                <a className="c-legal-link" href={link.href}>
                                    {link._text}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        footer: state.footer
    };
}
const Footer = connect(mapStateToProps)(RenderFooter);

export default Footer;
