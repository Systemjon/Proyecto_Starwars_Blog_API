import React from "react"
import PropTypes from "prop-types"

export const Information = (props)=> {
    
    return (
        <div className="text-center container rounded p-3">
            <div className="card text-sucess" style={{width: "18rem;"}}>
                <div class="card-header fw-bold fs-4">
                    {props.name}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-sucess fs-5">{props.data}</li>
                </ul>
            </div>
        </div>
    )
};
Information.propTypes = {
    name: PropTypes.string,
    data: PropTypes.string
    
}
















