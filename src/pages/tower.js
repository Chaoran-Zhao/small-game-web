import * as React from 'react';

import '../App.css';

function Tower() {
    return <>
    <div className='container' style={{textAlign:'center'}}>
        {[...Array(3)].map((e,index) => { return (
        <div className='Tbox'>
            <hr style={{ width:'100%', height:'2px', bottom:'0', margin:'0px', position:'absolute'}}/>
        </div>)})}
    </div>
    </>
}
export default Tower;