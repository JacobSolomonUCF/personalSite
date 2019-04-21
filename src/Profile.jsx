import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LaptopMac from "@material-ui/icons/LaptopMac";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Build from "@material-ui/icons/Build";
// core components
import Header from "./components/Header/Header.jsx";
import Button from "./components/CustomButtons/Button.jsx";
import GridContainer from "./components/Grid/GridContainer.jsx";
import GridItem from "./components/Grid/GridItem.jsx";
import HeaderLinks from "./components/Header/HeaderLinks.jsx";
import NavPills from "./components/NavPills/NavPills.jsx";
import Parallax from "./components/Parallax/Parallax.jsx";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";

import profile from "./assets/img/color.jpg";
import Content from "./assets/content.json";
import Project from "./components/Project/Project.jsx";

import profilePageStyle from "./ProfileStyles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@material-ui/core/Tooltip";

class Profile extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
        <Header
          color="transparent"
          brand="Jacob Solomon"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: '0.55',
            color: "primary"
          }}
          {...rest}
        />
        <Parallax small filter image={require("./assets/img/headerBackground.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.bottom}>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Jacob Solomon</h3>
                      <h6>FULL STACK DEVELOPER</h6>
                      <Tooltip
                        title="Checkout GitHub"
                        placement={"bottom"}
                      >
                        <Button justIcon link
                                className={`${classes.margin5} ${classes.hover}`}
                                href="https://github.com/JacobSolomonUCF"
                                target={"_blank"}
                        >
                          <i className={`fab fa-github ${classes.hover}`} />
                        </Button>
                      </Tooltip>
                      <Tooltip
                        title="Connect on LinkedIn"
                        placement={"bottom"}
                      >
                        <Button justIcon link
                                className={`${classes.margin5} ${classes.hover}`}
                                href="https://www.linkedin.com/in/jacob-solomon-a81a7912b/"
                                target={"_blank"}
                        >
                          <i className={"fab fa-linkedin-in"} />
                        </Button>
                      </Tooltip>
                      <Tooltip
                        title="Download my Resume"
                        placement={"bottom"}
                      >
                        <Button justIcon link
                                className={`${classes.margin5} ${classes.hover}`}
                                href="https://drive.google.com/open?id=1stfgG6nzSzRSukMr1nzPgDObWWiJDEvM"
                                target={"_blank"}
                        >
                          <FontAwesomeIcon icon='file' />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  {Content.about.summary}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Projects",
                        tabIcon: LaptopMac,
                        tabContent: (<Project data={Content.projects} />)
                      },
                      {
                        tabButton: "Experience",
                        tabIcon: Build,
                        tabContent: (<Experience data={Content.experience} />)
                      },
                      {
                        tabButton: "About",
                        tabIcon: AccountCircle,
                        tabContent: (<About items={Content.about.info} />)
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(Profile);
