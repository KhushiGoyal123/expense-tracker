import React , {useContext} from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';

import useStyles from './styles';
import { ExpenseTrackerContext } from '../../context/context';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
  const classes = useStyles();
  const {balance} = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Header" subheader="Powered by Speechly" />
        <CardContent>
            <Typography align="center" variant="h5">
                Total Balance ${balance}
            </Typography>
            <Typography variant="subtitle1" style={{lineHeight: '1.5rem', marginTop: '20px'}}>
                {/* Info card compo */}
                Try saying: Add income for $100
            </Typography>
            <Divider className={classes.divider}/>
            <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
}

export default Main;