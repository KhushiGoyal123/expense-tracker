import React from 'react'
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core';
import {Deleet, MoneyOff} from '@material-ui/icons';

import useStyles from './styles';

const List = () => {
  const classes = useStyles();

  const transactions =[
    { id: 1,}
  ];

  return (
    <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) =>(
            <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>

            </Slide>
        ))}
    </MUIList>
  )
}

export default List