import React from 'react';
import './App.css';
import ColorPicker from './component/settingColor/ColorPicker'
import SizeSetting from './component/settingColor/SizeSetting'

function Demo() {
  return (
      
    <div className='container mt-50'>
        <div className='row'>
          {/* color picker */}
          <ColorPicker/>

          <SizeSetting/>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>Color : red - Fontsize : 15px</p>
            <div id="content" >
              Nội dung setting
            </div>
          </div>
        </div>
      </div>


  );
}

export default Demo;
