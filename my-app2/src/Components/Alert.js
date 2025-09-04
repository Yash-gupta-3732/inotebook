import React from 'react'

function Alert(props) {
  const capitalize = () => {

    const firstText = props.alert.type.charAt(0).toUpperCase();
    const otherPartOfText = props.alert.type.slice(1);
    return firstText + otherPartOfText;
  }
  return (
    <>
    <div style={{height:' 60px'}}>   {/*adding extra div which contains the alert bar inside it. and due to its fixed height it solve the cls problem(layout shifting problem) as it already occupied the space wheather alert is on or not */}
      {(props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role='alert'>
        <strong>{capitalize()}</strong>:{props.alert.msg}
      </div>)}
    </div>
    </>
  )
}

export default Alert
