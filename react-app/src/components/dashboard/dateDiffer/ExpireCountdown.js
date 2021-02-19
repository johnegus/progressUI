import React from 'react'
import '../mini-profile.css'



export const ExpireCountdown = ({grocery})=> {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    // a and b are javascript Date objects
    function dateDiffInDays(a, b) {
      // Discard the time and time-zone information.
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
    
   
    const a = new Date(grocery.createdAt),
        b = new Date(),
        difference = dateDiffInDays(a, b);
    return (
        <div className={
            grocery.type.days_to_expiry - difference  < 7 
            ? 'dayslow' : 'oversevendays'
          }>
            {grocery.type.days_to_expiry - difference > 0 ? grocery.type.days_to_expiry - difference + ' days' : 'EXPIRED'} 
            </div>
    )
}

 