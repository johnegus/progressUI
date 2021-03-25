import React from 'react'
import Button from '@material-ui/core/Button';
import { deleteActivity, getactivities } from '../../../services/activities';


export const DeleteActivity = ({activity, setactivities})=> {
    const userId = localStorage.getItem('userId')
    


    return (
        <>
            <Button variant="outlined" color="primary" onClick={async ()=> {
                              await deleteActivity(activity.id)
                              const response = await getactivities(userId)
                              const sortedactivities = await response.activities.sort((a, b) => a.type.days_to_expiry - b.type.days_to_expiry)
                                setactivities(sortedactivities)
                              }}>Delete</Button>
        </>
    )
}