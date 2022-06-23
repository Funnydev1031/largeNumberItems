import React, { useState } from "react";
import { Item } from "../../components/Item/index";
import mockData from "../../utility/mock.json"
import { ItemType } from "../../utility/types";

export const Main = () => {
    const [itemNum, setItemNum] = useState<number>(6)

    return (
        <div className="row">
            {   
                mockData.slice(0, itemNum).map((item: ItemType, index: number) => <Item item_data={item} key={index}/>)
            }
            <span onClick={() => {setItemNum(itemNum + 6)}} className="btn btn-primary mx-2 mb-3">Show more</span>
        </div>
    )
}