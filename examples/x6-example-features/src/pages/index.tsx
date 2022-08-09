import React from 'react'
import { Table } from 'antd'
import './index.less'

const dataSource = [
  {
    key: '1',
    example: 'animation',
    description: '动画',
  },
]

const columns = [
  {
    title: 'example',
    dataIndex: 'example',
    render(text: string) {
      return <a href={`./${text}`}>{text}</a>
    },
  },
  {
    title: 'description',
    dataIndex: 'description',
  },
]

export default function () {
  return (
    <div className="home">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        size="small"
      />
    </div>
  )
}
