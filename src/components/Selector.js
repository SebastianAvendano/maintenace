import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const SelectItems = ({ items, placeHolder, keyValue, keyLabel }) => {
  return (
    <Select showSearch placeholder={placeHolder}>
      {items.map((item) => (
        <Option value={item[keyValue]} key={item[keyValue]}>
          {item[keyLabel]}
        </Option>
      ))}
    </Select>
  )
}

export default SelectItems
