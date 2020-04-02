import React from 'react'
import { checkOption } from '../../../utils/utils'

export default function ProfileGroup(props){


    return(

        <div>
                <div className="group">
                    <label className="group-title">{props.title}</label>
                    <div className="group-items">

                        { props.items.map((item,index)=>{return( 
                                <div className="group-item" key={"item"+index}>
                                    <label className="item-prop" key={"prop"+index}>{item.prop}</label>
                                    <label className="item-value" key={"val"+index}>{checkOption(item.value)==="other"?"no data":item.value}</label>
                                </div>)
                    
                        }) }


                    </div>
            </div>
        </div>

    )
}