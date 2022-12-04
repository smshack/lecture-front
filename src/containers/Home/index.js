import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Home = props => {
    const [modifyValue,setModifyValue] = useState(false)
    useEffect(() => {
      console.log(`modifyValue: ${modifyValue} 값`);
      console.log("modifyValue 값이 변경되면 실행");
    }, [modifyValue]);
  return (
    <div>
      Home
      <p>{modifyValue ? "true" : "false"}</p>
      <button onClick={() => setModifyValue(!modifyValue)}>
        modifyValue 변경
      </button>
    </div>
  );
  
}

Home.propTypes = {}

export default Home