import React, { useState, useEffect, useRef } from 'react'
import { Line } from '@ant-design/charts'
import useClientProvider from '../../../client/provider'


const Dashboard = () => {
  const data = [
    useClientProvider
  ]
  const config = {
    data,
    yField: 'value',
    xField: 'year',
    tooltip: {
      customContent: (title, items) => {
        return (
          <>
            <h5 style={{ marginTop: 16 }}>{title}</h5>
            <ul style={{ paddingLeft: 0 }}>
              {items?.map((item, index) => {
                const { name, value, color } = item
                return (
                  <li
                    key={item.year}
                    className='g2-tooltip-list-item'
                    data-index={index}
                    style={{ marginBottom: 4, display: 'flex', alignItems: 'center' }}
                  >
                    <span className='g2-tooltip-marker' style={{ backgroundColor: color }} />
                    <span
                      style={{ display: 'inline-flex', flex: 1, justifyContent: 'space-between' }}
                    >
                      <span style={{ margiRight: 16 }}>{name}:</span>
                      <span className='g2-tooltip-list-item-value'>{value}</span>
                    </span>
                  </li>
                )
              })}
            </ul>
          </>
        )
      }
    },
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2
      }
    }
  }

  return <Line {...config} />
}

export default Dashboard
