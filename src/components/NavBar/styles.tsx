import { Theme, createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      // border: '1px solid red',
      display: 'flex',
      flexDirection: 'row',
      // padding: theme.spacing(1.5),
      justifyContent: 'space-between',
      backgroundColor: 'coral',
    },
    button: {
      height: 50,
    },
    title: {
      padding: theme.spacing(1.5),
    },
  }),
)
