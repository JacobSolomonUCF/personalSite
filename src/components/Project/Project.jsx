import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = theme => ({
    card: {
        height: '150px',
        border: '1.5px solid #3d5a80',
        boxShadow: '2px 7px 11px 0px rgba(61,90,128,0.78)',
        display: 'flex',
        width: '80%',
        margin: '10px auto',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    content: {
        flex: '1 0 auto',
        paddingBottom: '5px !important',
        position: 'relative',
    },
    cover: {
        width: '100px !important',
        height: '100px',
        margin: 'auto',
        borderRadius: '4px',
        color: '#3d5a80',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    title:{
        textAlign: 'left',
        fontSize: theme.typography.pxToRem(15),

    },
    description:{
        paddingTop: '10px',
        textTransform: 'initial',
        textAlign: 'left',
        fontSize: theme.typography.pxToRem(13),
    },
    repo:{
        fontSize: theme.typography.pxToRem(13),
        position: 'absolute',
        bottom: '5px',
        right: '15px',
    },
    link:{
        color: '#3d5a80',
    },
    private:{
        color: '#000',
    }
});

function Project(props) {
    const { classes, data } = props;

    return (
        <div>
            {data.map((item,index) => (
                <Card className={classes.card} key={index}>
                    <FontAwesomeIcon className={classes.cover} icon={item.icon} />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography className={classes.title} component="h5" variant="h5">
                                {item.title}
                            </Typography>
                            <Typography className={classes.description} variant="subtitle1" color="textSecondary">
                                {item.description}
                            </Typography>
                            <div className={classes.repo}>
                                {item.repo_url ?
                                    (<a className={classes.link} href={item.repo_url}>Public Repo</a>):
                                    (<span className={classes.private}>Private Repo</span>)
                                }
                            </div>
                        </CardContent>
                    </div>

                </Card>
                ))}
        </div>
    );
}

Project.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Project);