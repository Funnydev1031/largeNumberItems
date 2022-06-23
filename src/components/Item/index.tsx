import React from "react";
import { ItemType } from "../../utility/types";
interface ItemProps {
    item_data: ItemType
}

export const Item = ({item_data}: ItemProps) => {
    return(
        <div className="col-6 col-md-4 p-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{item_data.title}</h5>
                    <p className="card-text">{item_data.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
