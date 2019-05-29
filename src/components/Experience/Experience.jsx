import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem"
import PanoramaFishEye from "@material-ui/icons/PanoramaFishEye";


const styles = theme => ({
    root: {
        width: '85%',
        color: '#FFF',
        margin: 'auto'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        textAlign: 'left',
        color: '#FFF',
    },
    tab:{
        margin: '10px 0px',
        backgroundColor: '#3d5a80',
    },
    color:{
      color: '#FFF',
    },
    title:{
     fontWeight: 'bold',
    },
    item:{
        fontSize: theme.typography.pxToRem(13),
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: '10px',
    },
    bulletContainer:{
        position: 'absolute',
        left: 0,
        top: '1px',
    },
    bullet:{
        fontSize: theme.typography.pxToRem(10),
        padding: '2px',
    },
    text:{
        paddingLeft: '5px',
    },
    date:{
        position: 'absolute',
        top: '45px',
        left: '25px',
        opacity: 0,
        transition: 'opacity .5s',
    },
    active:{
        opacity: 1,
        transition: 'opacity .5s',
    }
});

class Experience extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes, data } = this.props;
        const { expanded } = this.state;
        return (
            <div className={classes.root}>
                {data.map((item,index) => {
                        return (
                            <ExpansionPanel className={classes.tab} key={index} expanded={expanded === index} onChange={this.handleChange(index)}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon nativeColor={'#FFF'} color={'inherit'} />}>
                                    <Typography className={classes.heading}>{item.company} / <span className={classes.title}>{item.title}</span></Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                            <div className={classes.color}>
                                                <Typography className={`${classes.color} ${classes.date} ${expanded === index && classes.active}`}>{item.start_date} - {item.end_date}</Typography>
                                                <List dense={true}>
                                                    {item.task.map((x,index) => (
                                                        <ListItem className={classes.item} key={index}>
                                                            <div className={classes.bulletContainer}>
                                                                <PanoramaFishEye className={classes.bullet}/>
                                                            </div>
                                                            <span className={classes.text}>{x}</span>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        )
                })}
            </div>
        );
    }
}

Experience.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
};

export default withStyles(styles)(Experience);