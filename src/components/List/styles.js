import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    fromControl: {
        maagrin: theme.spacing(1), 
        minWidth: 120, 
        marginBottom: '30px'
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    loading: {
        height: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containter: {
        padding: '25px'
    },
    marginBottom: {
        marginBottom: '30px'
    },
    list: {
        height: '75vh',
        overflow: 'auto'
    }
}));