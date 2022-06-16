import React from 'react'

export default function Support() {
  return (
    <div>
        <div className="bg-light">
            <div className='container m-4 d-flex'>
                <div className='col-6'>
                <h4>
                    <strong>We're Always Here To Help</strong>
                </h4>
                    <p>Reach out to us through any of these support channels</p>
                    </div>
                    <div className='col-6'>

                <div className='d-flex flex-row-reverse'>

                    <div className='p-2'>
                    <p className=''> Email Support</p>
                    <span>
                   
                    <h5> 
                        <img className='footer-logo' src="data:image/png;base64,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" alt="" /> 
                    <strong>care@noon.com</strong>
                    </h5>
                    </span>
                    </div>
                    <div className='p-2'>
                    <p className=''> Help Center</p>
                    <h5> <strong>help.noon.com</strong></h5>
                    </div>
                </div>
                </div>
                <p>
                    
                </p>
            </div>
            </div>

    </div>
  )
}
