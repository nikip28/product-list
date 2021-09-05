import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        "&.MuiGrid-item:hover": {
            transform: "scale(1.1)"
        }
    }
}));


export default useStyles;