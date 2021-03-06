import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Category from 'libs/models/Category'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}))
interface Props {
    categories: Category[]
    title: string
}

export default function Header(props: Props) {
    const classes = useStyles()
    const { categories, title } = props

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Button size="small">Subscribe</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}>
                    {title}
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small">
                    Sign up
                </Button>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {categories.map((category: Category) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={category.title}
                        variant="body2"
                        href={'section.url'}
                        className={classes.toolbarLink}>
                        {category.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    )
}
