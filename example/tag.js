/**
 * Created by yeanzhi on 17/4/21.
 */
'use strict';
import React from "react";
import { Tag } from 'antd';
// import Tag from '../lib/tag'
// import '../lib/tag/style'
function log(e) {
    console.log(e);
}
export default function () {
    return(
        <div>
            <Tag>Tag 1</Tag>
            <Tag color="#f50">#f50</Tag>
            <Tag closable onClose={log}>Tag 2</Tag>
        </div>
    )
}
