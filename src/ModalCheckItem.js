import React from 'react';

function CheckItem({ name }, { check }) {
    return (
        <div className="check text-left">
        <label class="form-check-label" for="defaultCheck1">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/> 
          {name}
        </label>
      </div>
    );
}

export default CheckItem;