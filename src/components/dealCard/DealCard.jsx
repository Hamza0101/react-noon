import React, { Component } from 'react'
import "./dealcard.css"

export default class DealCard extends Component {
    render() {
        return (
            <div>
                <div className='row bg-color'>
                    <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mega-deal-title-01.png" alt="" />
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <img className='p-2 w-100 h-100' src="https://k.nooncdn.com/cms/pages/20220613/132a14fd27daa415d4dc79add358b814/en_dk_uae-mega-01.png" alt="" />
                        </div>
                        <div className="p-2">
                            <img className='p-2 w-100 h-100' src="https://k.nooncdn.com/cms/pages/20220613/132a14fd27daa415d4dc79add358b814/en_dk_uae-mega-02.png" alt="" />
                        </div>
                        <div className="p-2">
                            <img className='p-2 w-100 h-100' src="https://k.nooncdn.com/cms/pages/20220613/132a14fd27daa415d4dc79add358b814/en_dk_uae-mega-03.png" alt="" />
                        </div>
                        <div className="p-2">
                            <img className='p-2 w-100 h-100' src="https://k.nooncdn.com/cms/pages/20220613/132a14fd27daa415d4dc79add358b814/en_dk_uae-mega-04.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
