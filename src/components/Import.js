import React from 'react'
import {Button, Table, TableHead, TableBody, TableRow, TableCell} from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const options = ['Delete']



const Import = (props) => {
    // fill out this component

    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (idx) => {
      props.deleteMake(idx)
      setAnchorEl(null);
     
    };

    return (
        <>
        <Button onClick={props.fetchMakes}>
            Import
        </Button>
        <h2>Count: {props.makes.length}</h2>
        <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Delete'} onClick={() => handleClose()}>
            {option}
            
          </MenuItem>
        ))}
      </Menu>
        <Table sx={{ maxWidth: 650}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Make</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.makes.map((make) => (
                    <TableRow>
                        <TableCell>{make.MakeId}</TableCell>
                        <TableCell>{make.MakeName}</TableCell>
                        <TableCell>
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </>
    )
}

export default Import