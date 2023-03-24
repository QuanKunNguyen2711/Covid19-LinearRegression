import React from 'react'
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles({
    wrapper: (props) => {
        if (props.type === 'confirmed') return {borderLeft: '5px solid #c9302c'};
        else if (props.type === 'recovered') return {borderLeft: '5px solid #28a745'};
        else  return {borderLeft: '5px solid black'};
    },
    title: {
        fontsize: 18,
        marginBottom: 5
    },
    count: {
        fontWeight: 'bold',
        fontsize: 18
    }
})

function HighlightCard({ title, count, type }) {
    const styles = useStyle({ type });
    return (
        <Card className={styles.wrapper}>
            <CardContent>
                <Typography component="p" variant="body2" className={styles.title}>{title}</Typography>
                <Typography component="span" variant="body2" className={styles.count}>{count}</Typography>
            </CardContent>
        </Card>
    )
}

export default HighlightCard
