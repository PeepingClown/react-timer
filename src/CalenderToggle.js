import React from "react";
import Switch from '@material-ui/core/Switch';

function CalenderToggle(props){
    return(
   <div className="container cal">
    <Switch
        onChange={props.handleChange}
        color="primary"
        name="calender"
      />
      <i class="far fa-calendar-alt fa-2x"></i>

    </div>
    );
}

export default CalenderToggle;