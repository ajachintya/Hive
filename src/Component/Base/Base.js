import React, { Component } from 'react';

export default class Base extends Component {
    render() {
        return (
          <div className="wrapper">
            <header className="main-header">
              <a href="dashboard.html" className="logo">
                <span className="logo-mini">
                  <b>
                    <img src="assets/img/favicon.png" alt="aa" />
                  </b>
                </span>
                <span className="logo-lg">
                  <b>
                    <img
                      src="assets/img/hivezillastudio.png"
                      className="img-responsive"
                      alt="aa"
                    />
                  </b>
                </span>
              </a>

              <nav className="navbar navbar-static-hrefp">
                <a
                  href="/home"
                  className="sidebar-hrefggle"
                  data-hrefggle="push-menu"
                  role="buthrefn"
                >
                  <span className="sr-only"> navigation</span>
                </a>

                <div className="navbar-cushrefm-menu">
                  <ul className="nav navbar-nav">
                    <li className="dropdown user user-menu">
                      <a
                        href="/home"
                        className="dropdown-hrefggle"
                        data-hrefggle="dropdown"
                      >
                        <span>
                          UserName
                          <br />
                        </span>
                        <span style={{ fontSize: "11px" }}>Host</span>
                        <img
                          src="assets/img/user-profile.jpg"
                          className="user-image"
                          alt="User"
                        />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="user-body">
                          <div className="row">
                            <div className="col-xs-12 text-left">
                              <a href="/home">Email Address</a>
                            </div>
                            <div className="col-xs-12 text-left">
                              <a href="/home">+91 9876543210</a>
                            </div>
                          </div>
                        </li>
                        <li className="user-footer">
                          <div className="pull-right">
                            <a
                              href="/home"
                              className="btn btn-warning btn-flat"
                            >
                              Sign out
                            </a>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
            <aside className="main-sidebar">
              <section className="sidebar">
                <ul className="sidebar-menu" data-widget="tree">
                  <li className="active">
                    <a href="dashboard.html">
                      <i
                        className="fa fa-home"
                        style={{ fontSize: "20px" }}
                      ></i>
                      <span
                        style={{
                          letterSpacing: "2px",
                          marginLeft: "5px",
                          fontSize: "12px",
                        }}
                      >
                        HOME
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="schedule event.html">
                      <i
                        className="fa fa-calendar-check-o"
                        style={{ fontSize: "20px" }}
                      ></i>
                      <span
                        style={{
                          letterSpacing: "2px",
                          marginLeft: "5px",
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        SCHEDULE EVENT
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/home">
                      <i
                        className="fa fa-calendar"
                        style={{ fontSize: "20px" }}
                      ></i>{" "}
                      <span
                        style={{
                          letterSpacing: "2px",
                          marginLeft: "5px",
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        SCHEDULE MEETING
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/home">
                      <img
                        src="assets/img/ai.png"
                        height="20px"
                        width="20px"
                        alt="aa"
                      />
                      <span
                        style={{
                          letterSpacing: "2px",
                          marginLeft: "5px",
                          fontSize: "12px",
                        }}
                      >
                        AI ENGINE
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/home">
                      <img
                        src="assets/img/Analytics.png"
                        height="20px"
                        width="20px"
                        alt="aa"
                      />{" "}
                      <span
                        style={{
                          letterSpacing: "2px",
                          marginLeft: "5px",
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        ANALYTICS
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/home">
                      <img
                        src="assets/img/promotion.png"
                        height="20px"
                        width="20px"
                        alt="aa"
                      />{" "}
                      <span
                        style={{
                          letterSpacing: "2px",
                          marginLeft: "5px",
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        CREATE PROMOTION
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/home">
                      <i className="fa fa-cog" style={{ fontSize: "20px" }}></i>{" "}
                      <span
                        style={{
                          letterSpacing: "2px",
                          marginLeft: "5px",
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        PROFILE
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/home">
                      <i className="fa fa-key" style={{ fontSize: "20px" }}></i>{" "}
                      <span
                        style={{
                          letterSpacing: "2px",
                          marginLeft: "5px",
                          fontSize: "12px",
                        }}
                      >
                        CHANGE PASSWORD
                      </span>
                    </a>
                  </li>
                </ul>
              </section>
            </aside>
            <div className="content-wrapper pts-6">
              <section className="content"></section>
            </div>
            <div className="control-sidebar-bg"></div>
          </div>
        );
    }
}
